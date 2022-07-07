import { TextField, Link, Button } from "@mui/material";
function LoginPage() {
  return (
    <div className="login-form">
      <h1>Log in</h1>
      <TextField id="outlined-basic" label="username" variant="outlined" />
      <TextField id="outlined-basic" label="password" variant="outlined" />
      <Button className="sign-in-button" variant="outlined">
        Sign in
      </Button>
      <Link
        className="Already-account-link"
        href="Already have an account?"
        underline="none"
        color="black"
      >
        Don't have an account?
      </Link>
    </div>
  );
}

export default LoginPage;
