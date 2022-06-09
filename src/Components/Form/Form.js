import "./form.scss";
import React from "react";

export default function Form({
  styles,
  setCurrentStyle,
  currentStyle,
  name,
  setName,
  episodes
}) {
  
  const options = styles.map((style) => (
    <option key={Math.random() * 100} value={style}>
      {style}
    </option>
  ));

  return (
    <form>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        name="name"
      ></input>
      <input placeholder="age" type="text" name="age"></input>
      <input
        placeholder="First Episode Apeared"
        type="text"
        name="first episode"
      ></input>
      <input type="text" name="voiced by" placeholder="Voice By"></input>
      <input type="text" placeholder="occupation" name="occupation"></input>
      <select
        value={currentStyle ? currentStyle : ""}
        size="multiple"
        name="hair styles"
        onChange={(e) => setCurrentStyle(e.target.value)}
      >
        <option value="">Hair Styles</option>
        {options}
      </select>
    </form>
  );
}
