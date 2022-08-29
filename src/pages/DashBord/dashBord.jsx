import React from "react";
import PrimarySearchAppBar from "../../components/appBar.jsx/searchbar";
// import PrimarySearchAppBa from "../../components/appBar.jsx/searchbar";
import { TakeNote1 } from "../../components/takeNote1/takeNote1";
import { TakeNote2 } from "../../components/takeNote2/takeNot2";
import { getAllNote } from "../../Service/userService";
import { TakeNote3 } from "../../components/takeNote3/takeNote3";
import { MiniDrawer } from "../../components/drawer/drawer";

export const DashBord = () => {
  const [switchNote, setSwitchNote] = React.useState(false);
  const [allNoteArray, setNoteArray] = React.useState([]);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [noteStatus, setNoteStatus] = React.useState("allNotes");

  const handleDrawer = (value) => {
    console.log(value);
    setDrawerOpen(!drawerOpen);
  };

  const takeNote1 = () => {
    setSwitchNote(true);
  };

  const getdrawerAction = (res) => {
    console.log(res);
    setNoteStatus(res);
  };

  const handleGetAllNotes = () => {
    getAllNote()
      .then((res) => {
        let note = res.data.data.filter((data) => {
          if (noteStatus == "allNotes") {
            if (
              (data.isArchived === false || data.isArchived === undefined) &&
              (data.isDeleted === false || data.isDeleted === undefined)
            ) {
              return data;
            }
          }

          if (noteStatus == "Archived") {
            if (
              data.isArchived === true &&
              (data.isDeleted === false || data.isDeleted === undefined)
            ) {
              console.log("data.isArchived", data);
              return data;
            }
          }

          if (noteStatus == "trashed") {
            if (
              data.isDeleted === true &&
              (data.isArchived === false || data.isArchived === undefined)
            ) {
              return data;
            }
          }
        });

        setNoteArray(note);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  React.useEffect(() => {
    handleGetAllNotes();
  }, [noteStatus]);

  return (
    <div>
      <PrimarySearchAppBar handleDrawer={handleDrawer} />
      <MiniDrawer getdrawerAction={getdrawerAction} drawerOpen={drawerOpen} />
      {switchNote ? (
        <TakeNote2 handleGetAllNotesAtNote2={handleGetAllNotes} />
      ) : (
        <TakeNote1 takeNote1={takeNote1} />
      )}
      <div
        style={{
          width: "70vw",
          hight: "100%",
          marginLeft: "20%",
          display: "flex",
          marginTop: "5%",
          flexWrap: "wrap",
          justifyContent: "space-around",
          gap: "20px",
        }}
      >
        {allNoteArray.map((TakeNote) => (
          <TakeNote3
            handleGetAllNotes={handleGetAllNotes}
            takeNote={TakeNote}
          />
        ))}
      </div>
    </div>
  );
};
