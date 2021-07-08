import React from "react";
import { Typography, AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Videoplayer from "./components/Videoplayer";
import Options from "./components/Options";
import Notification from "./components/Notification";

const useStyles = makeStyles((theme) => ({
  appBar: {
    margin: "20px 60px",
    borderRadius: "25px",
    width: "600px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid black",

    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h2" align="center">
          Video Chat
        </Typography>
      </AppBar>
      <Videoplayer />
      <Options>
        <Notification />
      </Options>
    </div>
  );
};

export default App;
