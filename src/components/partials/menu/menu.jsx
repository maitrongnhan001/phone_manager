import React from "react";
import "./menu.scss";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <header className="menu">
      <Box className="sub_menu">
        <ul>
          <li>
            <Link to="/">Phone Manager</Link>
          </li>
        </ul>
      </Box>
      <Box className="sub_menu">
        <ul>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/add">Add</Link>
          </li>
          <li>
            <Link to="/">Log out</Link>
          </li>
        </ul>
      </Box>
    </header>
  );
};
