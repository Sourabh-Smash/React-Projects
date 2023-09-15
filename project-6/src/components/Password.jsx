import React, { useState } from 'react'

const Password = () => {
    const [passwordInput, setPasswordInput] = useState("");
    return (
      <>
        <label htmlFor="password">Password</label>
        <input
          value={passwordInput}
          type="password"
          name="password"
          id="password"
          placeholder="*******"
          onChange={(e) => setPasswordInput(e.target.value)}
        />
      </>
    );
}

export default Password;