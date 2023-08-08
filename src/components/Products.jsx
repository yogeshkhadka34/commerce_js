import React from "react";
import Product from "./Product/Product";
import { Container, Grid, Skeleton } from "@mui/material";

// const products = [
//   {
//     id: 1,
//     name: "Red Shoes",
//     description: "Designer Shoes",
//     price: "Rs.1520",
//     image:
//       "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
//   },
//   {
//     id: 2,
//     name: "Run Shoes",
//     description: "Running Shoes",
//     price: "Rs.560",
//     image:
//       "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
//   },
//   {
//     id: 3,
//     name: "Climb Shoes",
//     description: "Snow Shoes",
//     price: "Rs.1990",
//     image:
//       "https://plus.unsplash.com/premium_photo-1663127429325-3acefe582da5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80",
//   },
//   {
//     id: 4,
//     name: "Red Shoes",
//     description: "Designer Shoes",
//     price: "Rs.1520",
//     image:
//       "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
//   },
//   {
//     id: 5,
//     name: "Run Shoes",
//     description: "Running Shoes",
//     price: "Rs.560",
//     image:
//       "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
//   },
//   {
//     id: 6,
//     name: "Climb Shoes",
//     description: "Snow Shoes",
//     price: "Rs.1990",
//     image:
//       "https://plus.unsplash.com/premium_photo-1663127429325-3acefe582da5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80",
//   },
// ];

const Products = ({ products, onAddToCart }) => {
  // console.log(products);
  // return <div>test</div>;

  return (
    <Container>
      <Grid container spacing={3} sx={{ marginTop: "1px" }}>
        {products
          ? products.map((product) => (
              <Grid item key={product.id} xs={12} sm={4} md={3}>
                <Product product={product} onAddToCart={onAddToCart} />
              </Grid>
            ))
          : [...Array(8)].map((i) => (
              <Grid key={i} item xs={12} sm={4} md={3}>
                <Skeleton height={450} />
              </Grid>
            ))}
      </Grid>
    </Container>
  );
};

export default Products;
