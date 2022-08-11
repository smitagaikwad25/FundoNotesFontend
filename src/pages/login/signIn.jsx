import { margin } from "@mui/system";
import React from "react";
import "../login/login.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import { login } from "../../Service/userService";
import { useHistory } from "react-router-dom";

const emailRegex =
  /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
const passwordRegex =
  /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

export const Login = () => {
  const [anyerror, setEmailError] = React.useState(false);
  const [emailHelper, setEmailHelper] = React.useState("");

  const [singinObj, setSingninObj] = React.useState({
    email: "",
    password: "",
  });

  const [passwordError, setPassError] = React.useState(false);
  const [PassHelper, setPassHelper] = React.useState("");

  const takeEmail = (event) => {
    console.log(event.target.value);

    setSingninObj({
      ...singinObj,
      email: event.target.value,
    });
  };

  const takePassword = (event) => {
    setSingninObj({
      ...singinObj,
      password: event.target.value,
    });
  };

  const Onsubmit = () => {
    let emailTest = emailRegex.test(singinObj.email);
    let passTest = passwordRegex.test(singinObj.password);
    if (emailTest === true) {
      setEmailError(false);
      setEmailHelper("");
    } else {
      setEmailError(true);
      setEmailHelper("Enter correct email id");
    }

    if (passTest === true) {
      setPassError(false);
      setPassHelper("");
    } else {
      setPassError(true);
      setPassHelper("Enter correct password");
    }

    if (emailTest === true && passTest === true) {
      login(singinObj)
        .then((res) => {
          console.log(res);
          // alert(res.data.message);
          localStorage.setItem("token", res.data.data);
          history.push("/header");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  let history = useHistory();

  const handleClick = () => {
    history.push("/Signup");
  };

  return (
    // <div className="main-container">
    <Card className="main-container">
      <div className="text">
        <p style={{ marginLeft: "35%", fontSize: "150%" }}>Google Keep </p>
        <p style={{ marginLeft: "40%", fontSize: "120%" }}>Sign in</p>
      </div>

      <div className="text-field">
        <TextField
          error={anyerror}
          id="outlined-password-input"
          label="Email"
          type="Email"
          autoComplete="current-password"
          variant="outlined"
          style={{
            width: "55%",
            marginLeft: "25%",
            height: "20px",
          }}
          helperText={emailHelper}
          onChange={takeEmail}
        />

        <TextField
          error={passwordError}
          id="outlined-password-input"
          label="Password"
          type="Pass"
          autoComplete="current-password"
          variant="outlined"
          style={{ width: "55%", marginLeft: "25%" }}
          helperText={PassHelper}
          onChange={takePassword}
        />
      </div>

      <div className="button-login">
        <Button
          size="medium"
          style={{
            marginLeft: "5px",
            width: "30%",
            height: "30%",
            marginTop: "30px",
          }}
          onClick={handleClick}
        >
          Create account
        </Button>
        <Button
          variant="contained"
          color="primary"
          href="#contained-buttons"
          style={{
            marginLeft: "70px",
            width: "30%",
            height: "30%",
            marginTop: "30px",
            marginRight: "5px",
          }}
          onClick={Onsubmit}
        >
          Login
        </Button>
      </div>
    </Card>
  );
};
