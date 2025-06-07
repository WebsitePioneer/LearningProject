// components/RegistrationForm.tsx
"use client";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { Country, State, City } from "country-state-city";
import ReCAPTCHA from "react-google-recaptcha";

const RegistrationForm = () => {
  const { handleSubmit, control, setValue, watch, reset } = useForm();
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [captchaVerified, setCaptchaVerified] = useState(false);

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

  const onSubmit = (data) => {
    if (!captchaVerified) {
      alert("Please verify the captcha!");
      return;
    }
    console.log("Form submitted:", data);
    alert("Form submitted successfully!");
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Registration Form</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Country */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Country</label>
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
        </div>

        {/* Phone Code */}
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

        {/* State */}
        <div className="mb-4">
          <label className="block font-medium mb-1">State</label>
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
          <label className="block font-medium mb-1">City</label>
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

        {/* CAPTCHA */}
        <div className="mb-6">
          <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // This is Google's test key
            onChange={() => setCaptchaVerified(true)}
            onExpired={() => setCaptchaVerified(false)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
