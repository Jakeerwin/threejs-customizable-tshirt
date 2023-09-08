import React from "react";
import { useSnapshot } from "valtio";

const CustomButton = ({ type, title, customStyles, handleClick }) => {

    const snap = useSnapshot(state)
    const generateStyle = (type) => {
        if(type === 'filled') {
            return {
                backgroundColor: '#000',
                color: '#fff'
            }
        }
    }
  return (
    <button
    className={`px-2 py-1.5 flex-1 rounded-md ${cutomStyles}`}
    style={generateStyle(type)}
    >
        {title}
    </button>
  )
};

export default CustomButton;
