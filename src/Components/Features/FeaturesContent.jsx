import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const features = [
  'Build Resume with Multiple Templates',
  'Totally Free Website — No Hidden Costs',
  'No Ads or Promotions — Just You and Your Resume',
];

const FeaturesContent = () => {
  return (
    <div className="flex-1">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
        Build Your Dream Resume Easily
      </h2>

      <p className="text-gray-600 mb-8">
        Our resume builder helps you create professional, ATS-friendly resumes
        in minutes — all for free and without distractions.
      </p>

      <ul className="space-y-5">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-3">
            <CheckCircleIcon className="w-6 h-6 text-blue-600 mt-1" />
            <span className="text-gray-700 text-lg font-medium">{feature}</span>
          </li>
        ))}
      </ul>

      <button
          className="mt-10 px-8 py-3 bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition"        
      >
        Create Resume
      </button>
    </div>
  );
};

export default FeaturesContent;
