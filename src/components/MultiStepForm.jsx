// components/MultiStepForm.tsx
"use client";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [succesMessage, setSuccesMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
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

  const handleChange = (e) => {
    setErrorMessage("");
    console.log("handleChange called", e.target, e.target.name, e.target.value);
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validationCheck = () => {
    if (
      step === 1 &&
      formData.studentName !== "" &&
      formData.dob !== "" &&
      formData.gender !== "" &&
      formData.classMode !== "" &&
      formData.batchTiming !== ""
    ) {
      return true;
    }
    if (
      step === 2 &&
      formData.parentName !== "" &&
      formData.mobile !== "" &&
      formData.email !== ""
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

    if (result) {
      if (step === 2 && formData.classMode === "Offline") {
        setStep((prev) => prev + 1);
      } else if (step === 2 && formData.classMode === "Online") {
        setStep((prev) => 4);
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
    if (step === 4 && formData.classMode !== "Offline") {
      setStep(2);
    } else {
      setStep((prev) => prev - 1);
    }
  };

  const handleSubmit = (e) => {
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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* STEP 1: Student Details */}
        {step === 1 && (
          <>
            <h2 className="text-xl font-bold">Student Details</h2>
            <input
              name="studentName"
              placeholder="Full Name"
              value={formData.studentName}
              onChange={handleChange}
              required
              className="w-full p-2 mt-3 border border-[#d3d1d1] rounded"
            />
            <input
              name="dob"
              type="date"
              value={formData.dob}
              onChange={handleChange}
              required
              className="w-full p-2 mt-3 border border-[#d3d1d1] rounded"
            />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="w-full p-2 mt-3 border border-[#d3d1d1] rounded"
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Prefer not to say</option>
            </select>
            <select
              name="classMode"
              value={formData.classMode}
              onChange={handleChange}
              required
              className="w-full p-2 mt-3 border border-[#d3d1d1] rounded"
            >
              <option value="">Preferred Mode of Class</option>
              <option>Online</option>
              <option>Offline</option>
            </select>
            <select
              name="batchTiming"
              value={formData.batchTiming}
              onChange={handleChange}
              required
              className="w-full p-2 mt-3 border border-[#d3d1d1] rounded"
            >
              <option value="">Preferred Batch Timing</option>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
            </select>
            <button
              type="button"
              onClick={nextStep}
              className="bg-blue-500 mt-6 text-white p-2 rounded"
            >
              Next
            </button>
          </>
        )}

        {/* STEP 2: Parent/Guardian Details */}
        {step === 2 && (
          <>
            <h2 className="text-xl font-bold">Parent/Guardian Details</h2>
            <input
              name="parentName"
              placeholder="Parent/Guardian Name"
              value={formData.parentName}
              onChange={handleChange}
              required
              className="w-full p-2 mt-3 border border-[#d3d1d1] rounded"
            />
            <input
              name="mobile"
              type="tel"
              pattern="\d{10}"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="w-full p-2 mt-3 border border-[#d3d1d1] rounded"
            />
            <input
              name="alternateMobile"
              placeholder="Alternate Contact Number (Optional)"
              value={formData.alternateMobile}
              onChange={handleChange}
              className="w-full p-2 mt-3 border border-[#d3d1d1] rounded"
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
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

        {/* STEP 3: Address Details */}
        {step === 3 && (
          <>
            <h2 className="text-xl font-bold">Address Details</h2>
            <textarea
              name="address"
              placeholder="Residential Address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full p-2 mt-3 border border-[#d3d1d1] rounded"
            />
            <input
              name="area"
              placeholder="Area / Locality"
              value={formData.area}
              onChange={handleChange}
              required
              className="w-full p-2 mt-3 border border-[#d3d1d1] rounded"
            />
            <input
              name="pincode"
              placeholder="Pincode"
              value={formData.pincode}
              onChange={handleChange}
              pattern="\d{6}"
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

        {/* STEP 4: Additional Info */}
        {step === 4 && (
          <>
            <h2 className="text-xl font-bold">Additional Info</h2>
            <select
              name="chessLevel"
              value={formData.chessLevel}
              onChange={handleChange}
              required
              className="w-full p-2 mt-3 border border-[#d3d1d1] rounded"
            >
              <option value="">Select Chess Level</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
            <div className="mt-3">
              <label>Previous Chess Training?</label>
              <select
                name="previousTraining"
                value={formData.previousTraining}
                onChange={handleChange}
                className="w-full p-2 mt-3 border border-[#d3d1d1] rounded"
              >
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>
            {formData.previousTraining === "Yes" && (
              <input
                name="trainingDetails"
                placeholder="Please provide details"
                value={formData.trainingDetails}
                onChange={handleChange}
                className="w-full p-2 mt-3 border border-[#d3d1d1] rounded"
              />
            )}
            <select
              name="heardFrom"
              value={formData.heardFrom}
              onChange={handleChange}
              required
              className="w-full p-2 mt-3 border border-[#d3d1d1] rounded"
            >
              <option value="">How did you hear about us?</option>
              <option>Google</option>
              <option>Social Media</option>
              <option>Referral</option>
              <option>School</option>
              <option>Other</option>
            </select>

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

export default MultiStepForm;
