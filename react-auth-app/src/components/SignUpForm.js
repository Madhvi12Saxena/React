import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignUpForm = () => {
  const [passwordStrength, setPasswordStrength] = useState("");
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      alert("Sign Up Successful");
      resetForm();
    },
  });

  const checkPasswordStrength = (password) => {
    if (password.length < 8) return "Weak";
    if (/\d/.test(password) && /[a-z]/i.test(password)) return "Medium";
    if (/[@$!%*?&#]/.test(password)) return "Strong";
    return "Weak";
  };

  const handlePasswordChange = (e) => {
    formik.handleChange(e);
    setPasswordStrength(checkPasswordStrength(e.target.value));
  };

  return (
    <form onSubmit={formik.handleSubmit} aria-labelledby="sign-up-form">
      <h2 id="sign-up-form">Sign Up</h2>

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        aria-describedby="emailError"
      />
      {formik.touched.email && formik.errors.email && (
        <div className="error" id="emailError">
          {formik.errors.email}
        </div>
      )}

      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={handlePasswordChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        aria-describedby="passwordError"
      />
      <div className="password-strength">Password strength: {passwordStrength}</div>
      {formik.touched.password && formik.errors.password && (
        <div className="error" id="passwordError">
          {formik.errors.password}
        </div>
      )}

      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.confirmPassword}
        aria-describedby="confirmPasswordError"
      />
      {formik.touched.confirmPassword && formik.errors.confirmPassword && (
        <div className="error" id="confirmPasswordError">
          {formik.errors.confirmPassword}
        </div>
      )}

      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
