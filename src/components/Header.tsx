import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Logo from "../assets/images/logo.png";
import "./Header.css";

export default function Header() {
  return (
    <Toolbar className="header">
      <Box className="header_logo">
        <img src={Logo} alt="amze" />
      </Box>
      <Box className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </Box>
      <Box className="header_item">
        <div className="header_itemLineOne">Hello User</div>
        <div className="header_itemLineTwo">Sign Out</div>
      </Box>
      <Box className="header_item">
        <div className="header_itemLineOne">Returns</div>
        <div className="header_itemLineTwo">& Orders</div>
      </Box>
      <Box className="header_item">
        <div className="header_itemLineOne">Your</div>
        <div className="header_itemLineTwo">Prime</div>
      </Box>
      <div className="header_optionCart">
        <ShoppingCartIcon />
        <span className="header_optionLineTwo header_cartCount">0</span>
      </div>
    </Toolbar>
  );
}
