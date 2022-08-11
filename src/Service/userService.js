import axios from "axios";

const token = localStorage.getItem("token");

const headerConfig = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

console.log(headerConfig);

export const login = async (userDetail) => {
  let res = await axios.post(
    "http://localhost:8000/api/v1/users/login",
    userDetail
  );
  return res;
};

export const registration = async (userDetail) => {
  let res = await axios.post("http://localhost:8000/api/v1/users", userDetail);
  return res;
};

// export const createNote = async (noteDetails, token) => {
//   let res = await axios.post("http://localhost:8000/api/v1/note", noteDetails, {
//     headers: {
//       Authorization: token,
//     },
//   });
//   return res;
// };

export const createNote = async (noteDetails) => {
  const headerConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  let res = await axios.post(
    "http://localhost:8000/api/v1/note",
    noteDetails,
    headerConfig
  );
  return res;
};

export const getAllNote = async () => {
  const headerConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  let res = await axios.get("http://localhost:8000/api/v1/note", headerConfig);
  return res;
};

export const deleteNote = async (nodeId) => {
  const headerConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  console.log("note id --->", nodeId);
  let res = await axios.delete(
    `http://localhost:8000/api/v1/note/${nodeId}`,
    headerConfig
  );
  return res;
};

export const isarchive = async (nodeId) => {
  const headerConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  console.log("note id --->", nodeId);
  console.log("token ", headerConfig);
  let res = await axios.put(
    `http://localhost:8000/api/v1/note/isarchive/${nodeId}`,
    null,
    headerConfig
  );
  return res;
};

export const updateNote = async (noteDetails,noteId) => {
  const headerConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  let res = await axios.put( `http://localhost:8000/api/v1/note/${noteId}`, noteDetails, headerConfig);
  return res;
};
