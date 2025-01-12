import React from "react";
import MyInput from "../myInput/MyInput";
import MyButton from "../myButton/MyButton";

const LoginForm = () => {
  return (
    <form>
      <MyInput
        name="login"
        type="text"
        placeholder="Enter your login"
        label="Login"
      />
      <MyInput
        name="email"
        type="email"
        placeholder="Enter your email"
        label="email"
      />
      <MyInput
        name="password"
        type="password"
        placeholder="Enter your Password"
        label="password"
      />
     <MyButton type="submit"color={'red'}>Submit</MyButton>
    </form>
  );
};
export default LoginForm;
