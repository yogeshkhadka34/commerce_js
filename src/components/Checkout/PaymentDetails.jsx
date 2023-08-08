import React from "react";
import Review from "./Review";
import { Divider, Typography } from "@mui/material";

const PaymentDetails = ({ checkoutToken }) => {
  return (
    <>
      <Review checkoutToken={checkoutToken} />
      <Divider />
      <Typography variant="h7">Payment Method</Typography>
    </>
  );
};

export default PaymentDetails;
