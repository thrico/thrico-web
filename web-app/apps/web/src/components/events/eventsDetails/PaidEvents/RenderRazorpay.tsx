import { useEffect, useRef } from "react";

import Axios from "axios";
import crypto from "crypto-js";
import { theme } from "antd";
// Function to load script and append in DOM tree.
const loadScript = (src) =>
  new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      console.log("razorpay loaded successfully");
      resolve(true);
    };
    script.onerror = () => {
      console.log("error in loading razorpay");
      resolve(false);
    };
    document.body.appendChild(script);
  });

const RenderRazorpay = ({ orderId, keyId, keySecret, currency, amount }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const paymentId = useRef(null);
  const paymentMethod = useRef(null);

  useEffect(() => {
    console.log("in razorpay");
    displayRazorpay(options);
  }, []);
  // To load razorpay checkout modal script.
  const displayRazorpay = async (options) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      console.log("Razorpay SDK failed to load. Are you online?");
      return;
    }
    // All information is loaded in options which we will discuss later.
    const rzp1 = new window.Razorpay(options);

    // If you want to retreive the chosen payment method.
    rzp1.on("payment.submit", (response) => {
      paymentMethod.current = response.method;
    });

    // To get payment id in case of failed transaction.
    rzp1.on("payment.failed", (response) => {
      paymentId.current = response.error.metadata.payment_id;
    });

    // to open razorpay checkout modal.
    rzp1.open();
  };
  const handlePayment = async (status, orderDetails = {}) => {
    console.log(status, orderDetails);
    // await Axios.post(`${serverBaseUrl}/payment`, {
    //   status,
    //   orderDetails,
    // });
  };

  const options = {
    key: keyId, // key id from props
    amount: amount, // Amount in lowest denomination from props
    currency, // Currency from props.
    name: "amit", // Title for your organization to display in checkout modal
    // image, // custom logo  url
    order_id: orderId,
    notify: {
      sms: true,
      email: true,
    }, // order id from props
    // This handler menthod is always executed in case of succeeded payment
    handler: (response) => {
      console.log("succeeded");
      console.log(response);
      paymentId.current = response.razorpay_payment_id;

      // Most important step to capture and authorize the payment. This can be done of Backend server.
      const succeeded =
        crypto
          .HmacSHA256(`${orderId}|${response.razorpay_payment_id}`, keySecret)
          .toString() === response.razorpay_signature;

      // If successfully authorized. Then we can consider the payment as successful.
      if (succeeded) {
        handlePayment("succeeded", {
          orderId,
          paymentId,
          signature: response.razorpay_signature,
        });
      } else {
        handlePayment("failed", {
          orderId,
          paymentId: response.razorpay_payment_id,
        });
      }
    },
    modal: {
      confirm_close: true, // this is set to true, if we want confirmation when clicked on cross button.
      // This function is executed when checkout modal is closed
      // There can be 3 reasons when this modal is closed.
      ondismiss: async (reason) => {
        const {
          reason: paymentReason,
          field,
          step,
          code,
        } = reason && reason.error ? reason.error : {};
        // Reason 1 - when payment is cancelled. It can happend when we click cross icon or cancel any payment explicitly.
        if (reason === undefined) {
          console.log("cancelled");
          handlePayment("Cancelled");
        }
        // Reason 2 - When modal is auto closed because of time out
        else if (reason === "timeout") {
          console.log("timedout");
          handlePayment("timedout");
        }
        // Reason 3 - When payment gets failed.
        else {
          console.log("failed");
          handlePayment("failed", {
            paymentReason,
            field,
            step,
            code,
          });
        }
      },
    },
    // This property allows to enble/disable retries.
    // This is enabled true by default.
    retry: {
      enabled: false,
    },
    timeout: 900, // Time limit in Seconds
    theme: {
      color: "red", // Custom color for your checkout modal.
    },
  };

  return null;
};

export default RenderRazorpay;
