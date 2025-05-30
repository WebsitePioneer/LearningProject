"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Banner from "@/components/ui/Banner";
import { Form, Input, Select, Button, Row, Col, message } from "antd";
import MultiStepForm from "@/components/MultiStepForm";

const { TextArea } = Input;

const RegistrationPage = () => {
  const formRef = useRef();
  const [succesMessage, setSuccesMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (values) => {
    setIsSubmitting(true);
    const templateParams = {
      parent_name: values.parentName,
      child_name: values.childName,
      age: values.Age,
      location: values.location,
      contact_number: values.contactNumber,
      email: values.email,
      program_level: values.programLevel,
      message: values.message || "",
    };

    emailjs
      .send(
        "service_7y7vvlf", // replace with your service ID
        "template_lfitz1q", // replace with your template ID
        templateParams,
        "74cW5H5JugUoTfj2P" // replace with your public key
      )
      .then(
        () => {
          message.success("Message sent successfully!");
          formRef.current.resetFields();
          setSuccesMessage("Form has been submitted Succesfully");
          setIsSubmitting(false);
        },
        (error) => {
          message.error("Failed to send message. Try again later.");
          setErrorMessage("There is an error submitting the form", error);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <>
      <Banner
        heading={" Let’s Register"}
        image={"/images/about-banner.jpg"}
        link={"/"}
      />

      <section className="w-11/12 flex md:flex-row flex-col md:gap-16 gap-10 mx-auto my-10 md:my-28">
        <div className="md:w-[50%] w-full">
          <img src="/images/contact-img.png" className="w-full rounded-lg" />
        </div>
        <div className="md:w-[50%] w-full">
          <p className="text-[#2B3AA0]">REGISTER NOW!</p>
          <h2 className="md:mt-5 mt-2 md:text-5xl text-4xl leading-[52px] font-bold text-[#2B3AA0] md:leading-[60px]">
            Planning a Match? Register with us today
          </h2>
          <div className="md:mt-10 mt-6">
            <MultiStepForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default RegistrationPage;
