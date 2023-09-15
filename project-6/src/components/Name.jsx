import React, { useState } from "react";

const Name = () => {
    const [nameInput, setNameInput] = useState("");
  return (
    <>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        value={nameInput}
        name="text"
        id="name"
        placeholder="Enter Name"
        onChange={(e) => setNameInput(e.target.value)}
      />
    </>
  );
};

export default Name;
