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

import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
// import OTPInput from "otp-input";

import axios from "axios";
import { URL } from "../utils/Constants";
import {
  CircularProgress,
  Divider,
  IconButton,
  Paper,
  Stack,
} from "@mui/material";
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
const ConfirmEmail = (props) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(180); // resend otp timer
  var obj = document.getElementById("counter");
  let counterStorage = localStorage.getItem("counter");
  if (counterStorage) obj.innerHTML = counterStorage;
  const [values, setValues] = useState({
    token: "",
  });

  const nav = useNavigate();
  const handleSubmit = async () => {
    var userId = localStorage.getItem("userId");
    setLoading(true);
    await axios
      .post(URL.verifyOtp, {
        token: values.token,
        userId: userId,
      })
      .then((response) => {
        if (response.data.success) {
          setLoading(false);
          setSuccess(true);
          // localStorage.setItem(
          //   "workspaceId",
          //   response.data.data.user.workspaceId
          // );
          nav("/get-started");
        } else {
          setLoading(false);
          setError(true);
        }
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  };
  const onClickResendOtp = async () => {
    setLoading(true);
    setTimer(180);
    var userId = localStorage.getItem("userId");
    await axios
      .post(URL.resendOtp, {
        token: values.token,
        userId: userId,
      })
      .then(() => {
        setLoading(false);
        setTimer(10);
        clear();
      });
  };
  const handelOtpChange = (event) => {
    event.preventDefault();
    const { maxLength, value, name } = event.target;
    const [fieldName, fieldIndex] = name.split("-");
    let fieldIntIndex = parseInt(fieldIndex, 10);
    if (value.length >= maxLength) {
      // It should not be last input field
      if (fieldIntIndex <= 6) {
        // Get the next input field using it's name
        const nextInputField = document.querySelector(
          `input[name=token-${fieldIntIndex + 1}]`
        );
        const currentInputField = document.querySelector(
          `input[name=token-${fieldIntIndex}]`
        );
        currentInputField.disabled = true;
        // If found, focus the next field
        setValues({ token: values.token + value });

        nextInputField && nextInputField.focus();
      }
    }
  };
  let inputFieldValueRef = useRef("");
  const handelKeyDown = async (event) => {
    const { name } = event.target;
    const { key } = event;
    const [fieldName, fieldIndex] = name.split("-");
    let fieldIntIndex = parseInt(fieldIndex, 10);
    const vKey = 86;
    if (key === "Backspace") {
      const previousInputField = document.querySelector(
        `input[name=token-${fieldIntIndex - 1}]`
      );
      event.target.value = "";
      if (previousInputField !== null) {
        previousInputField.disabled = false;
        setValues({
          token: values.token.substring(0, fieldIntIndex - 2),
        });
        previousInputField.focus();
      }
    }
    if (event.ctrlKey && event.keyCode == vKey) {
      var copiedText = await navigator.clipboard.readText();
      for (let i = fieldIntIndex; i <= 6; i++) {
        var inputField = document.querySelector(`input[name=token-${i}]`);
        if (inputField != null) {
          inputField.value = copiedText.charAt(i - 1);
          inputField.disabled = true;
        }
      }
      setValues({ token: copiedText });
    }
  };

  useEffect(() => {
    if (values.token.length === 6) {
      handleSubmit();
    }
  }, [values]);

  const id = useRef(0);
  const clear = function () {
    window.clearInterval(id.current);
  };
  useEffect(() => {
    id.current = window.setInterval(
      () => {
        setTimer((time) => time - 1);
      },
      1000,
      clear()
    );
  }, [timer]);
  useEffect(() => {
    if (timer === 0) {
      clear();
    }
    console.log(timer);
  }, [timer]);
  let userId = localStorage.getItem("userId");
  useEffect(() => {
    !userId && nav("/register");
  });

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
          <Stack direction={"row"} spacing={2} marginTop={4} marginBottom={4}>
            <TextField
              margin="normal"
              id="otp"
              autoComplete="email"
              name="token-1"
              inputProps={{ maxLength: "1", minLength: "1" }}
              onChange={(e) => handelOtpChange(e)}
              onKeyDown={handelKeyDown}
              autoFocus
            />
            <TextField
              margin="normal"
              id="otp"
              autoComplete="email"
              name="token-2"
              inputProps={{ maxLength: "1", minLength: "1" }}
              onChange={(e) => handelOtpChange(e)}
              onKeyDown={handelKeyDown}
            />
            <TextField
              margin="normal"
              id="otp"
              autoComplete="email"
              name="token-3"
              inputProps={{ maxLength: "1", minLength: "1" }}
              onChange={(e) => handelOtpChange(e)}
              onKeyDown={handelKeyDown}
            />
            <TextField
              margin="normal"
              id="otp"
              autoComplete="email"
              name="token-4"
              inputProps={{ maxLength: "1", minLength: "1" }}
              onChange={(e) => handelOtpChange(e)}
              onKeyDown={handelKeyDown}
            />
            <TextField
              margin="normal"
              id="otp"
              autoComplete="email"
              name="token-5"
              inputProps={{ maxLength: "1", minLength: "1" }}
              onChange={(e) => handelOtpChange(e)}
              onKeyDown={handelKeyDown}
            />
            <TextField
              margin="normal"
              id="otp"
              autoComplete="email"
              name="token-6"
              inputProps={{ maxLength: "1", minLength: "1" }}
              onChange={(e) => handelOtpChange(e)}
              onKeyDown={handelKeyDown}
            />
          </Stack>
          {loading && <CircularProgress />}
          {success && <Typography color={"green"}>Verified</Typography>}
          {error && (
            <Typography color={"red"} cursor={"pointer"}>
              Otp verification failed! Please try again
            </Typography>
          )}
          {timer > 0 ? (
            <Typography>Your OTP will expire in {timer} seconds</Typography>
          ) : (
            <Link sx={{ cursor: "pointer" }} onClick={onClickResendOtp}>
              Resend Token
            </Link>
          )}
          <Stack direction={"row"} spacing={3} marginTop={4}>
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
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};

export default ConfirmEmail;
