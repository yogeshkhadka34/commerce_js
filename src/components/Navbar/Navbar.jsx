import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import Badge from "@mui/material/Badge";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ totalItems }) {
  const location = useLocation();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            sx={{ flexGrow: 1, textDecoration: "none", color: "inherit" }}
          >
            Ecommerce
          </Typography>
          {location.pathname === "/" ? (
            <IconButton
              component={Link}
              to="/cart"
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={totalItems} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          ) : (
            <IconButton
              component={Link}
              to="/"
              size="large"
              aria-label="add more"
              color="inherit"
            >
              <AddShoppingCartIcon />
              <Typography variant="body2">Add More</Typography>
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
