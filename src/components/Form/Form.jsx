import React, { useState } from "react";
import "./index.css";
import { Modal, Space } from 'antd';

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    phoneNumber: "",
    email: "",
    role: "",
    huwaeiPartner: "",
    category: "",
    signUp: ""
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate required fields
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "This field is required";
        isValid = false;
      }
    });

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }

    // Validate phone number format (11 digits)
    const phoneRegex = /^\d{11}$/;
    if (formData.phoneNumber && !phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 11 digits";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      // Form is valid, you can now submit the data or perform further actions
      console.log("Form submitted:", formData);
  
      // Show success modal
      Modal.success({
        content: 'Thank you for registering ✅',
        onOk: () => {
          // Clear the form after modal is closed
          setFormData({
            name: "",
            companyName: "",
            phoneNumber: "",
            email: "",
            role: "",
            huwaeiPartner: "",
            category: "",
            signUp: ""
          });
          setErrors({});
        },
      });
    } else {
      // Form is not valid, display or handle errors
      console.error("Form validation failed:", errors);
    }
  };
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear the error when the user starts typing
  };

  return (
    <form onSubmit={handleSubmit} className="form__container">
      <p>
        PARTICIPATE and be a part of this journey into Deep Digitalization
        Huawei eKit Brand Awareness | Reseller Recruitment | Product
        Introduction
        <br />
        To Register & Participate, Fill out this Form
      </p>
      <div>
        <label htmlFor="name">Name ( First Name and Surname)</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="John David"
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>

      <div>
        <label htmlFor="phoneNumber">Your Contact Mobile Number</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="+23412345678"
        />
        {errors.phoneNumber && (
          <span className="error">{errors.phoneNumber}</span>
        )}
      </div>

      <div>
        <label htmlFor="email">Email Address</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="example@gmail.com"
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>

      <div>
        <label htmlFor="companyName">Company Name:</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          placeholder="Synergsys"
        />
        {errors.companyName && (
          <span className="error">{errors.companyName}</span>
        )}
      </div>

      <div>
        <label>Your Role in your Company:</label>
        <div>
          <label className="form__label">
            <input
              type="radio"
              name="role"
              value="C-Level Executive"
              checked={formData.role === "C-Level Executive"}
              onChange={handleChange}
            />
            C-Level Executive ( CEO/ CFO/ COO/ CIO)
          </label>
          <label className="form__label">
            <input
              type="radio"
              name="role"
              value="Technology"
              checked={formData.role === "Technology"}
              onChange={handleChange}
            />
            Technology ( Solutions Architect/ Support/ Service)
          </label>

          <label className="form__label">
            <input
              type="radio"
              name="role"
              value="Administration"
              checked={formData.role === "Administration"}
              onChange={handleChange}
            />
            Administration ( Pre-Sales/ Sales/ Procurement/Fulfilment)
          </label>
        </div>
        {errors.role && <span className="error">{errors.role}</span>}
      </div>

      <div>
        <label>Which of the Following Category does your Company belong</label>
        <div>
          <label className="form__label">
            <input
              type="radio"
              name="category"
              value="Equipment Reseller Firm"
              checked={formData.category === "Equipment Reseller Firm"}
              onChange={handleChange}
            />
            Equipment Reseller Firm
          </label>
          <label className="form__label">
            <input
              type="radio"
              name="category"
              value="System Integrator Company"
              checked={formData.category === "System Integrator Company"}
              onChange={handleChange}
            />
            System Integrator Company
          </label>

          <label className="form__label">
            <input
              type="radio"
              name="category"
              value="Corporate End-User"
              checked={formData.category === "Corporate End-User"}
              onChange={handleChange}
            />
            Corporate End-User
          </label>
        </div>
        {errors.category && <span className="error">{errors.category}</span>}
      </div>

      <div>
        <label>Is your Company an existing HUAWEI Partner</label>
        <div>
          <label className="form__label">
            <input
              type="radio"
              name="huwaeiPartner"
              value="Yes"
              checked={formData.huwaeiPartner === "Yes"}
              onChange={handleChange}
            />
            Yes
          </label>
          <label className="form__label">
            <input
              type="radio"
              name="huwaeiPartner"
              value="No"
              checked={formData.huwaeiPartner === "No"}
              onChange={handleChange}
            />
            No
          </label>
        </div>
        {errors.huwaeiPartner && <span className="error">{errors.huwaeiPartner}</span>}
      </div>

      <div>
        <label>
          Are you interested in SIGNING-UP as a HUAWEI eKIT Elite Partner for
          Nigeria?
        </label>
        <div>
          <label className="form__label">
            <input
              type="radio"
              name="signUp"
              value="Yes"
              checked={formData.signUp === "Yes"}
              onChange={handleChange}
            />
            Yes
          </label>
          <label className="form__label">
            <input
              type="radio"
              name="signUp"
              value="No"
              checked={formData.signUp === "No"}
              onChange={handleChange}
            />
            No
          </label>
        </div>
        {errors.signUp && <span className="error">{errors.signUp}</span>}
      </div>

      <button type="submit" className="form__btn">
        Submit
      </button>
    </form>
  );
};

export default Form;
