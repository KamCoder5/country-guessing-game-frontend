import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
function LoginPage() {
  return (
    <div className="login-form">
      <h1>Log in</h1>
      <TextField id="outlined-basic" label="username" variant="outlined" />
      <TextField id="outlined-basic" label="password" variant="outlined" />
      <Button className="sign-in-button" variant="outlined">
        Sign in
      </Button>
      <Link to="/register" className="Already-account-link" underline="none">
        Don't have an account?
      </Link>
    </div>
  );
}

export default LoginPage;
