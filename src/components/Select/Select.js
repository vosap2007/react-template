import React from 'react';

const Select = () => (
  <>
    <select name="select" className="language_switcher">
      <option value="value1">UK</option>
      <option value="value2" selected>
        EN
      </option>
      <option value="value3">SW</option>
    </select>
  </>
);

export default Select;
