import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import Typography from "@mui/material/Typography";
import BrushTwoToneIcon from "@mui/icons-material/BrushTwoTone";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";

export const TakeNote1 = (Props) => {
  const useStyles = makeStyles({
    root: {
      width: "40vW",
      margin: "auto",
      // marginTop: "1rem",
    },

    root1: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
    },
  });

  const classes = useStyles();

  const fetchNote1 = () => {
    Props.takeNote1();
  };

  return (
    <div className={classes.root}>
      <Paper elevation={3} onClick={fetchNote1} className={classes.root1}>
        <Typography
          variant="body2"
          color="textPrimary"
          component="span"
          style={{ marginLeft: "15px" }}
        >
          <p> Take a Note..</p>
        </Typography>
        <Typography style={{ marginRight: "15px" }}>
          <CheckBoxOutlinedIcon />
          <BrushTwoToneIcon />
          <InsertPhotoOutlinedIcon />
        </Typography>
      </Paper>
    </div>
  );
};
