import { TextField, Button, Link } from "@mui/material";

function RegisterPage() {
  return (
    <div className="register-form">
      <h1>Register</h1>
      <TextField id="outlined-basic" label="email" variant="outlined" />
      <TextField id="outlined-basic" label="username" variant="outlined" />
      <TextField id="outlined-basic" label="password" variant="outlined" />
      <TextField
        id="outlined-basic"
        label="confirm password"
        variant="outlined"
      />
      <Button className="submit-button" variant="outlined">
        Submit
      </Button>
      <Link
        className="Already-account-link"
        href="Already have an account?"
        underline="none"
        color="black"
      >
        Already have an account?
      </Link>
    </div>
  );
}

export default RegisterPage;
