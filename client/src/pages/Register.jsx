import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Divider, IconButton, Stack } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import { useState } from "react";
import axios from "axios";
import { URL } from "../utils/Constants";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/apple-touch-icon.png";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://chat.bigyankharel.com.np/">
        Bolamna
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const defaultTheme = createTheme();
const Register = () => {
  const [values, setValues] = useState({
    email: "",
  });
  const nav = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post(URL.register, {
        email: values.email,
      })
      .then(
        function (response) {
          if (response.data.success) {
            nav("/confirm-email");
          }
        },
        [values.email]
      )
      .catch(function (error) {});
  };
  const handelEmailChange = (event) => {
    event.preventDefault();
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Stack direction={"row"} alignItems={"center"} spacing={1} margin={1}>
            <img src={logo} style={{ width: "42px" }} />
            <Typography component="h1" variant="h6">
              Bolamna
            </Typography>
          </Stack>
          <Typography component="h1" variant="h4">
            First, enter your email
          </Typography>
          <Typography component="h1" variant="subtitle2" sx={{ mt: 1 }}>
            We suggest using the email address you use at work.
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              autoComplete="email"
              name="email"
              onChange={(e) => handelEmailChange(e)}
              autoFocus
            />
            <Divider sx={{ mt: 2, mb: 2 }} />
            <Button type="submit" fullWidth variant="outlined" sx={{ mt: 1 }}>
              <Stack>
                <IconButton>
                  <GoogleIcon color="primary" />
                </IconButton>
              </Stack>
              Sign in with Google
            </Button>{" "}
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
            >
              <Stack>
                <IconButton>
                  <AppleIcon color="primary" />
                </IconButton>
              </Stack>
              Sign in with Apple
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Continue
            </Button>
            <Stack direction={"column"} alignItems={"center"}>
              <Typography variant="subtitle">
                Already have an account?
              </Typography>
              <Link href="/login" variant="body2">
                Sign in to an existing workspace
              </Link>
            </Stack>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};

export default Register;
