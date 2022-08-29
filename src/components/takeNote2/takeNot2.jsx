import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../takeNote2/notetwo.css";
import AddAlertOutlinedIcon from "@material-ui/icons/AddAlertOutlined";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import ColorLensOutlinedIcon from "@material-ui/icons/ColorLensOutlined";
import InsertPhotoOutlinedIcon from "@material-ui/icons/InsertPhotoOutlined";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import ReplayOutlinedIcon from "@material-ui/icons/ReplayOutlined";
import RedoOutlinedIcon from "@material-ui/icons/RedoOutlined";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import Button from "@material-ui/core/Button";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import Paper from "@material-ui/core/Paper";
import { getAllNote } from "../../Service/userService";

import { createNote } from "../../Service/userService";
import { SimplePopper } from "../simplePopper/simplePopper";

export const TakeNote2 = (propes) => {
  const [noteObj, setNoteObj] = React.useState({
    Title: "Title",
    Descreption: "",
    color: "",
  });

  const getColourFromChild = (value) => {
    setNoteObj({
      ...noteObj,
      color: value,
    });
  };

  const takeTitle = (event) => {
    console.log(event.target.value);

    setNoteObj({
      ...noteObj,
      Title: event.target.value,
    });
  };

  const takeDescription = (event) => {
    console.log(event.target.value);
    setNoteObj({
      ...noteObj,
      Descreption: event.target.value,
    });
  };

  const submit = () => {
    if (noteObj.Descreption != null) {
      let token = localStorage.getItem("token");
      createNote(noteObj)
        .then((res) => {
          propes.handleGetAllNotesAtNote2();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const useStyles = makeStyles({
    root1: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
      width: "45vw",
      height: "22vh",
    },
  });
  console.log("note color", noteObj.color);

  const classes = useStyles();
  return (
    <div className="noteTwo-outer-container">
      <Paper
        elevation={3}
        className={classes.root1}
        style={{ backgroundColor: noteObj.color }}
      >
        <div className="title">
          <p>
            <input
              className="title-input"
              type="text"
              placeholder="Title"
              onChange={takeTitle}
            ></input>
          </p>

          <PushPinOutlinedIcon
            style={{
              marginLeft: "1px",
              width: "8%",
            }}
          />
        </div>

        <div className="description">
          <p>
            <input
              className="description-input"
              type="text"
              placeholder="Take a note..."
              onChange={takeDescription}
            ></input>
          </p>
        </div>

        <div className="icon-outer">
          <div className="icon-inner">
            <div>
              <AddAlertOutlinedIcon />
            </div>
            <div>
              <PersonAddOutlinedIcon />
            </div>
            <div>
              {/* <ColorLensOutlinedIcon /> */}
              <SimplePopper getcolor={getColourFromChild} />
            </div>
            <div>
              <InsertPhotoOutlinedIcon />
            </div>
            <div>
              <ArchiveOutlinedIcon />
            </div>
            <div>
              <MoreVertOutlinedIcon />
            </div>
            <div>
              <ReplayOutlinedIcon />
            </div>
            <div>
              <RefreshOutlinedIcon />
            </div>
          </div>

          <div className="Close">
            <Button
              style={{
                marginLeft: "70px",
                width: "40%",
              }}
              onClick={submit}
            >
              Close
            </Button>
          </div>
        </div>
      </Paper>
    </div>
  );
};
