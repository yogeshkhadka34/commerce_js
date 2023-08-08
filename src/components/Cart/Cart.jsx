import React from "react";
import Typography from "@mui/material/Typography";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Container, Stack } from "@mui/system";
import Box from "@mui/material/Box";

const Cart = ({
  cart,
  handleEmptyCart,
  handleUpdateCartQty,
  handleRemoveFromCart,
}) => {
  if (!cart?.line_items) return "Loading Cart......";

  return (
    <Container>
      {!cart.line_items.length ? (
        <Typography gutterBottom variant="h7" component="div">
          Cart is empty, <Link to="/">Go to Products</Link>
        </Typography>
      ) : (
        <>
          {cart.line_items.map((item) => (
            <Typography
              gutterBottom
              variant="h7"
              component="div"
              sx={{ marginTop: "5 rem" }}
            >
              <CartItem
                item={item}
                cart={cart}
                handleUpdateCartQty={handleUpdateCartQty}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            </Typography>
          ))}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "2rem",
              mx: "17rem",
            }}
          >
            {/* Subtotal */}
            <Typography gutterBottom variant="h6" component="div">
              Subtotal : {cart.subtotal.formatted_with_symbol}
            </Typography>
            {/* Empty Cart and Checkout */}
            <Stack
              spacing={2}
              direction="row"
              alignItems="center"
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                variant="outlined"
                color="error"
                onClick={handleEmptyCart}
              >
                Empty Cart
              </Button>
              <Button component={Link} to="/checkout" variant="contained">
                Checkout
              </Button>
            </Stack>
          </Box>
        </>
      )}
    </Container>
  );
};

export default Cart;
