import React from 'react'

const ChangePage = ({option, formSwitch }) => {
  return (
    <button onClick={() => formSwitch({option})}>
       {option} Here
    </button>
  );
};

export default ChangePage;