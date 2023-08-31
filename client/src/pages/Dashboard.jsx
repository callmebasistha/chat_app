import {
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import React, { useEffect } from "react";

const defaultTheme = createTheme();

const Dashboard = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <TextField></TextField>
        <Typography variant="h1"> Hello</Typography>
        <Button variant="contained">Next</Button>
      </Container>
    </ThemeProvider>
  );
};

export default Dashboard;
