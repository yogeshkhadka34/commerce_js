import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const CartItem = ({ item, handleUpdateCartQty, handleRemoveFromCart }) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
    maxWidth: 600,
  }));

  return (
    <Container>
      <Box
        sx={{
          flexGrow: 1,
          overflow: "hidden",
          px: 3,
        }}
      >
        <Item
          sx={{
            my: 1,
            mx: "auto",
            p: 1,
          }}
        >
          <Stack
            spacing={2}
            direction="row"
            alignItems="center"
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Box>
              <Stack spacing={2} direction="row" alignItems="center">
                <Avatar
                  src={item.image?.url}
                  sx={{ width: 56, height: 56 }}
                ></Avatar>
                <Typography noWrap>{item.name}</Typography>{" "}
              </Stack>
            </Box>
            <Box>
              <Stack spacing={2} direction="row" alignItems="center">
                <Button
                  variant="text"
                  size="small"
                  onClick={() =>
                    handleUpdateCartQty(item.id, item.quantity - 1)
                  }
                >
                  -
                </Button>
                <Typography>{item.quantity}</Typography>
                <Button
                  variant="text"
                  size="small"
                  onClick={() =>
                    handleUpdateCartQty(item.id, item.quantity + 1)
                  }
                >
                  +
                </Button>
                <Button
                  variant="text"
                  color="error"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  <DeleteIcon />
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Item>
      </Box>
    </Container>
  );
};

export default CartItem;
