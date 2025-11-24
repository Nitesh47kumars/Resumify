import { useStep } from "../../Context/StepContext";
import { useState } from "react";
import CreateLayout from "../../Layout/CreateLayout";
import NextButton from "../../Buttons/NextButton";
import PageHeader from "../../Buttons/PageHeader";

export default function Header() {
  const {formData, setFormData } = useStep();

  const emptyHeader = {
    firstName: "",
    lastName: "",
    city: "",
    state: "",
    country: "",
    pin: "",
    phone: "",
    email: "",
    linkedin: "",
    website: "",
    github: "",
  };

  const [headerData, setHeaderData] = useState(formData.header || emptyHeader);

  const [errors, setErrors] = useState({
    firstName: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updated = { ...headerData, [name]: value };
    setHeaderData(updated);

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setFormData((prev) => ({
      ...prev,
      header: updated,
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (["city", "state", "country"].includes(name)) {
      const updated = {
        ...headerData,
        [name]: value.trim().endsWith(",")
          ? value.trim()
          : value.trim() + (value ? "," : ""),
      };

      setHeaderData(updated);

      setFormData((prev) => ({
        ...prev,
        header: updated,
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!headerData.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    }

    if (!headerData.email.trim()) {
      newErrors.email = "Email is required.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // CLEAR ALL
  const handleClear = () => {
    setHeaderData(emptyHeader);
    setFormData((prev) => ({
      ...prev,
      header: emptyHeader,
    }));
    setErrors({
      firstName: "",
      email: "",
    });
  };

  return (
    <CreateLayout>
      <div className="max-w-2xl mx-auto">
        <PageHeader header="Personal information"/>
        <p className="text-sm text-gray-600 mb-4">* required fields</p>

        <div className="grid grid-cols-2 gap-2">
          {/* First Name */}
          <div>
            <input
              name="firstName"
              value={headerData.firstName}
              onChange={handleChange}
              placeholder="First Name *"
              className={`p-3 border rounded w-full ${
                errors.firstName ? "border-red-500" : ""
              }`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
            )}
          </div>

          {/* Last Name */}
          <input
            name="lastName"
            value={headerData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="p-3 border h-[50px] rounded"
          />

          {/* City */}
          <input
            name="city"
            value={headerData.city}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="City"
            className="p-3 border rounded"
          />

          {/* State */}
          <input
            name="state"
            value={headerData.state}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="State"
            className="p-3 border rounded"
          />

          {/* Country */}
          <input
            name="country"
            value={headerData.country}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Country"
            className="p-3 border rounded"
          />

          {/* Pin */}
          <input
            name="pin"
            value={headerData.pin}
            onChange={handleChange}
            placeholder="Pin Code"
            className="p-3 border rounded"
          />

          {/* Phone */}
          <input
            name="phone"
            value={headerData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="p-3 border rounded"
          />

          {/* Email */}
          <div className="col-span-2">
            <input
              name="email"
              type="email"
              value={headerData.email}
              onChange={handleChange}
              placeholder="Email *"
              className={`p-3 border rounded w-full ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* LinkedIn */}
          <input
            name="linkedin"
            value={headerData.linkedin}
            onChange={handleChange}
            placeholder="LinkedIn Profile (optional)"
            className="col-span-2 p-3 border rounded"
          />

          {/* Website */}
          <input
            name="website"
            value={headerData.website}
            onChange={handleChange}
            placeholder="Portfolio / Website (optional)"
            className="col-span-2 p-3 border rounded"
          />

          {/* GitHub */}
          <input
            name="github"
            value={headerData.github}
            onChange={handleChange}
            placeholder="GitHub (optional)"
            className="col-span-2 p-3 border rounded"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={handleClear}
            className="bg-gray-300 text-black px-6 py-3 rounded hover:bg-gray-400"
          >
            Clear All
          </button>

          <NextButton
            nextRoute="/create/summary"
            stepNumber={2}
            validate={validate}
          />
        </div>
      </div>
    </CreateLayout>
  );
}
