import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import parse from "html-react-parser";

const Product = ({ product, onAddToCart }) => {
  // console.log(product);
  // return <div>test</div>;
  // const { result } = stripHtml(product.description);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={product.image?.url}
      />
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Typography gutterBottom variant="h7" component="div">
              {product.name}
            </Typography>
            <Typography variant="body5" color="text.secondary">
              {parse(product.description)}
            </Typography>
          </Box>
          <Typography
            variant="body1"
            color="text.primary"
            sx={{ padding: "2 rem" }}
          >
            {product.price.formatted_with_symbol}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="outlined"
          key={product.id}
          startIcon={<AddShoppingCartIcon />}
          sx={{ margin: "0 auto", padding: "2px 1rem", color: "gray" }}
          onClick={() => onAddToCart(product.id, 1)}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
