import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginForm = ({ onLoginSuccess }) => {
  const [rememberMe, setRememberMe] = useState(false);

  const handleRememberMe = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = (values) => {

    onLoginSuccess(values.email);
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Invalid email address")
          .required("Email is required"),
        password: Yup.string().required("Password is required"),
      })}
      onSubmit={handleSubmit}
    >
      <Form style={formStyles}>
        <h2>Login</h2>
        <div>
          <label htmlFor="email">Email</label>
          <Field
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            style={inputStyles}
          />
          <ErrorMessage name="email" component="div" style={errorStyles} />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <Field
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            style={inputStyles}
          />
          <ErrorMessage name="password" component="div" style={errorStyles} />
        </div>

        <div className="checkbox-container">
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={handleRememberMe}
          />
          <label htmlFor="rememberMe">Remember me</label>
        </div>

        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

const formStyles = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "8px",
  width: "100%",
  maxWidth: "400px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
};

const inputStyles = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  border: "1px solid #ccc",
  borderRadius: "5px",
};

const errorStyles = {
  color: "red",
  fontSize: "12px",
};

export default LoginForm;
