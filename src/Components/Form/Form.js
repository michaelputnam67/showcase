import "./form.scss";
import React from 'react';

export default function Form({styles, setCurrentStyle}) {


	const options = styles.map(style => (
		<option key={(Math.random()*100)} value={style}>{style}</option>
	))


  return (
    <form>
      <h2>Form</h2>
      <label>
        Name:
        <input type="text" name="name"></input>
      </label>
      <label>
        Age:
        <input type="text" name="age"></input>
      </label>
      <select size='multiple' name="hair styles" onChange={(e) => setCurrentStyle(e.target.value)} >
				<option value="">Hair Styles</option>
        {options}
      </select>
      <label>
        First Episode:
        <input type="text" name="first episode"></input>
      </label>
      <label>
        Voiced By:
        <input type="text" name="voiced by"></input>
      </label>
      <label>
        Occupation:
        <input type="text" name="name"></input>
      </label>
    </form>
  );
}
