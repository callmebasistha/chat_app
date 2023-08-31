import {
  Autocomplete,
  Chip,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const SetupWorkspace = (props) => {
  const focusWorkspace = props.workspaceFocus;
  return (
    <>
      <Typography component="h1" variant="h3">
        What’s the name of your company or team?
      </Typography>
      <Typography component="h1" variant="body1">
        This will be the name of your workspace — choose something that your
        team will recognize.
      </Typography>
      <TextField
        margin="normal"
        id="name"
        name="name"
        placeholder="Eg: XYZ Company or XYZ Co"
        noValidate
        error={props.error}
        variant="outlined"
        color="grey"
        label={props.error ? "Required" : ""}
        onChange={(e) => props.handelWorkspaceNameChange(e)}
        value={props.workspace.name}
        autoFocus={focusWorkspace}
      />
      {/* <TextField
        margin="normal"
        noValidate
        id="description"
        name="description"
        placeholder="Optional"
        variant="outlined"
        color="grey"
        onChange={(e) => props.handelWorkspaceDescriptionChange(e)}
        value={props.workspace.description}
        rows={4}  
        autoFocus={!focusWorkspace}
      /> */}
    </>
  );
};

const SetupUser = (props) => {
  return (
    <>
      <Typography component="h1" variant="h3">
        What should we call you?
      </Typography>
      <Typography component="h1" variant="body1">
        Adding your name and profile photo helps your teammates recognize and
        connect with you more easily.
      </Typography>
      <TextField
        Autocomplete
        margin="normal"
        id="personName"
        name="personName"
        placeholder="Eg: John Doe"
        error={props.error}
        label={props.error ? "Required" : ""}
        variant="outlined"
        color="grey"
        onChange={(e) => props.personNameChange(e)}
        // onChange={(e) => handelOtpChange(e)}
        // onKeyDown={handelKeyDown}
        value={props.personName}
        autoFocus
        focused
      />

      {/* <Typography component="h1" variant="subtitle1">
        Your profile photo(optional)
      </Typography>
      <Typography component="h1" variant="body1">
        Help your teammates know they’re talking to the right person.
      </Typography> */}
    </>
  );
};
const SetDefaultChannel = (props) => {
  return (
    <>
      <Typography component="h1" variant="h3">
        Name your Default Channel.
      </Typography>
      <Typography component="h1" variant="body1">
        This could be anything: a project, campaign, event, or the deal you’re
        trying to close.
      </Typography>
      <TextField
        margin="normal"
        id="personName"
        name="personName"
        placeholder="Optional"
        variant="outlined"
        color="grey"
        onChange={(e) => props.defaultChannelChange(e)}
        // onChange={(e) => handelOtpChange(e)}
        // onKeyDown={handelKeyDown}
        value={props.defaultChannel}
        autoFocus
        focused
      />
    </>
  );
};
// const InvitePeople = (props) => {
//   const handelKeyDown = (e) => {
//     if (e.keyCode == 32) {
//     }
//   };
//   return (
//     <>
//       <Typography component="h1" variant="h3">
//         Who else is on the {props.workspaceName} team?
//       </Typography>
//       <Typography component="h1" variant="body1">
//         Add coworker by email
//       </Typography>
//       <Autocomplete
//         multiple
//         freeSolo
//         rows={4}
//         maxRows={4}
//         renderTags={(value, getTagProps) =>
//           value.map((option, index) => (
//             <Chip
//               variant="outlined"
//               label={option}
//               {...getTagProps({ index })}
//               onDelete={() => {}}
//             />
//           ))
//         }
//         renderInput={(params) => (
//           <TextField
//             {...params}
//             margin="normal"
//             id="invitePeople"
//             name="invitePeople"
//             placeholder="Eg: name@email.com"
//             error={props.error}
//             variant="outlined"
//             color="grey"
//             type="email"
//             onChange={(e) => props.invitePeopleChange(e, handelKeyDown)}
//             // onChange={(e) => handelOtpChange(e)}
//             onKeyDown={(e) => handelKeyDown(e)}
//             value={props.invitePeople}
//             autoFocus
//             focused
//           />
//         )}
//       ></Autocomplete>
//     </>
//   );
// };

export { SetupWorkspace, SetupUser, SetDefaultChannel };
