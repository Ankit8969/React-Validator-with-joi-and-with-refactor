import React from "react";

const Input = ({ name, label, value, onChange, error }) => {
  console.log(error);
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        name={name}
        placeholder={name}
        onChange={onChange}
        type="text"
      />
      {error && <div>{error}</div>}
    </div>
  );
};

export default Input;
