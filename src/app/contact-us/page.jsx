"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Banner from "@/components/ui/Banner";
import { Form, Input, Select, Row, Col, message } from "antd";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import RegistrationForm from "@/components/TestingFom";

const { TextArea } = Input;

const ContactUs = () => {
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
      contact_number: `+${values.phone}`,
      email: values.email,
      state: values.state,
      country: values.country,
    };

    console.log("values", values);
    console.log("templateParams", templateParams);

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
        heading={" Let’s connect"}
        image={"/images/about-banner.jpg"}
        link={"/"}
      />

      <section className="w-11/12 max-md:flex max-md:flex-col md:grid grid-cols-3 grid-rows-1 gap-8 mx-auto my-28 mt-20">
        {/* Contact number */}
        <div className="px-10 py-10 bg-[#f7f7f7] rounded-lg">
          <div className="px-8 py-8 pb-6 bg-[#FFB31A] w-fit rounded-lg ">
            <i className="material-symbols-outlined text-white md:!text-[48px] !text-[32px]">
              call
            </i>
          </div>
          <div className="mt-8 flex flex-col gap-2">
            <h4 className="md:text-3xl text-2xl font-bold">
              <a href="tel:+919876543210">+91 98765 43210</a>
            </h4>
            <h4 className="md:text-3xl text-2xl font-bold">
              <a href="tel:+919876543210">+91 98765 43210</a>
            </h4>
          </div>
        </div>

        {/* Email Address */}
        <div className="px-10 py-10 bg-[#f7f7f7] rounded-lg">
          <div className="px-8 py-8 pb-6 bg-[#FFB31A] w-fit rounded-lg">
            <i className="material-symbols-outlined text-white md:!text-[48px] !text-[32px]">
              mail
            </i>
          </div>
          <div className="mt-8 flex flex-col gap-2">
            <h4 className="md:text-3xl text-2xl font-bold">
              <a href="mailto:admin@thinqchess.com">admin@thinqchess.com</a>
            </h4>
            <h4 className="md:text-3xl text-2xl font-bold">
              <a href="mailto:admin2@thinqchess.com">admin2@thinqchess.com</a>
            </h4>
          </div>
        </div>

        {/* Address */}
        <div className="bg-[#f7f7f7] rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
            className="w-full h-full rounded-lg"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <section className="w-11/12 flex md:flex-row flex-col md:gap-16 gap-10 mx-auto my-10 md:my-28 md:mb-10">
        <div className="md:w-[50%] w-full">
          <img src="/images/contact-img.png" className="w-full rounded-lg" />
        </div>
        <div className="md:w-[50%] w-full">
          <p className="text-[#2B3AA0]">CONTACT US</p>
          <h2 className="md:mt-5 mt-2 md:text-5xl text-4xl leading-[52px] font-bold text-[#2B3AA0] md:leading-[60px]">
            Have questions? Contact with us today
          </h2>
          <div className="md:mt-10 mt-6">
            <Form
              ref={formRef}
              layout="vertical"
              onFinish={sendEmail}
              autoComplete="off"
            >
              {/* Parent and child name */}
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="parentName"
                    rules={[
                      { required: true, message: "Please enter parent name" },
                    ]}
                  >
                    <Input placeholder="Parent Name" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="childName"
                    rules={[
                      {
                        required: true,
                        message: "Please enter child's name and age",
                      },
                    ]}
                  >
                    <Input placeholder="Child’s Name" />
                  </Form.Item>
                </Col>
              </Row>

              {/* Age and Contact number */}
              <div>
                <Form.Item
                  name="Age"
                  rules={[
                    {
                      required: true,
                      message: "Please enter contact number",
                    },
                  ]}
                >
                  <Input placeholder="Age in Years" />
                </Form.Item>
                <Form.Item
                  name="phone"
                  label="Phone Number"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your phone number",
                    },
                  ]}
                >
                  <PhoneInput
                    country={"in"} // default country
                    inputStyle={{ width: "100%" }}
                    enableSearch={true}
                    inputProps={{
                      name: "phone",
                      required: true,
                    }}
                    onChange={(value, country, e, formattedValue) =>
                      console.log(value, formattedValue)
                    }
                  />
                </Form.Item>
              </div>

              {/* email and location */}
              <div>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      type: "email",
                      message: "Enter a valid email",
                    },
                  ]}
                >
                  <Input placeholder="Email Address" />
                </Form.Item>
                <Form.Item
                  name="state"
                  rules={[
                    { required: true, message: "Please enter your State" },
                  ]}
                >
                  <Input placeholder="State" />
                </Form.Item>
                <Form.Item
                  name="country"
                  rules={[
                    { required: true, message: "Please enter your country" },
                  ]}
                >
                  <Input placeholder="Country" />
                </Form.Item>
              </div>

              <Form.Item>
                <button
                  className={`bg-[#FFB31A] text-white text-[18px] rounded-lg px-8 py-2 ${
                    isSubmitting ? "cursor-not-allowed" : "cursor-pointer"
                  }`}
                  type="submit"
                  disabled={isSubmitting}
                >
                  Get in touch with us
                </button>
              </Form.Item>
            </Form>
            {succesMessage && (
              <p className="text-green-600 text-[20px] font-[500]">
                {succesMessage}
              </p>
            )}
            {errorMessage && (
              <p className="text-red-800 text-[20px] font-[500]">
                {errorMessage}
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
