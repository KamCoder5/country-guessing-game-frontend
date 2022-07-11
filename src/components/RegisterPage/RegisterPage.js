import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

function RegisterPage() {
  const [registrationDetails, setRegistrationDetails] = useState({
    email: "",
    username: "",
    password: "",
  });

  function handleRegisterFormOnChange(event) {
    let inputForm = event.target.name;
    let input = event.target.value;

    if (inputForm === "email")
      setRegistrationDetails({ ...registrationDetails, [inputForm]: input });
    if (inputForm === "username")
      setRegistrationDetails({ ...registrationDetails, [inputForm]: input });
    if (inputForm === "password")
      setRegistrationDetails({ ...registrationDetails, [inputForm]: input });
  }

  function handleRegisterFormSubmit(event) {
    // sent request to backend networking
    //use validation functions
    //empty registerpage input
  }

  function validateEmail() {
    //check if email address is the correct format
    //check if email already exsists
  }

  function validatePassword() {
    // check password requirements
  }

  function validateUsername() {
    //check if username already exsists in database
  }

  return (
    <div className="register-form">
      <h1>Register</h1>
      <TextField
        name="email"
        id="outlined-basic"
        label="email"
        variant="outlined"
        onChange={handleRegisterFormOnChange}
      />
      <TextField
        name="username"
        id="outlined-basic"
        label="username"
        variant="outlined"
        onChange={handleRegisterFormOnChange}
      />
      <TextField
        name="password"
        id="outlined-basic"
        label="password"
        variant="outlined"
        onChange={handleRegisterFormOnChange}
      />
      <TextField
        id="outlined-basic"
        name="confirm-password"
        label="confirm password"
        variant="outlined"
        onChange={handleRegisterFormOnChange}
      />
      <Button className="submit-button" variant="outlined">
        Submit
      </Button>
      <Link to="/login">Already have an account?</Link>
    </div>
  );
}

export default RegisterPage;
