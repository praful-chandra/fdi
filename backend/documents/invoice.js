const moment = require("moment");
var currencyFormatter = require("currency-formatter");
module.exports = (order) => {
  const renderItems = () => {
    const data = [];
    order.cart.map((item) => {
      data.push(
        `  <tr class="item">
            <td>
               ${item.product.name} <br />
               BasePrice : ${currencyFormatter.format(
                 item.product.discountPrice > 0
                   ? item.product.discountPrice
                   : item.product.price,
                 { code: "INR" }
               )}
               <br />
               Qty : ${item.quantity}  <br/>
               ${
                 item.addOns.length > 0
                   ? `<u>AddOns</u> <br/>
                        ${item.addOns.map(
                          (ad) =>
                            `${ad.title} : ${currencyFormatter.format(
                              ad.price,
                              { code: "INR" }
                            )} <br/>`
                        )}
                       `
                   : ""
               }

               ${
                 item.exchange
                   ? `<u>Exchange</u> <br/>
                        type : ${item.exchange.name} ( ${item.exchange.subType} ) <br/>
                        offerPrice : ${currencyFormatter.format(
                          item.exchange.exchangePrice,
                          { code: "INR" }
                        )}
                       `
                   : ""
               }

            </td>
            
            <td>
                ${currencyFormatter.format(calculateItemPrice(item), {
                  code: "INR",
                })}
            </td>
        </tr>`
      );
    });

    return data;
  };

  const calculateItemPrice = (item) => {
    let price =
      item.product.discountPrice > 0
        ? item.product.discountPrice
        : item.product.price;
    price = price * item.quantity;

    item.addOns.map((ad) => {
      price += ad.price * item.quantity;
    });
    if (item.exchange) {
      price -= item.exchange.exchangePrice;
    }
    return price;
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    order.cart.map((i) => {
      totalPrice += calculateItemPrice(i);
    });
    // console.log(order.cart);

    return totalPrice;
  };

  const calculateCoupon = () => {
    let discountPrice = 0;
    if (order.coupon) {
      let basePrice = calculateTotalPrice();
      let percentage = order.coupon.discountPrecentage;
      let upto = order.coupon.upto;

      discountPrice = (percentage / 100) * basePrice;
      if (discountPrice >= upto) {
        discountPrice = upto;
      }
    }

    return discountPrice;
  };

  return `
    <!doctype html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Fairdeal International - Invoice</title>
        
        <style>
        .invoice-box {
            max-width: 800px;
            margin: auto;
            padding: 10px;
            border: 1px solid #eee;
            box-shadow: 0 0 10px rgba(0, 0, 0, .15);
            font-size: 13px;
            line-height: 20px;
            font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
            color: #555;
        }
        
        .invoice-box table {
            width: 100%;
            line-height: inherit;
            text-align: left;
        }
        
        .invoice-box table td {
            padding: 5px;
            vertical-align: top;
        }
        
        .invoice-box table tr td:nth-child(2) {
            text-align: right;
        }
        
        .invoice-box table tr.top table td {
            padding-bottom: 20px;
        }
        
        .invoice-box table tr.top table td.title {
            font-size: 45px;
            line-height: 45px;
            color: #333;
        }
        
        .invoice-box table tr.information table td {
            padding-bottom: 40px;
        }
        
        .invoice-box table tr.heading td {
            background: #eee;
            border-bottom: 1px solid #ddd;
            font-weight: bold;
        }
        
        .invoice-box table tr.details td {
            padding-bottom: 20px;
        }
        
        .invoice-box table tr.item td{
            border-bottom: 1px solid #eee;
        }
        
        .invoice-box table tr.item.last td {
            border-bottom: none;
        }
        
        .invoice-box table tr.total td:nth-child(2) {
            border-top: 2px solid #eee;
            font-weight: bold;
        }
        
        @media only screen and (max-width: 600px) {
            .invoice-box table tr.top table td {
                width: 100%;
                display: block;
                text-align: center;
            }
            
            .invoice-box table tr.information table td {
                width: 100%;
                display: block;
                text-align: center;
            }
        }
        
        /** RTL **/
        .rtl {
            direction: rtl;
            font-family: Tahoma, 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
        }
        
        .rtl table {
            text-align: right;
        }
        
        .rtl table tr td:nth-child(2) {
            text-align: left;
        }
        </style>
    </head>
    
    <body>
        <div class="invoice-box">
            <table cellpadding="0" cellspacing="0">
                <tr class="top">
                    <td colspan="2">
                        <table>
                            <tr>
                                <td class="title">
                                    <img src="${
                                      process.env.LOGO_URL
                                    }" style="width:100%; max-width:150px;">
                                </td>
                                
                                <td>
                                    Order #: ${order.orderId}<br>
                                     ${moment(order.createdAt).format(
                                       "DD,MMM Y"
                                     )} ${moment(order.createdAt).format(
    "hh:mm:a"
  )}
                                            
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                
                <tr class="information">
                    <td colspan="2">
                        <table>
                            <tr>
                            <td>
                                    ${order.address.address} <br/>
                                    ${order.address.city} ,
                                    ${order.address.state} ,
                                    ${order.address.country} <br />
                                    ${order.address.pin}
                                </td>
                                <td>
                                    ${order.address.firstName} ${
    order.address.lastName
  } <br/>
                                    ${order.address.emailAddress} <br/>
                                    ${order.address.phoneNumber}
                                </td>
                                
                                
                            </tr>
                        </table>
                    </td>
                </tr>
                
                <tr class="heading paymentStatus">
                    <td>
                        Payment Status
                    </td>
                    
                    <td>
                        ${order.paymentStatus}
                    </td>
                </tr>

                <br />
                <br />
                
                
                <tr class="heading">
                    <td>
                        Item
                    </td>
                    
                    <td>
                        Price
                    </td>
                </tr>

                
                    ${renderItems()}
                
                    <tr class="heading paymentStatus">
                    <td>
                        Sub Total : 
                    </td>
                    
                    <td>
                        ${currencyFormatter.format(calculateTotalPrice(), {
                          code: "INR",
                        })}
                    </td>
                </tr>

               ${
                 order.coupon ? `<tr class="heading paymentStatus">
                   <td>
                       CouponDiscount : 
                   </td>
                   
                   <td>
                       ${currencyFormatter.format(calculateCoupon(), {
                         code: "INR",
                       })}
                   </td>
               </tr>` : ""
               }
            
               <tr class="heading paymentStatus">
                   <td>
                       Grand Total : 
                   </td>
                   
                   <td>
                       ${currencyFormatter.format(order.total, {
                         code: "INR",
                       })}
                   </td>
               </tr>
                
                
              
            </table>
        </div>
    </body>
    </html>
    `;
};
