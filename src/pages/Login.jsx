import React from "react";
import Form from "../components/Form";

const Login = () => {
  return (
    <div className="min-h-screen max-w-screen-sm mx-auto flex flex-col justify-center items-center gap-4">
      <h1 className="text-center text-3xl font-semibold">Login</h1>
      <Form />
    </div>
  );
};

export default Login;
