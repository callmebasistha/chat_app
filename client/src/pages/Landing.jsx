import {
  Box,
  Button,
  Container,
  CssBaseline,
  Stack,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  const defaultTheme = createTheme();
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Stack direction={"column"} alignItems={"center"} spacing={3}>
            <Button fullWidth variant="outlined" href="/register">
              Register
            </Button>
            <Button fullWidth variant="contained" href="/login">
              Login
            </Button>
          </Stack>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Landing;
