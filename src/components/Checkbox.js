import React from 'react'

 const Checkbox = ({ checked, onChange, label, name }) => {
  return (
    <div className="form-check form-check-inline">
      <input
        className="form-check-input"
        type="checkbox"
        id={name}
        checked={checked}
        onChange={onChange}
        value={checked}
        name={name}
      />
      <label className="form-check-label" htmlFor={name}>
        {label}
      </label>
    </div>
  )
}

export default Checkbox