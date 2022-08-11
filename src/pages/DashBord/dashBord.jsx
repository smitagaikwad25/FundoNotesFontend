import React from "react";
import PrimarySearchAppBar from "../../components/appBar.jsx/searchbar";
// import PrimarySearchAppBa from "../../components/appBar.jsx/searchbar";
import { TakeNote1 } from "../../components/takeNote1/takeNote1";
import { TakeNote2 } from "../../components/takeNote2/takeNot2";
import { getAllNote } from "../../Service/userService";
import { TakeNote3 } from "../../components/takeNote3/takeNote3";

export const DashBord = () => {
  const [switchNote, setSwitchNote] = React.useState(false);
  const [allNoteArray, setNoteArray] = React.useState([]);

  const takeNote1 = () => {
    setSwitchNote(true);
  };

  React.useEffect(() => {
    // let token = localStorage.getItem("token");
    // console.log("token-->", token);
    getAllNote()
      .then((res) => {
        console.log("res-->", res);
        setNoteArray(res.data.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
    <div>
      <PrimarySearchAppBar />
      {switchNote ? <TakeNote2 /> : <TakeNote1 takeNote1={takeNote1} />}
      <div  style={{width:"70vw", hight:"100%", marginLeft:"20%" ,  display:"flex", marginTop:"5%", flexWrap:"wrap", justifyContent:"space-around", gap:"20px"}}>
        {allNoteArray.map((TakeNote) => (
          <TakeNote3 takeNote={TakeNote} />
        ))}
      </div>
    </div>
  );
};
