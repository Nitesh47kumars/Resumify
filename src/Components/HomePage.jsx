import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-5xl font-bold mb-8">Welcome to Resumify</h1>
      
      <div className="space-x-4">
        <button
          onClick={() => navigate('/upload')}
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Upload Resume
        </button>
        
        <button
          onClick={() => navigate('/make')}
          className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Make From Scratch
        </button>
      </div>

      <div className="mt-20">
        <h2 className="text-2xl font-semibold mb-4">Choose from Templates</h2>
        {/* Here you can later map your templates */}
        <div className="grid grid-cols-3 gap-6 max-w-5xl">
          {/* Template thumbnails */}
          <div className="border p-4 rounded hover:shadow-lg cursor-pointer">
            Template 1
          </div>
          <div className="border p-4 rounded hover:shadow-lg cursor-pointer">
            Template 2
          </div>
          <div className="border p-4 rounded hover:shadow-lg cursor-pointer">
            Template 3
          </div>
        </div>
      </div>
    </div>
  );
}
