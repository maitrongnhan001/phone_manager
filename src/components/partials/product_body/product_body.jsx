import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ProductList } from './product_list/product_list';
import { ProductGird } from './product_gird/product_gird';
import "./product_body.scss";

export const ProductBody = () => {
  // ---------- state ----------//
  const [display_status, set_display_status] = useState("gird");
  const [product_list, set_product_list] = useState(<></>);

  useEffect(() => {
    switch(display_status) {
        case 'list': {
            set_product_list(
                <>
                    <ProductList/>
                </>
            );
            break;
        }
        case 'gird': {
            set_product_list(
                <>
                    <ProductGird/>
                </>
            );
            break;
        }
    }
  }, [display_status]);

  const handle_change_display_status = (status) => {
    set_display_status(status);
  };

  return (
    <>
      <Box className="product_container">
        <h1>List products</h1>
        <label htmlFor="button_display">Display with:</label>
        <br />
        <br />
        <Box id="button_display" className="buttons">
          <Button variant="contained" color="success" onClick={() => handle_change_display_status('list')}>
            List
          </Button>
          <Button variant="contained" onClick={() => handle_change_display_status('gird')}>Gird</Button>
        </Box>
        <br />
        {product_list}
      </Box>
    </>
  );
};
