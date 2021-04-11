import React from "react";
import RegisterForm from "../RegisterForm";

function Register(props) {
  const handlerOnSubmitForm = (values) => {
    console.log(values);
  };
  return (
    <div>
      <RegisterForm onSubmitForm={handlerOnSubmitForm}></RegisterForm>
    </div>
  );
}

export default Register;
