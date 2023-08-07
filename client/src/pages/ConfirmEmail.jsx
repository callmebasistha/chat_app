import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import EmailIcon from "@mui/icons-material/Email";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useState } from "react";
import axios from "axios";
import { URL } from "../utils/Constants";
import { Divider, IconButton, Stack } from "@mui/material";

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
const ConfirmEmail = (props) => {
  const [values, setValues] = useState({
    email: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post(URL.ConfirmEmail, {
      email: values.email,
    });
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
          <Stack direction={"row"} alignItems={"center"}>
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h6">
              Bolamna
            </Typography>
          </Stack>
          <Typography component="h1" variant="h5">
            Check your email for a code
          </Typography>
          <Typography
            align="center"
            component="h1"
            variant="subtitle2"
            sx={{ mt: 1 }}
          >
            We’ve sent a 6-character code to callmebasistha@gmail.com. The code
            expires shortly, so please enter it soon.
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Stack direction={"row"} spacing={2} marginTop={4} marginBottom={4}>
              <TextField
                margin="normal"
                id="email"
                autoComplete="email"
                name="email"
                onChange={(e) => handelEmailChange(e)}
                autoFocus
              />
              <TextField
                margin="normal"
                id="email"
                autoComplete="email"
                name="email"
                onChange={(e) => handelEmailChange(e)}
                autoFocus
              />
              <TextField
                margin="normal"
                id="email"
                autoComplete="email"
                name="email"
                onChange={(e) => handelEmailChange(e)}
                autoFocus
              />
              <Divider orientation="horizontal" />
              <Divider orientation="horizontal" />
              <TextField
                margin="normal"
                id="email"
                autoComplete="email"
                name="email"
                onChange={(e) => handelEmailChange(e)}
                autoFocus
              />
              <TextField
                margin="normal"
                id="email"
                autoComplete="email"
                name="email"
                onChange={(e) => handelEmailChange(e)}
                autoFocus
              />
              <TextField
                margin="normal"
                id="email"
                autoComplete="email"
                name="email"
                onChange={(e) => handelEmailChange(e)}
                autoFocus
              />
            </Stack>
            <Stack
              direction={"row"}
              display={"flex"}
              justifyContent={"space-between"}
              marginLeft={4}
              marginRight={4}
            >
              <Stack direction={"row"} alignItems={"center"}>
                <IconButton>
                  <EmailIcon color="primary" />
                </IconButton>
                <Link href="https://gmail.com/" variant="body2" target="_blank">
                  <Typography>Open Gmail</Typography>
                </Link>
              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <IconButton>
                  <EmailIcon color="primary" />
                </IconButton>
                <Link
                  href="https://login.live.com/"
                  variant="body2"
                  target="_blank"
                >
                  <Typography>Open outlook</Typography>
                </Link>
              </Stack>
            </Stack>
            <Typography
              align="center"
              component="h1"
              variant="body1"
              sx={{ mt: 1 }}
            >
              Can’t find your code? Check your spam folder!
            </Typography>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};

export default ConfirmEmail;
