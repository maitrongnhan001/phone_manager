import { Box, Button } from "@mui/material";
import React from "react";
import { ProductForm } from "../../partials/product_form/product_form";
import { Menu } from '../../partials/menu/menu';
import "./add.scss";

export const Add = () => {
  return (
    <>
      <Menu/>
      <Box className="form_add_container">
        <br />
        <h1>Add product</h1>
        <br />
        <br />
        <ProductForm/>
      </Box>
    </>
  );
};
