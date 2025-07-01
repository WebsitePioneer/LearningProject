"use client";
import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-input-2";
import Select from "react-select";
import { Country, State, City } from "country-state-city";
import "react-phone-input-2/lib/style.css";
import Banner from "@/components/ui/Banner";
import { loadRazorpayScript } from "@/utils/loadRazorpay";

const Tournaments = () => {
  const [succesMessage, setSuccesMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(true);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const Online_Sessions = [
    "District/State Championships",
    "National/International Tournaments",
    "Rated Tournaments",
  ];

  const [formData, setFormData] = useState({
    particpantFirstName: "",
    particpantMiddleName: "",
    particpantLastName: "",
    mail_id: "",
    phone_no: "",
    dob: "",
    gender: "",
    fidaID: "",
    country: "",
    country_code: "",
    state: "",
    city: "",
    location: "",
  });

  // Handles changes for standard input fields
  const handleChange = (e) => {
    setErrorMessage("");
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handles changes for react-select components
  const handleSelectChange = (name, selectedOption) => {
    setErrorMessage("");
    console.log("name =", name, "and selectedoptions =", selectedOption);
    if (name === "country") {
      setFormData((prev) => ({
        ...prev,
        country: selectedOption ? selectedOption.label : "",
        country_code: selectedOption ? selectedOption.value : "",
        state: "", // Reset state when country changes
        city: "", // Reset city when country changes
      }));
    } else if (name === "state") {
      setFormData((prev) => ({
        ...prev,
        state: selectedOption ? selectedOption.value : "",
        city: "", // Reset city when state changes
      }));
    } else if (name === "city") {
      setFormData((prev) => ({
        ...prev,
        city: selectedOption ? selectedOption.value : "",
      }));
    }
  };

  const handlePayment = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Basic validation (you can expand this)
    if (
      !formData.particpantFirstName ||
      !formData.particpantLastName ||
      !formData.dob ||
      !formData.gender ||
      !formData.country ||
      !formData.state ||
      !formData.city
    ) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");
    setSuccesMessage("");

    const razorpayLoaded = await loadRazorpayScript();

    if (!razorpayLoaded) {
      setErrorMessage(
        "Failed to load Razorpay SDK. Check your internet connection."
      );
      setIsSubmitting(false);
      return;
    }

    try {
      const amount = 300; // Rs. 300 (your comment says Rs. 500, but code is 300)
      const res = await fetch("/api/razorpay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });
      const data = await res.json();

      if (data.error) {
        setErrorMessage(data.error);
        setIsSubmitting(false);
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        name: "Thinq Chess",
        description: "Tournament Payment",
        order_id: data.order.id,
        handler: async function (response) {
          setSuccesMessage("Payment successful!");

          // Now you can send the email after successful payment
          const templateParams = {
            particpantFirstName: formData.particpantFirstName,
            particpantMiddleName: formData.particpantMiddleName,
            particpantLastName: formData.particpantLastName,
            mail_id: formData.mail_id,
            phone_no: formData.phone_no,
            dob: formData.dob,
            gender: formData.gender,
            fidaID: formData.fidaID,
            country: formData.country,
            country_code: formData.country_code,
            state: formData.state,
            city: formData.city,
            location: formData.location,
            payment_status: "Payment Successfull",
            amount_paid: amount,
          };

          // Google Sheets API
          const FORM_WEB_APP_URL =
            "https://script.google.com/macros/s/AKfycbwIWvxDN2ghQzvFCajO8WsJz9nOy8WhGctWhHS5l6gDQ0hxdSkVxg-FFCT9KxLUrslQRQ/exec";

          fetch("/api/submit", {
            method: "POST",
            body: JSON.stringify({
              webAppUrl: FORM_WEB_APP_URL,
              templateParams,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((response) => {
              console.log("Google Sheets response:", response);
            })
            .catch((err) => {
              console.error("Error writing to Google Sheets:", err);
            });

          // Uncomment and use your emailjs code here
          emailjs
            .send(
              "service_hk9vt4i", // replace with your service ID
              "template_ed3hqbp", // replace with your template ID
              templateParams,
              "RXCvCuvaDD6zohMef" // replace with your public key
            )
            .then(
              () => {
                console.log("Email sent successfully!");
              },
              (error) => {
                console.error("Failed to send email:", error);
                setErrorMessage(
                  "Registration successful, but failed to send confirmation email."
                );
              }
            );

          setFormData({
            particpantFirstName: "",
            particpantMiddleName: "",
            particpantLastName: "",
            mail_id: "",
            phone_no: "",
            dob: "",
            gender: "",
            fidaID: "",
            country: "",
            country_code: "",
            state: "",
            city: "",
            location: "",
          });
        },
        prefill: {
          name:
            formData.particpantFirstName +
            formData.particpantMiddleName +
            formData.particpantLastName, // Consider using formData.particpantFirstName etc. for prefill
          email: formData.mail_id, // Consider using an email field from your form
          contact: formData.phone_no.replace(/^\+91\s?/, ""), // Consider using a phone number field from your form
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment initiation failed:", error);
      setErrorMessage("Failed to initiate payment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (formData.country_code) {
      const stateList = State.getStatesOfCountry(formData.country_code);
      setStates(stateList);
      setCities([]); // Reset cities
    } else {
      setStates([]);
      setCities([]);
    }
  }, [formData.country_code]);

  useEffect(() => {
    if (formData.country_code && formData.state) {
      const cityList = City.getCitiesOfState(
        formData.country_code,
        formData.state
      );
      setCities(cityList);
    } else {
      setCities([]);
    }
  }, [formData.state, formData.country_code]);

  return (
    <>
      <Banner
        heading={"Where young minds test their mettle"}
        image={"/images/about-banner.jpg"}
        link={"/"}
      />

      <section className="w-11/12 mx-auto flex md:flex-row flex-col gap-12 md:mt-28 mt-14 mb-12 md:mb-20">
        <div className="md:w-[50%] w-full flex flex-col gap-4">
          <h2 className="md:text-5xl text-4xl leading-[52px] font-bold text-[#2B3AA0] md:leading-[60px]">
            ThinQ Chess Tournaments
          </h2>
          <p className="text-[18px] mt-2">
            We host friendly, competitive regular tournaments at our center,
            designed to help children experience the joy of competition and
            learn how to handle both wins and losses with grace.
          </p>
          <p className="text-[18px]">
            Our periodical tournaments give our students the required practice
            and exposure to participate in:
          </p>

          {/* List */}
          <div className="flex flex-col gap-2">
            {Online_Sessions.map((session, index) => {
              return (
                <div key={index} className="flex items-center gap-2">
                  <div className="flex item-center w-fit">
                    <span
                      className="material-symbols-outlined text-[#FFB31A]"
                      style={{ fontSize: "24px", fontWeight: "600" }}
                    >
                      check
                    </span>
                  </div>
                  <p className="text-[18px]">{session}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="md:w-[50%] max-md:hidden w-full">
          <div className="p-1">
            <img
              src="/images/chess-tournament.webp"
              alt="Chessboard"
              className="w-full min-h-[420px] object-cover object-center rounded-tl-[0px] rounded-br-[120px] "
            />
          </div>
        </div>
      </section>

      <section className="w-11/12 flex md:flex-row flex-col md:gap-16 gap-10 mx-auto my-10 md:my-28">
        <div className="md:w-[50%] w-full">
          <img
            src="/images/tournament_img.jpg"
            className="w-full rounded-lg h-[650px] object-cover"
          />
        </div>
        <div className="md:w-[50%] w-full">
          <h2 className="md:mt-0 mt-2 md:text-5xl text-4xl leading-[52px] font-bold text-[#2B3AA0] md:leading-[60px]">
            Tournament Registration
          </h2>
          <p className="mt-4 text-[14px]">
            (Tournament registration is closed, thank you for your
            understanding.)
          </p>
          <div className="md:mt-6 mt-6">
            <script src="https://checkout.razorpay.com/v1/checkout.js" />
            <form onSubmit={handlePayment}>
              {/* Participant Name */}
              <h2 className="text-[18px] mb-2">Participant Name:</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <input
                  name="particpantFirstName"
                  placeholder="First Name *"
                  value={formData.particpantFirstName}
                  onChange={handleChange}
                  required
                  className="p-1 border border-[#d3d1d1] rounded"
                />
                <input
                  name="particpantMiddleName"
                  placeholder="Middle Name (Optional)"
                  value={formData.particpantMiddleName}
                  onChange={handleChange}
                  className="p-1 border border-[#d3d1d1] rounded"
                />
                <input
                  name="particpantLastName"
                  placeholder="Last Name *"
                  value={formData.particpantLastName}
                  onChange={handleChange}
                  required
                  className="p-1 border border-[#d3d1d1] rounded"
                />
              </div>

              {/* MailId and Phone number */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5">
                <div className="w-full">
                  <h2 className="text-[18px] mb-2">Mail ID:</h2>
                  <input
                    name="mail_id"
                    type="email"
                    placeholder="Mail ID *"
                    value={formData.mail_id}
                    onChange={handleChange}
                    required
                    className="p-1 w-full border border-[#d3d1d1] rounded"
                  />
                </div>
                <div className="w-full">
                  <h2 className="text-[18px] mb-2">Phone no:</h2>
                  <PhoneInput
                    country={"in"} // default country
                    inputStyle={{ width: "100%", height: "34px" }}
                    enableSearch={true}
                    inputProps={{
                      name: "phone_no",
                      required: true,
                    }}
                    value={formData.phone_no} // Control value directly
                    onChange={(value, countryData, e, formattedValue) =>
                      setFormData((prev) => ({
                        ...prev,
                        phone_no: formattedValue,
                      }))
                    }
                  />
                </div>
              </div>

              {/* Date of Birth */}
              <div className="flex md:flex-row flex-col gap-4 md:items-center mt-5">
                <h2 className="text-[18px]">Date of Birth:</h2>
                <div>
                  <input
                    name="dob"
                    type="date"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                    className="w-full p-1 border border-[#d3d1d1] rounded"
                  />
                </div>
              </div>

              {/* Gender */}
              <div className="flex md:flex-row flex-col gap-4 md:items-center mt-5">
                <h2 className="text-[18px]">Gender:</h2>
                <div className="flex gap-4">
                  {["Male", "Female", "Other"].map((g) => (
                    <label key={g} className="flex items-center gap-1">
                      <input
                        type="radio"
                        name="gender"
                        value={g}
                        checked={formData.gender === g}
                        onChange={handleChange}
                        required
                      />
                      {g}
                    </label>
                  ))}
                </div>
              </div>

              {/* FIDE ID */}
              <div className="flex md:flex-row flex-col gap-4 md:items-center mt-5">
                <h2 className="text-[18px]">FIDE ID (if any):</h2>
                <input
                  name="fidaID"
                  placeholder="FIDE ID"
                  value={formData.fidaID}
                  onChange={handleChange}
                  className="p-1 border border-[#d3d1d1] rounded"
                />
              </div>

              {/* Country and State */}
              <div className="flex md:flex-row flex-col md:gap-6">
                {/* Country */}
                <div className="flex md:flex-row flex-col gap-4 md:items-center mt-5">
                  <h2 className="text-[18px]">Country:</h2>
                  <Select
                    options={Country.getAllCountries().map((c) => ({
                      label: c.name,
                      value: c.isoCode,
                      phonecode: c.phonecode, // Not used, but kept for context
                    }))}
                    className="md:w-[200px] w-full"
                    placeholder="Select a country *"
                    value={
                      formData.country_code
                        ? {
                            label: formData.country,
                            value: formData.country_code,
                          }
                        : null
                    }
                    onChange={(selectedOption) =>
                      handleSelectChange("country", selectedOption)
                    }
                    required
                  />
                </div>

                {/* State */}
                <div className="flex md:flex-row flex-col gap-4 md:items-center mt-5">
                  <h2 className="text-[18px]">State:</h2>
                  <Select
                    options={states.map((s) => ({
                      label: s.name,
                      value: s.isoCode,
                    }))}
                    placeholder="Select a state *"
                    className="md:w-[200px] w-full"
                    value={
                      formData.state
                        ? {
                            label:
                              states.find((s) => s.isoCode === formData.state)
                                ?.name || formData.state,
                            value: formData.state,
                          }
                        : null
                    }
                    onChange={(selectedOption) =>
                      handleSelectChange("state", selectedOption)
                    }
                    isDisabled={!formData.country_code} // Disable if no country selected
                    required
                  />
                </div>
              </div>

              {/* City and Location */}
              <div className="flex md:flex-row flex-col md:gap-6 ">
                {/* City */}
                <div className="flex md:flex-row flex-col gap-4 md:items-center mt-5">
                  <h2 className="text-[18px]">City:</h2>
                  <Select
                    options={cities.map((c) => ({
                      label: c.name,
                      value: c.name,
                    }))}
                    placeholder="Select a city *"
                    className="md:w-[200px] w-full"
                    value={
                      formData.city
                        ? { label: formData.city, value: formData.city }
                        : null
                    }
                    onChange={(selectedOption) =>
                      handleSelectChange("city", selectedOption)
                    }
                    isDisabled={!formData.state} // Disable if no state selected
                    required
                  />
                </div>

                {/* Location */}
                <div className="flex md:flex-row flex-col gap-4 md:items-center mt-5">
                  <h2 className="text-[18px]">Address:</h2>
                  <input
                    name="location"
                    placeholder="Address"
                    value={formData.location}
                    onChange={handleChange}
                    className="p-1 border border-[#d3d1d1] rounded"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="mt-8">
                <button
                  type="submit"
                  className={`bg-[#FFB31A] text-[18px] text-white py-2 px-6 rounded ${
                    isSubmitting ? "cursor-not-allowed" : "cursor-pointer"
                  }`}
                  disabled={isSubmitting} // Disable during submission
                >
                  {/* {isSubmitting ? "Paying..." : "Pay Now"} */}
                  Pay Now
                </button>
              </div>
            </form>
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

export default Tournaments;
