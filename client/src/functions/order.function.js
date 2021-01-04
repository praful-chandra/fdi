import axios from "axios";
import fileDownload from "js-file-download";

export const createOrder = async (cart, address) => {
  try {
    const newOrder = await axios.post("/order", { cart, address });

    if (!newOrder.error) {
      return newOrder.data;
    }
  } catch (err) {
    return { error: "Internal Server Error" };
  }
};

export const payNow = async (orderDets) => {
  try {
    const paytm = await axios.post("/payment/cashfree", orderDets);

    if (!paytm.error) {
      return paytm.data;
      // axios.post("https://securegw-stage.paytm.in/order/process",paytm.data);
    }
  } catch (err) {
    return { error: "Internal Server Error" };
  }
};

export const getOrder = async (orderId) => {
  try {
    let order = await axios.get(`/order/paymentStatus/${orderId}`);
    if (order && !order.error) {
      return order.data;
    }
  } catch (err) {
    return { error: "Internal Server Error" };
  }
};

export const listOrders = async () => {
  try {
    let order = await axios.get(`/order/`);
    if (order && !order.error) {
      return order.data;
    }
  } catch (err) {
    return { error: "Internal Server Error" };
  }
};

export const getAllOrders = async (status,limit,skip,search) => {
  try {
    let order = await axios.post("/order/all", { status,limit,skip,search });
    if (order && !order.error) {
      return order.data;
    }
  } catch (err) {
    return { error: "Internal Server Error" };
  }
};

export const changeOrderStatus = async (orderId, status) => {
  try {
    let order = await axios.post("/order/changeStatus", {
      orderId,
      newStatus: status,
    });
    if (order && !order.error) {
      return order.data;
    }
  } catch (err) {
    return { error: "Internal Server Error" };
  }
};

export const genPdf = async (orderId) => {
  try {
    let order = await axios(`/order/geninvoice/${orderId}`, {
      method: "GET",
      responseType: "blob",
    });
    if (order && !order.error) {
      const file = new Blob([order.data], { type: "application/pdf" });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
      window.saveAs(fileURL,`ORDER - ${orderId}.pdf`); 
    }
  } catch (err) {
    return { error: "Internal Server Error" };
  }
};
