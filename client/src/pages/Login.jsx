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
import { Divider, IconButton, Stack, SvgIcon } from "@mui/material";
// import { ReactComponent as Logo } from "../assets/logo.svg";
import logo from "../assets/images/apple-touch-icon.png";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";

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
const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
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
          <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <img src={logo} style={{ width: "42px", margin: "2vh" }} />
            <Typography component="h1" variant="h6">
              Bolamna
            </Typography>
          </Stack>
          <Typography component="h1" variant="h4">
            Sign in to Bolamna
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
            <Divider sx={{ mt: 2, mb: 2 }} />
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              autoComplete="email"
              name="email"
              // onChange={(e) => handelEmailChange(e)}
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In with email
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/workspace-signin" variant="body2">
                  Manual Login
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};

export default Login;
