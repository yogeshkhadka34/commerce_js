import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Card, CardContent } from "@mui/material";
import AddressForm from "./AddressForm";
import PaymentDetails from "./PaymentDetails";
import Confirmation from "./Confirmation";
import { commerce } from "../../lib/commerce";
import Spinner from "../Spinner";
// import { Navigate, useNavigate } from "react-router-dom";

const Checkout = ({ cart, setCart }) => {
  const steps = ["Shipping Address", "Payment Details"];
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState("");
  const [shippingData, setShippingData] = useState({});

  // const navigate = useNavigate();
  const handleNext = async () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (activeStep === steps.length - 1) {
      await commerce.cart.delete();

      setCart(null);

      // alert("Thankyou for your purchase, keep visiting", () => navigate("/"));
    }
  };
  const next = (data) => {
    setShippingData(data);
    handleNext();
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  useEffect(() => {
    async function generateToken() {
      setCheckoutToken(null);
      if (!cart?.id) return;
      const token = await commerce.checkout.generateToken(cart.id, {
        type: "cart",
      });
      if (!ignore) {
        setCheckoutToken(token);
      }
    }
    let ignore = false;
    generateToken();
    return () => {
      ignore = true;
    };
  }, [cart]);

  return (
    <Card
      sx={{
        maxWidth: 800,
        margin: "0.5rem auto",
      }}
    >
      <CardContent sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h6" component="div">
          Checkout
        </Typography>
      </CardContent>
      <Box sx={{ width: "80%", margin: "0 auto" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {!checkoutToken && <Spinner />}
        {activeStep === steps.length ? (
          <React.Fragment>
            {/* <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box> */}
            <Confirmation />
          </React.Fragment>
        ) : (
          checkoutToken && (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 2, ml: 1 }} component={"span"}>
                {activeStep === 0 ? (
                  <AddressForm checkoutToken={checkoutToken} next={next} />
                ) : (
                  <PaymentDetails
                    shippingData={shippingData}
                    checkoutToken={checkoutToken}
                  />
                )}
                {console.log(shippingData)}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  pt: 2,
                  margin: "1rem auto",
                }}
              >
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>

                <Button onClick={handleNext}>
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          )
        )}
      </Box>
    </Card>
  );
};

export default Checkout;
