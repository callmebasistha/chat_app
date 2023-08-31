import {
  Box,
  Container,
  CssBaseline,
  Stack,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import React from "react";

const defaultTheme = createTheme();
const Page404 = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          height={"100vh"}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
          justifyContent={"center"}
        >
          <Stack spacing={2} textAlign={"center"}>
            <Typography component="h1" variant="h1">
              404
            </Typography>
          </Stack>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Page404;
