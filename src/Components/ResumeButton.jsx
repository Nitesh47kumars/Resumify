import React from 'react'
import { useNavigate } from 'react-router-dom'

const ResumeButton = ({data}) => {
    const navigate = useNavigate();

    const onHandleSumbit = () =>{
        navigate("/create/template")
    }
  return (
    <div className="pt-2">
        <button 
            onClick={()=>onHandleSumbit()}
            className="px-8 py-3 bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition">
                {data}
        </button>
    </div>
  )
}

export default ResumeButton
