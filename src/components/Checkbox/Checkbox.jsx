import React, { useState } from 'react';

function Checkbox({ label, state, onChange }) {
  const [checked, setChecked] = useState(state);

  const handleCheckboxChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <label className="text-red-200">{label}</label>
    </div>
  );
}

export default Checkbox;
