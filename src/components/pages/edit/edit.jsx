import { Box, Button } from "@mui/material";
import React from "react";
import { ProductForm } from "../../partials/product_form/product_form";
import { Menu } from '../../partials/menu/menu';
import "./edit.scss";

export const Edit = () => {
  return (
    <>
      <Menu />
      <Box className="form_edit_container">
        <br />
        <h1>Edit product</h1>
        <br />
        <br />
        <ProductForm />
      </Box>
    </>
  );
};
