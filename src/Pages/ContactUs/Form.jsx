import React, { useState, useEffect } from "react";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import Textarea from "../../Components/Input/Textarea";
import * as yup from "yup";

const schema = yup.object().shape({
  username: yup.string().required("❌"),
  email: yup.string().email().required("❌"),
  message: yup.string().required("❌"),
});
const initialState = {
  username: "",
  email: "",
  message: "",
};
export default function Form() {
  const [state, setState] = useState(initialState);
  const [errors, setErrors] = useState(initialState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { username, email, message } = state;

  useEffect(() => {
    let mount = true;
    if (isSubmitted) {
      schema
        .validate(state, { abortEarly: false })
        .then(() => {
          if (mount) {
            setErrors({ email: "", password: "", repassword: "" });
          }
        })
        .catch((err) => {
          const newErrors = {};
          err.inner.forEach(({ path, message }) => {
            newErrors[path] = message;
          });
          if (mount) {
            setErrors({ ...initialState, ...newErrors });
          }
        });
    }

    return () => {
      mount = false;
    };
  }, [isSubmitted, state]);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <Input
        type="text"
        name="username"
        id="username"
        placeholder="Full Name"
        handleChange={handleChange}
        value={username}
        error={errors.username}
      />
      <Input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        handleChange={handleChange}
        value={email}
        error={errors.email}
      />
      <Textarea
        value={message}
        handleChange={handleChange}
        error={errors.message}
      />
      <Button className="button" type="submit">
        Send Message
      </Button>
    </form>
  );
}
