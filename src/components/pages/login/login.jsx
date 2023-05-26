import { Box, Button, TextField } from "@mui/material";
import React from "react";
import "./login.scss";
import { object, string } from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

let loginSchema = object({
  email: string().required(),
  password: string().required(),
});

export const Login = () => {
  let navigate = useNavigate();
  const loginFromValidator = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log(values);
      navigate("/product");
    },
  });

  return (
    <>
      <div className="background_login">
        <Box className="login_container">
          <Box className="app_header">
            <h1 className="header">Smart phone manager</h1>
          </Box>
          <Box className="login_header">
            <h1 className="header">Login form</h1>
          </Box>
          <br />
          <Box className="login_wrapper">
            <form onSubmit={loginFromValidator.handleSubmit}>
              <TextField
                className="input_login"
                error={loginFromValidator.errors.email}
                id="outlined-error"
                label="Email"
                defaultValue={loginFromValidator.initialValues.email}
                value={loginFromValidator.values.email}
                helperText={loginFromValidator.errors.email}
                placeholder="Eg. mai_trong_nhan"
                name="email"
                onChange={loginFromValidator.handleChange}
              />
              <br />
              <br />
              <TextField
                className="input_login"
                error={loginFromValidator.errors.password}
                id="outlined-error-helper-text"
                label="Password"
                defaultValue={loginFromValidator.initialValues.password}
                value={loginFromValidator.values.password}
                helperText={loginFromValidator.errors.password}
                type="password"
                name="password"
                onChange={loginFromValidator.handleChange}
              />
              <br />
              <br />
              <br />
              <Button
                variant="contained"
                color="success"
                type="submit"
                className="submit_login_form_button"
                size="large"
              >
                Login
              </Button>
            </form>
          </Box>
        </Box>
      </div>
    </>
  );
};
