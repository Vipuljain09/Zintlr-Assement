import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const dropdownStyle = {
  position: 'absolute',
  top:'100%',
  left:'10%',
  display: 'inline-block',
  fontFamily: 'Arial, sans-serif',
};

const dropdownIconStyle = {
  cursor: 'pointer',
};

const dropdownContentStyle = {
  display: 'block',
  backgroundColor: 'white',
  border: '2px solid gray',
  borderRadius: '4px',
  padding: '10px',
  zIndex: 1000, // Ensure it's above other elements
};

function Dropdown({ options, isVisible, toggleVisibility, setValue}) {
    
    const [formData, setFormData] = useState("");

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setValue(name);
    console.log(name,checked);
    const updatedFormData = {};

    // Uncheck all checkboxes
    Object.keys(formData).forEach((key) => {
      updatedFormData[key] = false;
    });

    // Check the clicked checkbox
    updatedFormData[name] = checked;

    setFormData(updatedFormData);
    console.log(formData,updatedFormData)
  };

  useEffect(() => {
    if (!isVisible) {
      setFormData({}); // Reset form data when the dropdown is closed
    }
  }, [isVisible]);

  const dropdownContent = (
    <div className="dropdown-content min-w-[120px]" style={dropdownContentStyle}>
      <form>
        {options.map((option, index) => (
          <label className='text-sm text-gray-800 font-semibold flex items-center gap-1' key={index}>
            <input
              type="checkbox"
              name={option}
              checked={formData[option]}
              onChange={handleCheckboxChange}
              className='border-2 border-gray-800'
            />
            {option}
          </label>
        ))}
      </form>
    </div>
  );

  return (
    <div style={dropdownStyle}>
      {isVisible && dropdownContent}
    </div>
  );
}

export default Dropdown;