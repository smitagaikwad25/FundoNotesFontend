import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../takeNote3/takeNote3.css";
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
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import { deleteNote } from "../../Service/userService";
import { isarchive } from "../../Service/userService";
import { updateNote } from "../../Service/userService";
import { SimplePopper } from "../simplePopper/simplePopper";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

export const TakeNote3 = (propes) => {
  const [updateNotObj, setUpdateNoteObj] = React.useState({
    Title: "",
    Descreption: "",
    color: "",
  });

  const takeTitileNotethree = (event) => {
    console.log(event.target.value);

    setUpdateNoteObj({
      ...updateNotObj,
      Title: event.target.value,
    });
  };

  const DescriptionNotethree = (event) => {
    console.log(event.target.value);
    setUpdateNoteObj({
      ...updateNotObj,
      Descreption: event.target.value,
    });
  };

  const getColourFromChildNoteThree = (value) => {
    setUpdateNoteObj({
      ...updateNotObj,
      color: value,
    });
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const useStyles = makeStyles({
    rootthree: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
      width: "20vw",
      // height: "15vh",
      minHeight: "15vh",
      // maxHeight: "50vh",
    },
  });

  // const handleDelete = () => {
  //   // console.log(propes.takeNote._id)

  // };
  // const handleDelete = (event) => {

  //   console.log(event.target.id)
  // };

  const handleDelete = (noteId) => {
    deleteNote(noteId)
      .then((res) => {
        alert(res.data.message);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const archiveNote = (noteId) => {
    // let token = localStorage.getItem("token");
    isarchive(noteId)
      .then((res) => {
        alert(res.data.message);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const updateNoteDetails = (id) => {
    updateNote(updateNotObj, id)
      .then((res) => {
        alert(res.data.message);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const classes = useStyles();
  return (
    <div className="outer-noteThree" style={{ width: "20vw" }}>
      <Paper
        elevation={3}
        className={classes.rootthree}
        style={{ backgroundColor: propes.takeNote.color }}
      >
        <div className="title-note3" onClick={handleOpen}>
          <p>{propes.takeNote.Title}</p>

          <PushPinOutlinedIcon
            style={{
              marginLeft: "1px",
              width: "8%",
            }}
          />
        </div>

        <div className="description-note3" onClick={handleOpen}>
          <p>{propes.takeNote.Descreption}</p>
        </div>

        <div className="icon-outer-note3">
          <div className="icon-inner-note3">
            <div>
              <AddAlertOutlinedIcon />
            </div>
            <div>
              <PersonAddOutlinedIcon />
            </div>
            <div>
              <ColorLensOutlinedIcon />
              {/* <SimplePopper getcolorNoteThree={getColourFromChildNoteThree} /> */}
            </div>
            <div>
              <InsertPhotoOutlinedIcon />
            </div>
            <div>
              <ArchiveOutlinedIcon
                onClick={() => {
                  archiveNote(propes.takeNote._id);
                }}
              />
            </div>
            <div>
              {/* <DeleteForeverOutlinedIcon onClick={handleDelete} id={propes.takeNote._id} /> */}
              <DeleteForeverOutlinedIcon
                onClick={() => {
                  handleDelete(propes.takeNote._id);
                }}
              />
            </div>
          </div>

          <div className="Close-note3">
            <Button
              size="small"
              style={{
                marginLeft: "6px",
                width: "20%",
              }}
            >
              Close
            </Button>
          </div>
        </div>
      </Paper>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{ backgroundColor: updateNotObj.color }}>
          <p>
            <input
              className="title-input"
              type="text"
              placeholder="Title"
              defaultValue={propes.takeNote.Title}
              onChange={takeTitileNotethree}
            ></input>
          </p>
          <p>
            <input
              className="title-input"
              type="text"
              placeholder="Description"
              defaultValue={propes.takeNote.Descreption}
              onChange={DescriptionNotethree}
            ></input>
          </p>

          <div className="icon-outer-note3">
            <div className="icon-inner-note3">
              <div>
                <AddAlertOutlinedIcon />
              </div>
              <div>
                <PersonAddOutlinedIcon />
              </div>
              <div>
                {/* <ColorLensOutlinedIcon /> */}
                <SimplePopper getcolorNoteThree={getColourFromChildNoteThree} />
              </div>
              <div>
                <InsertPhotoOutlinedIcon />
              </div>
              <div>
                <ArchiveOutlinedIcon
                  onClick={() => {
                    archiveNote(propes.takeNote._id);
                  }}
                />
              </div>
              <div>
                <DeleteForeverOutlinedIcon />
              </div>
            </div>

            <div className="Close-note3">
              <Button
                size="small"
                style={{
                  marginLeft: "6px",
                  width: "20%",
                }}
                onClick={() => {
                  updateNoteDetails(propes.takeNote._id);
                }}
              >
                Close
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
