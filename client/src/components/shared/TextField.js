import React from 'react';

const TextField = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled
}) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        type={type}
        className={{
          'is-invalid': error
        }}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  )
}

export default TextField;