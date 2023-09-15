import React, { useState } from "react";
import Name from "./Name";
import Email from "./Email";
import Password from "./Password";
import SubmitBtn from "./SubmitBtn";
import ChangePage from "./ChangePage";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [currentForm, setCurrentForm] = useState("Login");
  const toggleForm = (forName) => {
    setCurrentForm(forName);
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        {currentForm === "Register" ? <Name /> : null}
        <Email />
        <Password />
        {currentForm === "Register" ? (
          <SubmitBtn type="Register" />
        ) : (
          <SubmitBtn type="Login" />
        )}
      </form>
      {currentForm === "Login" ? (
        <ChangePage option="Register" formSwitch={toggleForm} />
      ) : (
        <ChangePage option="Login" formSwitch={toggleForm} />
      )}
    </>
  );
};

export default Register;
