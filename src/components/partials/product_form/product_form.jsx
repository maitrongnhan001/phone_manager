import { Button } from "@mui/material";
import React from "react";
import { InputCommon } from "../../common/input/index";
import { SelectorCommon } from "../../common/select/index";
import { ImageInput } from "../../common/image/index";
import { Quill } from "../../common/quill/index";
import { object, string } from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import "./product_form.scss";

let productSchema = object({
  product_name: string().required(),
  product_code: string().required(),
  year_of_make: string().required(),
  product_price: string().required(),
});

let year_menu = [];
for (let i = 0; i <= 100; i++) {
  year_menu.push({
    label: (2000 + i).toString(),
    value: 2000 + i
  })
}

export const ProductForm = (props) => {
  let navigate = useNavigate();
  const productFormValidator = useFormik({
    initialValues: {
      product_name: "",
      product_code: "",
      year_of_make: "",
      product_price: "",
    },
    validationSchema: productSchema,
    onSubmit: (values) => {
      console.log(values);
      navigate("/product");
    },
  });

  return (
    <>
      <form onSubmit={productFormValidator.handleSubmit}>
        <InputCommon
          label={"Product name"}
          sx={{ width: "100%" }}
          error={productFormValidator.errors.product_name}
          name="product_name"
          onChange={productFormValidator.handleChange}
          value={productFormValidator.values.product_name}
        />
        <InputCommon
          label={"Product code"}
          sx={{ width: "100%" }}
          error={productFormValidator.errors.product_code}
          name="product_code"
          onChange={productFormValidator.handleChange}
          value={productFormValidator.values.product_code}
        />
        <InputCommon
          label={"price"}
          sx={{ width: "100%" }}
          error={productFormValidator.errors.product_price}
          name="product_price"
          onChange={productFormValidator.handleChange}
          value={productFormValidator.values.product_price}
        />
        <SelectorCommon
          label={"Year of make"}
          sx={{ width: "100%" }}
          error={productFormValidator.errors.year_of_make}
          name="year_of_make"
          onChange={productFormValidator.handleChange}
          value={productFormValidator.values.year_of_make}
          menuItem={year_menu}
        />
        <ImageInput title={"Product image"} />
        <Quill />
        <br />
        <br />
        <Button
          variant="contained"
          color="success"
          type="submit"
          className="submit_form_button"
          size="large"
        >
          Success
        </Button>
        <br />
        <br />
        <br />
        <br />
      </form>
    </>
  );
};
