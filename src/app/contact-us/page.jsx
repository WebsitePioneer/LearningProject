"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Banner from "@/components/ui/Banner";
import { Form, Input, Select, Button, Row, Col, message } from "antd";

const { TextArea } = Input;

const ContactUs = () => {
  const formRef = useRef();

  const sendEmail = (values) => {
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
        "your_service_id", // replace with your service ID
        "your_template_id", // replace with your template ID
        templateParams,
        "your_public_key" // replace with your public key
      )
      .then(
        () => {
          message.success("Message sent successfully!");
          formRef.current.resetFields();
        },
        (error) => {
          message.error("Failed to send message. Try again later.");
          console.error(error);
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

      <section className="w-11/12 grid grid-cols-3 grid-rows-1 gap-8 mx-auto my-28 mt-20">
        {/* Contact number */}
        <div className="px-10 py-10 bg-[#f7f7f7] rounded-lg">
          <div className="px-8 py-8 pb-6 bg-[#FFB31A] w-fit rounded-lg">
            <span
              className="material-symbols-outlined text-white"
              style={{ fontSize: "48px" }}
            >
              call
            </span>
          </div>
          <div className="mt-8 flex flex-col gap-2">
            <h4 className="text-3xl font-bold">
              <a href="tel:+919876543210">+91 98765 43210</a>
            </h4>
            <h4 className="text-3xl font-bold">
              <a href="tel:+919876543210">+91 98765 43210</a>
            </h4>
          </div>
        </div>

        {/* Email Address */}
        <div className="px-10 py-10 bg-[#f7f7f7] rounded-lg">
          <div className="px-8 py-8 pb-6 bg-[#FFB31A] w-fit rounded-lg">
            <span
              className="material-symbols-outlined text-white"
              style={{ fontSize: "48px" }}
            >
              mail
            </span>
          </div>
          <div className="mt-8 flex flex-col gap-2">
            <h4 className="text-3xl font-bold">
              <a href="mailto:abcd@gmail.com">admin@thinqchess.com</a>
            </h4>
            <h4 className="text-3xl font-bold">
              <a href="abcd@gmail.com">admin2@thinqchess.com</a>
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

      <section className="w-11/12 flex flex-row gap-16 mx-auto my-28">
        <div className="w-[50%]">
          <img src="/images/contact-img.png" className="w-full rounded-lg" />
        </div>
        <div className="w-[50%]">
          <p className="text-[#2B3AA0]">CONTACT US</p>
          <h2 className="mt-5 text-5xl font-bold text-[#2B3AA0] leading-[60px]">
            Have questions? Contact with us today
          </h2>
          <div className="mt-10">
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

              {/* Age and location */}
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="Age"
                    rules={[
                      {
                        required: true,
                        message: "Please enter contact number",
                      },
                    ]}
                  >
                    <Input placeholder="Age" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="location"
                    rules={[
                      { required: true, message: "Please enter your location" },
                    ]}
                  >
                    <Input placeholder="Location" />
                  </Form.Item>
                </Col>
              </Row>

              {/* Contact number and email id */}
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="contactNumber"
                    rules={[
                      {
                        required: true,
                        message: "Please enter contact number",
                      },
                    ]}
                  >
                    <Input placeholder="Contact Number" />
                  </Form.Item>
                </Col>
                <Col span={12}>
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
                </Col>
              </Row>

              <Form.Item
                name="programLevel"
                rules={[{ required: true, message: "Select a program level" }]}
              >
                <Select placeholder="Preferred program level">
                  <Select.Option value="beginner">Beginner</Select.Option>
                  <Select.Option value="intermediate">
                    Intermediate
                  </Select.Option>
                  <Select.Option value="advanced">Advanced</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item name="message">
                <TextArea placeholder="Message (optional)" rows={4} />
              </Form.Item>

              <Form.Item>
                <button
                  className="bg-[#FFB31A] text-white text-[18px] rounded-lg px-8 py-2"
                  type="submit"
                >
                  Send Message
                </button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
