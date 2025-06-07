// components/MultiStepForm.tsx
"use client";
import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { Country, State, City } from "country-state-city";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ReCAPTCHA from "react-google-recaptcha";

const MultiStepFormTwo = () => {
  const { handleSubmit, control, setValue, watch, reset } = useForm();
  const [classesfor, setClassesFor] = useState("Child");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [step, setStep] = useState(1);
  const [succesMessage, setSuccesMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedCountry = watch("country");
  const selectedState = watch("state");

  useEffect(() => {
    if (selectedCountry) {
      setStates(State.getStatesOfCountry(selectedCountry.value));
      setValue("phoneCode", `+${selectedCountry.phonecode}`);
      setValue("state", null);
      setValue("city", null);
      setCities([]);
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedState && selectedCountry) {
      setCities(
        City.getCitiesOfState(selectedCountry.value, selectedState.value)
      );
      setValue("city", null);
    }
  }, [selectedState]);

  const [formData, setFormData] = useState({
    studentFirstName: "",
    studentMiddleName: "",
    studentLastName: "",
    dob: "",
    gender: "",
    studentEmail: "",
    studentPhone: "",

    fatherFirstName: "",
    fatherMiddleName: "",
    fatherLastName: "",
    fatherEmail: "",
    fatherPhone: "",
    motherFirstName: "",
    motherMiddleName: "",
    motherLastName: "",
    motherEmail: "",
    motherPhone: "",

    classMode: "",
    batchTiming: "",

    parentName: "",
    mobile: "",
    alternateMobile: "",
    email: "",

    address: "",
    country: "",
    area: "",
    pincode: "",

    mode: "",

    chessLevel: "",
    previousTraining: "No",
    trainingDetails: "",
    heardFrom: "",
  });

  const handleChange = (e) => {
    setErrorMessage("");
    console.log("handleChange called", e.target.name, e.target.value);
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validationCheck = () => {
    if (
      step === 1 &&
      classesfor !== "" &&
      formData.studentFirstName !== "" &&
      formData.studentLastName !== "" &&
      formData.gender !== "" &&
      formData.dob !== ""
    ) {
      return true;
    }
    if (
      (step === 2 &&
        formData.fatherFirstName !== "" &&
        fatherLastName &&
        fatherEmail &&
        fatherPhone) ||
      (formData.motherFirstName !== "" &&
        motherLastName &&
        motherEmail &&
        motherPhone)
    ) {
      return true;
    }

    if (
      step === 3 &&
      formData.address !== "" &&
      formData.area !== "" &&
      formData.pincode !== ""
    ) {
      return true;
    }

    if (
      step === 4 &&
      formData.chessLevel !== "" &&
      formData.previousTraining !== "" &&
      formData.heardFrom !== ""
    ) {
      return true;
    }

    return false;
  };

  const nextStep = () => {
    setErrorMessage("");
    const result = validationCheck();
    console.log("result", result);

    if (result) {
      if (step === 1 && classesfor !== "Child") {
        setStep((prev) => prev + 2);
      } else {
        setStep((prev) => prev + 1);
      }
    } else {
      setErrorMessage(
        "Please fill all required fields before proceeding Next."
      );
    }
  };
  const prevStep = () => {
    if (step === 3 && classesfor !== "Child") {
      setStep(1);
    } else {
      setStep((prev) => prev - 1);
    }
  };

  const onSubmit = (e) => {
    setIsSubmitting(true);
    e.preventDefault();

    emailjs
      .send(
        "service_7y7vvlf",
        "template_n8brtah",
        formData,
        "74cW5H5JugUoTfj2P"
      )
      .then(() => {
        setSuccesMessage("Form submitted successfully!");
        setFormData({
          studentName: "",
          dob: "",
          gender: "",
          classMode: "",
          batchTiming: "",

          parentName: "",
          mobile: "",
          alternateMobile: "",
          email: "",

          address: "",
          area: "",
          pincode: "",

          chessLevel: "",
          previousTraining: "No",
          trainingDetails: "",
          heardFrom: "",
        });
        setStep(1);
      })
      .catch((error) => {
        setErrorMessage("Failed to send form: " + error.text);
      });
    setIsSubmitting(false);
  };

  console.log("step", step);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Student details */}
        {step === 1 && (
          <>
            <h2 className="text-xl font-bold mb-4">Student Details</h2>
            {/* Classes For */}
            <div className="flex gap-4 mb-4">
              {["Child", "Adult", "Sr Citizen"].map((val) => (
                <label key={val} className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="classType"
                    value={val}
                    checked={classesfor === val}
                    onChange={() => setClassesFor(val)}
                    required
                  />
                  {val} (
                  {val === "Child"
                    ? "> 5 yrs ≤ 18 yrs"
                    : val === "Adult"
                    ? "> 18 yrs"
                    : "> 65 yrs"}
                  )
                </label>
              ))}
            </div>

            {/* Student Name */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <input
                name="studentFirstName"
                placeholder="First Name *"
                value={formData.studentFirstName}
                onChange={handleChange}
                required
                className="p-2 border border-[#d3d1d1] rounded"
              />
              <input
                name="studentMiddleName"
                placeholder="Middle Name (Optional)"
                value={formData.studentMiddleName}
                onChange={handleChange}
                className="p-2 border border-[#d3d1d1] rounded"
              />
              <input
                name="studentLastName"
                placeholder="Last Name *"
                value={formData.studentLastName}
                onChange={handleChange}
                required
                className="p-2 border border-[#d3d1d1] rounded"
              />
            </div>

            {/* Gender */}
            <div className="flex gap-4 mt-4">
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

            {/* Date of Birth */}
            <div className=" mt-4">
              <input
                name="dob"
                type="date"
                value={formData.dob}
                onChange={handleChange}
                required
                className="w-full p-2 border border-[#d3d1d1] rounded"
              />
            </div>

            {/* Contact details if Adult */}
            {classesfor !== "Child" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                <input
                  name="studentEmail"
                  type="email"
                  placeholder="Student Email"
                  value={formData.studentEmail}
                  onChange={handleChange}
                  className="p-2 border border-[#d3d1d1] rounded"
                />

                <PhoneInput
                  country={"in"} // default country
                  inputStyle={{ width: "100%", height: "40px" }}
                  enableSearch={true}
                  inputProps={{
                    name: "studentPhone",
                    required: true,
                  }}
                  onChange={(value, country, e, formattedValue) =>
                    setFormData((prev) => ({
                      ...prev,
                      studentPhone: formattedValue,
                    }))
                  }
                />
              </div>
            )}

            <button
              type="button"
              onClick={nextStep}
              className="bg-blue-500 mt-6 text-white p-2 rounded"
            >
              Next
            </button>
          </>
        )}

        {/* FATHER DETAILS */}
        {step === 2 && classesfor === "Child" && (
          <>
            <h2 className="text-xl font-bold">
              Parent Details (Mother or Father info is must)
            </h2>

            {/* Father Name */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2">
              <input
                name="fatherFirstName"
                placeholder="Father First Name"
                value={formData.fatherFirstName}
                onChange={handleChange}
                className="p-2 border border-[#d3d1d1] rounded"
              />
              <input
                name="fatherMiddleName"
                placeholder="Father Middle Name"
                value={formData.fatherMiddleName}
                onChange={handleChange}
                className="p-2 border border-[#d3d1d1] rounded"
              />
              <input
                name="fatherLastName"
                placeholder="Father Last Name"
                value={formData.fatherLastName}
                onChange={handleChange}
                className="p-2 border border-[#d3d1d1] rounded"
              />
            </div>

            {/* Father Contact info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
              <input
                name="fatherEmail"
                type="email"
                placeholder="Father Email"
                value={formData.fatherEmail}
                onChange={handleChange}
                className="p-2 border border-[#d3d1d1] rounded"
              />

              {/* Father phone number */}
              <PhoneInput
                country={"in"} // default country
                inputStyle={{ width: "100%", height: "40px" }}
                enableSearch={true}
                inputProps={{
                  name: "fatherPhone",
                  required: true,
                }}
                onChange={(value, country, e, formattedValue) =>
                  setFormData((prev) => ({
                    ...prev,
                    fatherPhone: formattedValue,
                  }))
                }
              />
            </div>

            {/* MOTHER Name */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2">
              <input
                name="motherFirstName"
                placeholder="Mother First Name"
                value={formData.motherFirstName}
                onChange={handleChange}
                className="p-2 border border-[#d3d1d1] rounded"
              />
              <input
                name="motherMiddleName"
                placeholder="Mother Middle Name"
                value={formData.motherMiddleName}
                onChange={handleChange}
                className="p-2 border border-[#d3d1d1] rounded"
              />
              <input
                name="motherLastName"
                placeholder="Mother Last Name"
                value={formData.motherLastName}
                onChange={handleChange}
                className="p-2 border border-[#d3d1d1] rounded"
              />
            </div>

            {/* Mother Contact details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
              <input
                name="motherEmail"
                type="email"
                placeholder="Mother Email"
                value={formData.motherEmail}
                onChange={handleChange}
                className="p-2 border border-[#d3d1d1] rounded"
              />

              {/* Mother phone number */}
              <PhoneInput
                country={"in"} // default country
                inputStyle={{ width: "100%", height: "40px" }}
                enableSearch={true}
                inputProps={{
                  name: "motherPhone",
                  required: true,
                }}
                onChange={(value, country, e, formattedValue) =>
                  setFormData((prev) => ({
                    ...prev,
                    motherPhone: formattedValue,
                  }))
                }
              />
            </div>

            {/* BUTTONS */}
            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-500 text-white p-2 rounded"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="bg-blue-600 text-white p-2 rounded"
              >
                Next
              </button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="text-xl font-bold">Address Details</h2>

            {/* Country */}
            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={Country.getAllCountries().map((c) => ({
                    label: c.name,
                    value: c.isoCode,
                    phonecode: c.phonecode,
                  }))}
                  placeholder="Select a country"
                />
              )}
            />

            {/* Country Code autoFilled */}
            <div className="mb-4">
              <label className="block font-medium mb-1">Country Code</label>
              <Controller
                name="phoneCode"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    readOnly
                    className="w-full border px-3 py-2 rounded"
                  />
                )}
              />
            </div>

            {/* Address Lines */}
            <input
              name="addressLine1"
              placeholder="Address Line 1"
              value={formData.addressLine1}
              onChange={handleChange}
              required
              className="w-full p-2 mt-3 border border-[#d3d1d1] rounded"
            />
            <input
              name="addressLine2"
              placeholder="Address Line 2"
              value={formData.addressLine2}
              onChange={handleChange}
              className="w-full p-2 mt-3 border border-[#d3d1d1] rounded"
            />

            {/* State */}
            <div className="mb-4">
              <Controller
                name="state"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={states.map((s) => ({
                      label: s.name,
                      value: s.isoCode,
                    }))}
                    placeholder="Select a state"
                  />
                )}
              />
            </div>

            {/* City */}
            <div className="mb-4">
              <Controller
                name="city"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={cities.map((c) => ({
                      label: c.name,
                      value: c.name,
                    }))}
                    placeholder="Select a city"
                  />
                )}
              />
            </div>

            <input
              name="pincode"
              placeholder="Pincode"
              pattern="\d{6}"
              value={formData.pincode}
              onChange={handleChange}
              required
              className="w-full p-2 mt-3 border border-[#d3d1d1] rounded"
            />

            <div className="flex justify-between mt-5">
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-500 text-white p-2 rounded"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="bg-blue-500 text-white p-2 rounded"
              >
                Next
              </button>
            </div>
          </>
        )}

        {step === 4 && (
          <>
            <h2 className="text-xl font-bold">Centre Preference</h2>

            {/* Radio Buttons for Online/Offline */}
            <div className="flex gap-4 mt-3">
              <label>
                <input
                  type="radio"
                  name="mode"
                  value="Online"
                  checked={formData.mode === "Online"}
                  onChange={handleChange}
                />{" "}
                Online
              </label>
              <label>
                <input
                  type="radio"
                  name="mode"
                  value="Offline"
                  checked={formData.mode === "Offline"}
                  onChange={handleChange}
                />{" "}
                Offline
              </label>
            </div>

            {/* Only show below if Offline selected */}
            {formData.mode === "Offline" && (
              <>
                <select
                  name="coachingCity"
                  value={formData.coachingCity}
                  onChange={handleChange}
                  required
                  className="w-full p-2 mt-3 border border-[#d3d1d1] rounded"
                >
                  <option value="">Select Coaching City</option>
                  {cities.map((city) => (
                    <option key={city}>{city}</option>
                  ))}
                </select>

                <select
                  name="preferredCentre"
                  value={formData.preferredCentre}
                  onChange={handleChange}
                  required
                  className="w-full p-2 mt-3 border border-[#d3d1d1] rounded"
                >
                  <option value="">Select Preferred Centre</option>
                  {centres.map((centre) => (
                    <option key={centre}>{centre}</option>
                  ))}
                </select>
              </>
            )}

            <div className="flex justify-between mt-5">
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-500 text-white p-2 rounded"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="bg-blue-500 text-white p-2 rounded"
              >
                Next
              </button>
            </div>
          </>
        )}

        {step === 5 && (
          <>
            <h2 className="text-xl font-bold">Referrals</h2>

            <select
              name="heardFrom"
              value={formData.heardFrom}
              onChange={handleChange}
              required
              className="w-full p-2 mt-3 border border-[#d3d1d1] rounded"
            >
              <option value="">How did you hear about us?</option>
              <option>Newspaper</option>
              <option>Ads</option>
              <option>Social Media</option>
              <option>Billboard</option>
              <option>Banner</option>
              <option>Friends/Family</option>
              <option>Other</option>
            </select>

            {/* If Friends/Family */}
            {formData.heardFrom === "Friends/Family" && (
              <>
                <input
                  name="refFirstName"
                  placeholder="Referrer First Name"
                  value={formData.refFirstName}
                  onChange={handleChange}
                  className="w-full p-2 mt-3 border border-[#d3d1d1] rounded"
                />
                <input
                  name="refLastName"
                  placeholder="Referrer Last Name"
                  value={formData.refLastName}
                  onChange={handleChange}
                  className="w-full p-2 mt-3 border border-[#d3d1d1] rounded"
                />
              </>
            )}

            {/* If Other */}
            {formData.heardFrom === "Other" && (
              <input
                name="otherSource"
                placeholder="Please mention source"
                value={formData.otherSource}
                onChange={handleChange}
                className="w-full p-2 mt-3 border border-[#d3d1d1] rounded"
              />
            )}

            <div className="flex justify-between mt-5">
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-500 text-white p-2 rounded"
              >
                Previous
              </button>
              <button
                type="submit"
                className="bg-green-600 text-white p-2 rounded"
                disabled={isSubmitting}
              >
                Register Now
              </button>
            </div>
          </>
        )}
      </form>
      {succesMessage && (
        <p className="text-green-600 text-[20px] font-[500]">{succesMessage}</p>
      )}
      {errorMessage.length > 0 && (
        <p className="text-red-800 text-[20px] font-[500]">{errorMessage}</p>
      )}
    </div>
  );
};

export default MultiStepFormTwo;
