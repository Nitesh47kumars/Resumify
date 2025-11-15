import React from "react";
import { useNavigate } from "react-router-dom";

const ResumeButton = ({ data, onClick }) => {
  const navigate = useNavigate();

  const handleDefaultClick = () => {
    navigate("/create/template");
  };

  return (
    <div className="pt-6 flex justify-center">
      <button
        onClick={onClick ? onClick : handleDefaultClick}
        className="w-full px-8 py-3 bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition"
      >
        {data}
      </button>
    </div>
  );
};

export default ResumeButton;
