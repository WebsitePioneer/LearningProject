"use client";
import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Select from "react-select";
import { Country, State, City } from "country-state-city";
import "react-phone-input-2/lib/style.css";
import Banner from "@/components/ui/Banner";

const Tournaments = () => {
  const [succesMessage, setSuccesMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const sendEmail = (values) => {
    // setIsSubmitting(true);
    // emailjs
    //   .send(
    //     "service_7y7vvlf", // replace with your service ID
    //     "template_lfitz1q", // replace with your template ID
    //     templateParams,
    //     "74cW5H5JugUoTfj2P" // replace with your public key
    //   )
    //   .then(
    //     () => {
    //       message.success("Message sent successfully!");
    //       formRef.current.resetFields();
    //       setSuccesMessage("Form has been submitted Succesfully");
    //       setIsSubmitting(false);
    //     },
    //     (error) => {
    //       message.error("Failed to send message. Try again later.");
    //       setErrorMessage("There is an error submitting the form", error);
    //       setIsSubmitting(false);
    //     }
    //   );
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
            Tournaments of ThinQ Chess
          </h2>
          <p className="text-[18px] mt-2">
            We host friendly, competitive Regular Tournaments at our center,
            designed to help children experience the joy of competition and
            learn how to handle both wins and losses with grace
          </p>
          <p className="text-[18px]">
            We periodically organize tournaments to give our students the
            required practice and exposure to participate in:
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
            src="/images/contact-img.png"
            className="w-full rounded-lg h-[550px] object-cover"
          />
        </div>
        <div className="md:w-[50%] w-full">
          <h2 className="md:mt-0 mt-2 md:text-5xl text-4xl leading-[52px] font-bold text-[#2B3AA0] md:leading-[60px]">
            Tournament Registration
          </h2>
          <div className="md:mt-6 mt-6">
            <form onSubmit={sendEmail}>
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

              {/* Date of Birth */}
              <div className="flex md:flex-row flex-col gap-4 items-center mt-5">
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
              <div className="flex md:flex-row flex-col gap-4 items-center mt-5">
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
              <div className="flex md:flex-row flex-col gap-4 items-center mt-5">
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
              <div className="flex md:flex-row flex-col gap-6">
                {/* Country */}
                <div className="flex md:flex-row flex-col gap-4 items-center mt-5">
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
                <div className="flex md:flex-row flex-col gap-4 items-center mt-5">
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
              <div className="flex md:flex-row flex-col gap-6">
                {/* City */}
                <div className="flex md:flex-row flex-col gap-4 items-center mt-5">
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
                <div className="flex md:flex-row flex-col gap-4 items-center mt-5">
                  <h2 className="text-[18px]">Location:</h2>
                  <input
                    name="location"
                    placeholder="Location"
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
                  className="bg-[#FFB31A] text-[18px] text-white py-2 px-6 rounded cursor-pointer"
                  disabled={isSubmitting} // Disable during submission
                >
                  {isSubmitting ? "Submitting..." : "Register Now"}
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
