import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popper from "@material-ui/core/Popper";
import ColorLensOutlinedIcon from "@material-ui/icons/ColorLensOutlined";

const useStyles = makeStyles((theme) => ({
  paper: {
    border: "1px solid",
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));

export function SimplePopper(propes) {
  const colors = [
    "#2ECC71",
    "#AF7AC5",
    "#F1948A",
    "#A3E4D7",
    "#F5B7B1",
    "#F5B041",
    "#DC7633",
    "#F1C40F",
    "#AAB7B8",
    "#F1948A",
    "#2ECC71",
    "#F5B041",
    "#008000",
    "#C71585",
  ];
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const handleColor = (value) => {
    if (propes.hasOwnProperty("getcolor" ) === true) {
      propes.getcolor(value);
    }
    if (propes.hasOwnProperty("getcolorNoteThree") === true) {
      propes.getcolorNoteThree(value);
    }
  };

  return (
    <div>
      {/* <button aria-describedby={id} type="button" onClick={handleClick}>
        Toggle Popper
        </button> */}
      <ColorLensOutlinedIcon onClick={handleClick} />
      <Popper
        id={id}
        open={open}
        style={{ display: "flex" }}
        anchorEl={anchorEl}
      >
        {/* <div >The content of the Popper.</div> */}

        {colors.map((value) => (
          <div
            onClick={() => handleColor(value)}
            className={classes.paper}
            style={{
              width: "5px",
              hight: "5px",
              borderRadius: "50%",
              backgroundColor: value,
              margin: "3px",
            }}
          ></div>
        ))}
      </Popper>
    </div>
  );
}
