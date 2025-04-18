import React, { useCallback, useEffect, useState } from "react";
import { Button, Modal, Space } from "antd";
import { getPaidEventsDetails } from "../../../../graphql/actions/events";
import { useParams } from "next/navigation";
import useRazorpay, { RazorpayOptions } from "react-razorpay";
import RenderRazorpay from "./RenderRazorpay";
import RazorPayButton from "@repo/ui/RazorPayButton";
import StripeButton from "@repo/ui/StripeButton";

import session from "./test";

const Payment = ({ isModalOpen, setIsModalOpen }) => {
  const [loadin, setLoading] = useState(false);
  const publishableKey =
    "pk_test_51ORS58EfqagsTEYp8IIVfTufb7ZaDaEc8OnDNgoWw4OZtzFHCb1VcejCodechgEmNUrxCHfCwrgvsh1ibivHoV4Y00OR0VVXQK";

  const createCheckOutSession = async () => {
    setLoading(true);

    const sess = await session();

    const stripe = await stripePromise;

    const result = await stripe.redirectToCheckout({
      sessionId: sess.id,
    });
    if (result.error) {
      alert(result.error.message);
    }
    setLoading(false);
  };
  const { slug } = useParams();
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const { data, loading, refetch } = getPaidEventsDetails({
    variables: {
      input: {
        slug: slug,
      },
    },
  });
  const [Razorpay] = useRazorpay();

  const [razorPay, setRazorPay] = useState(false);

  return (
    <>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Space>
          <Space onClick={() => setRazorPay(true)}>
            <RazorPayButton />
          </Space>
          <Space onClick={createCheckOutSession}>
            <StripeButton />
          </Space>
        </Space>
        {razorPay && (
          <>
            {!loading && (
              <RenderRazorpay
                amount={data?.getPaidEventsDetails.amount}
                currency={data?.getPaidEventsDetails.currency}
                orderId={data?.getPaidEventsDetails.orderId}
                keyId={"rzp_test_OUV3kWlsbevDCj"}
                keySecret={"UXUr4RBSw8rLy9pkHLWFIBLs"}
              />
            )}
          </>
        )}
      </Modal>
    </>
  );
};

export default Payment;
