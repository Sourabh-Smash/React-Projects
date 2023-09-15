import React, { useState } from 'react'

const Email = () => {
    const [emailInput, setEmailInput] = useState("");
  return (
    <>
      <label htmlFor="email">Email</label>
      <input
        value={emailInput}
        type="email"
        name="email"
        id="email"
        placeholder="souramena123@gmail.com"
        onChange={(e) => setEmailInput(e.target.value)}
      />
    </>
  );
}

export default Email;