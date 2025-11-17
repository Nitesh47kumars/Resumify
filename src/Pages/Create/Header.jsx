import { useStep } from "../../Context/StepContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CreateLayout from "../../Layout/CreateLayout";

export default function Header() {
  const { setCompletedStep, formData, setFormData } = useStep();
  const navigate = useNavigate();

  const [headerData, setHeaderData] = useState(
    formData.header || {
      firstName: "",
      lastName: "",
      profession: "",
      city: "",
      country: "",
      pin: "",
      phone: "",
      email: "",
      linkedin: "",
      website: "",
    }
  );

  const handleChange = (e) => {
    const updated = { ...headerData, [e.target.name]: e.target.value };
    setHeaderData(updated);
  
    // 🔥 LIVE UPDATE CONTEXT
    setFormData((prev) => ({
      ...prev,
      header: updated,
    }));
  };
  

  const handleNext = () => {
    if (!headerData.firstName || !headerData.email) {
      alert("Please fill at least First Name and Email to continue.");
      return;
    }

    setFormData({ ...formData, header: headerData });
    setCompletedStep(2);
    navigate("/create/education");
  };

  return (
    <CreateLayout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Personal Information</h1>

        <p className="text-sm text-gray-600 mb-4">* required fields</p>

        <div className="grid grid-cols-2 gap-4">

          {/* First Name */}
          <input
            name="firstName"
            value={headerData.firstName}
            onChange={handleChange}
            placeholder="First Name *"
            className="p-3 border rounded"
          />

          {/* Last Name */}
          <input
            name="lastName"
            value={headerData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="p-3 border rounded"
          />

          {/* Profession */}
          <input
            name="profession"
            value={headerData.profession}
            onChange={handleChange}
            placeholder="Profession (e.g. Web Developer)"
            className="col-span-2 p-3 border rounded"
          />

          {/* City */}
          <input
            name="city"
            value={headerData.city}
            onChange={handleChange}
            placeholder="City"
            className="p-3 border rounded"
          />

          {/* Country */}
          <input
            name="country"
            value={headerData.country}
            onChange={handleChange}
            placeholder="Country"
            className="p-3 border rounded"
          />

          {/* Pin Code */}
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
          <input
            name="email"
            type="email"
            value={headerData.email}
            onChange={handleChange}
            placeholder="Email *"
            className="p-3 border rounded"
          />

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
        </div>

        <button
          onClick={handleNext}
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </CreateLayout>
  );
}
