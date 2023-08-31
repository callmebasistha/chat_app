import React, { useEffect, useState } from "react";
import { Box, Container, Stack, Typography, Button } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  SetupUser,
  SetupWorkspace,
  SetDefaultChannel,
  InvitePeople,
} from "../components/setup/CreateWorkspace";
import { useNavigate } from "react-router-dom";
import { URL } from "../utils/Constants";
import axios from "axios";

const defaultTheme = createTheme();
const FirstLogin = (props) => {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [submitWorkspace, setSubmitWorkspace] = useState(false);
  const [workspace, setWorkspace] = useState({
    name: null,
    description: null,
  });
  const [personName, setPersonName] = useState(null);
  const [defaultChannel, setDefaultChannel] = useState(null);
  const [invitePeople, setInvitePeople] = useState([]);
  const [error, setError] = useState(false);
  const [workspaceFocus, setWorkspaceFocus] = useState(true);
  const maxStep = 2;
  const nav = useNavigate();
  const handelWorkspaceNameChange = (e) => {
    setError(false);
    setWorkspace({ ...workspace, name: e.target.value });
    setWorkspaceFocus(true);
  };
  const handelWorkspaceDescriptionChange = (e) => {
    setWorkspace({
      ...workspace,
      description: e.target.value,
    });
    setWorkspaceFocus(false);
  };
  const personNameChange = (e) => {
    setError(false);
    setPersonName(e.target.value);
  };
  const defaultChannelChange = (e) => {
    setError(false);
    setDefaultChannel(e.target.value);
  };
  const invitePeopleChange = (e, handelKeyDown) => {
    setError(false);
    setInvitePeople(e.target.value);
  };

  const handelOnClickNext = async () => {
    switch (step) {
      case 1:
        if (workspace.name == null || workspace.name === "") setError(true);
        else {
          setError(false);
          if (step < maxStep) setStep(step + 1);
        }
        break;
      case 3:
        if (personName == null || personName === "") setError(true);
        else {
          setError(false);
          if (step < maxStep) setStep(step + 1);
        }
        break;
      case 2:
        setError(false);
        if (step < maxStep) {
          setStep(step + 1);
        } else {
          setSubmitWorkspace(true);
        }
        break;
      default:
        break;
    }
    if (submitWorkspace) {
      const data = {
        workspace: workspace,
        personName: personName,
        userId: localStorage.getItem("userId"),
      };
      await axios
        .post(URL.createWorkspace, { ...data })
        .then(function (response) {
          if (response.data.success) {
            debugger;
            localStorage.setItem("workspaceId", response.data.data.id);

            nav("/dashboard");
            // localStorage.setItem("workspaceId", response.data.data.workspaceId);
          }
        })
        .catch(function (error) {
          localStorage.setItem("loggedId", false);
          debugger;
        });
    }
  };
  function RenderSwitch(props) {
    switch (step) {
      case 1:
        return <SetupWorkspace {...props} />;
        break;
      case 2:
        return <SetupUser {...props} />;
        break;
      // case 3:
      //   return <InvitePeople {...props} />;
      //   break;
      case 3:
        return <SetDefaultChannel {...props} />;
        break;
      default:
        break;
    }
  }
  let userId = localStorage.getItem("userId");
  useEffect(() => {
    !userId && nav("/");
  });
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
          }}
          component="form"
          noValidate
        >
          <Stack spacing={2}>
            <Typography component="h1" variant="caption">
              Step {step} of {maxStep}
            </Typography>
            <Stack spacing={2} direction={"column"}>
              <RenderSwitch
                handelWorkspaceNameChange={handelWorkspaceNameChange}
                handelWorkspaceDescriptionChange={
                  handelWorkspaceDescriptionChange
                }
                personNameChange={personNameChange}
                invitePeopleChange={invitePeopleChange}
                defaultChannelChange={defaultChannelChange}
                handelOnClickNext={handelOnClickNext}
                workspace={workspace}
                workspaceFocus={workspaceFocus}
                personName={personName}
                invitePeople={invitePeople}
                defaultChannel={defaultChannel}
                error={error}
              />
              <Stack direction={"row"} width="50%">
                <Button onClick={handelOnClickNext} variant="contained">
                  Next
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default FirstLogin;
