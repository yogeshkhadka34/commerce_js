import { List, ListItem, ListItemText } from "@mui/material";
import React from "react";

const Review = ({ checkoutToken }) => {
  return (
    <>
      <List>
        {checkoutToken?.line_items.map((product) => (
          <ListItem key={product.id}>
            <ListItemText
              primary={`${product.name} \u00A0\u00A0   \u00A0\u00A0   \u00A0\u00A0    \u00A0 ${product.line_total.formatted_with_symbol}`}
              secondary={`Quantity : ${product.quantity}`}
            ></ListItemText>
          </ListItem>
        ))}
        <ListItem>
          <ListItemText
            primary={`Total : ${checkoutToken?.subtotal.formatted_with_symbol}`}
          ></ListItemText>
        </ListItem>
      </List>
    </>
  );
};

export default Review;
