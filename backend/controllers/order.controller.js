const Order = require("../models/order.model");
const User = require("../models/user.model");
const ProductVarianceColor = require("../models/productVarianceColor.model");
const Deals = require("../models/dealOfTheWeek.model");
const Coupon = require("../models/coupon.model");
const Return = require("../models/returns.model");
var uniqid = require("uniqid");
const pdf = require("html-pdf");
const pdfTemplate = require("../documents/invoice");

exports.addOrder = async (req, res) => {
  try {
    let { cart, address } = req.body;
    let user = await User.findOne({ email: req.user.email });

    let item = [];
    cart.items.map((i) => {
      item.push({
        product: i.product,
        quantity: i.quantity,
        addOns: i.addOns,
        exchange: i.exchange,
      });
    });

    for (let i = 0; i < item.length; i++) {
      let product = await ProductVarianceColor.findById(item[i].product)
        .populate("variance")
        .populate("product");
      let discount = await Deals.findOne({ product: product._id });

      item[i] = {
        ...item[i],
        product: {
          productId: product._id,
          name: `${product.product.name} (${product.variance.title}) (${product.name})`,
          price: product.price,
          discountPrice: discount ? discount.discountPrice : 0,
          image: `/api/serveImage/product/${product.product._id}/0/thumb`,
        },
      };
    }

    let totalSum = 0;

    item.map((i) => {
      totalSum +=
        i.quantity *
        (i.product.discountPrice > 0
          ? i.product.discountPrice
          : i.product.price);

      i.addOns.map((ad) => {
        totalSum += ad.price * i.quantity;
      });

      if (i.exchange !== undefined) {
        totalSum -= i.exchange.exchangePrice;
      }
    });

    const newOrder = new Order({
      orderId: uniqid(),
      customer: user._id,
      cart: item,
      total: totalSum,
      address,
    });
    if (cart.coupon) {
      const cpn = await Coupon.findById(cart.coupon._id);
      newOrder.coupon = {
        title: cpn.name,
        discountPrecentage: cpn.percentage,
        upto: cpn.upto,
        code: cpn.code,
      };

      const finalSum = (cpn.percentage / 100) * newOrder.total;

      newOrder.total -= finalSum <= cpn.upto ? finalSum : cpn.upto;
    }

    await newOrder.save();

    res.json({ order: newOrder });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getOrder = async (req, res) => {
  const { orderId } = req.params;
  try {
    const order = await Order.findOne({ orderId });
    res.json({ paymentStatus: order.paymentStatus,orderId : order.orderId });
  } catch (err) {
    res.status(500).json({ error: "Inrternal server error" });
  }
};

exports.listOrder = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email });
    const orders = await Order.find({ customer: user._id }).sort({
      createdAt: -1,
    });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: "Inrternal server error" });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    let statusEnums = Order.schema.path("status").enumValues;

    let { status, limit, skip, search } = req.body;

    let searchQuery = {};
    if (status && status !== "all") {
      searchQuery = { ...searchQuery ,status };
    }

    search = search.trim();

    if(search && search !== ""){
      searchQuery = {...searchQuery ,orderId : search}
    }

    const orders = await Order.find(searchQuery)
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 })
      .populate("customer");
    return res.json({ orders, statusEnums });
  } catch (err) {
    res.status(500).json({ error: "Inrternal server error" });
  }
};

exports.changeOrderStatus = async (req, res) => {
  try {
    const { orderId, newStatus } = req.body;
    const order = await Order.findOne({ orderId });
    order.status = newStatus;
    order.save();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Inrternal server error" });
  }
};

exports.genPdf = async (req, res) => {
  try {
    const { orderId } = req.params;
    const user = await User.findOne({ email: req.user.email });

    let searchQuery = {
      orderId,
    };
    if (user.role !== "Admin") {
      searchQuery.customer = user._id;
    }

    let order = await Order.findOne(searchQuery);

    order.viewed = true;
    await order.save();

    if (!order) {
      return res.status(203).json({ error: "Not Authorized" });
    }

    pdf.create(pdfTemplate(order), {}).toBuffer((err, response) => {
      if (err) {
        return res.status(500).json({ error: "Inrternal server error" });
      } else {
        // res.contentType("application/pdf");
        res.send(response);
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Inrternal server error" });
  }
};

