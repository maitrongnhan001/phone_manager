import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./product_list.scss";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const ProductList = () => {
  let navigate = useNavigate();
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "image",
      headerName: "Image",
      width: 150,
      editable: true,
      renderCell: (params) => (
        <img className="table_image" src={params.value} />
      ),
    },
    {
      field: "product_name",
      headerName: "Product name",
      width: 250,
      editable: true,
    },
    {
      field: "product_code",
      headerName: "Product code",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "product_price",
      headerName: "Price",
      type: "number",
      width: 170,
      editable: true,
    },
    {
      field: "year_of_make",
      headerName: "Year of make",
      type: "number",
      width: 150,
      editable: true,
    },
    {
      field: "action",
      headerName: "Actions",
      width: 200,
      editable: false,
      renderCell: (params) => {
        return (
          <>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Button variant="contained" color="success" onClick={() => {
                navigate('/edit');
              }}>
                Edit
              </Button>
              <Button variant="contained" color="error" onClick={() => {
                alert("Do you want delete this product?");
              }}>
                Delete
              </Button>
            </div>
          </>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      image: "./images/products/ip-10.png",
      product_name: "Iphone 10",
      product_code: 35,
      product_price: 1000,
      year_of_make: 2020,
    },
    {
      id: 2,
      image: "./images/products/ip-10.png",
      product_name: "Iphone 10",
      product_code: 35,
      product_price: 1000,
      year_of_make: 2020,
    },
    {
      id: 3,
      image: "./images/products/ip-10.png",
      product_name: "Iphone 10",
      product_code: 35,
      product_price: 1000,
      year_of_make: 2020,
    },
    {
      id: 4,
      image: "./images/products/ip-10.png",
      product_name: "Iphone 10",
      product_code: 35,
      product_price: 1000,
      year_of_make: 2020,
    },
    {
      id: 5,
      image: "./images/products/ip-10.png",
      product_name: "Iphone 10",
      product_code: 35,
      product_price: 1000,
      year_of_make: 2020,
    },
    {
      id: 6,
      image: "./images/products/ip-10.png",
      product_name: "Iphone 10",
      product_code: 35,
      product_price: 1000,
      year_of_make: 2020,
    },
    {
      id: 7,
      image: "./images/products/ip-10.png",
      product_name: "Iphone 10",
      product_code: 35,
      product_price: 1000,
      year_of_make: 2020,
    },
    {
      id: 8,
      image: "./images/products/ip-10.png",
      product_name: "Iphone 10",
      product_code: 35,
      product_price: 1000,
      year_of_make: 2020,
    },
    {
      id: 9,
      image: "./images/products/ip-10.png",
      product_name: "Iphone 10",
      product_code: 35,
      product_price: 1000,
      year_of_make: 2020,
    },
  ];
  return (
    <>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </>
  );
};
