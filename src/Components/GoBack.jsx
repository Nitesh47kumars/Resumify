import React from 'react'
import { useNavigate } from 'react-router-dom'

const GoBack = ({data}) => {
    const navigate = useNavigate();
  return (
    <button
        onClick={() => navigate(`${data}`)}
        className="w-full text-nowrap my-2 p-2.5 bg-gray-300 text-gray-800 rounded shadow border border-gray-400 transition-all duration-300
                    hover:bg-gray-400"
    >
        ← Go Back
    </button>
  )
}

export default GoBack
