import React from "react";
import "../signUp/signUp.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import image from "../../assets/account.svg";
import Card from "@material-ui/core/Card";
import { registration } from "../../Service/userService";
import { useHistory } from "react-router-dom";

const FNameRegex = /^[A-Z]{1}[a-z]{3,}/;
const LNameRegex = /^[A-Z]{1}[a-z]{3,}/;
const emailRegex =
  /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
const passwordRegex =
  /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

export const SignUpPage = () => {
  const [signupRegx, setSignUpRegx] = React.useState({
    FnameError: false,
    FnameHelper: "",
    LNameError: false,
    LNameHelper: "",
    passwordError: false,
    passHelper: "",
    emailError: false,
    emailHelper: "",
  });

  const [registerObj, setRegisterObj] = React.useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
  });

  const takeFname = (event) => {
    setRegisterObj({
      ...registerObj,
      fName: event.target.value,
    });
  };

  const takelname = (event) => {
    setRegisterObj({
      ...registerObj,
      lName: event.target.value,
    });
  };

  const takeEmailID = (event) => {
    setRegisterObj({
      ...registerObj,
      email: event.target.value,
    });
  };

  const takePass = (event) => {
    setRegisterObj({
      ...registerObj,
      password: event.target.value,
    });
  };

  const Onsubmit = () => {
    let fNameTest = FNameRegex.test(registerObj.fName);
    let LNameTest = LNameRegex.test(registerObj.lName);
    let emailTest = emailRegex.test(registerObj.email);
    let passTest = passwordRegex.test(registerObj.password);

    if (fNameTest === true) {
      setSignUpRegx((previousState) => ({
        ...previousState,
        FnameError: false,
        FnameHelper: "",
      }));
    } else {
      setSignUpRegx((previousState) => ({
        ...previousState,
        FnameError: true,
        FnameHelper: "Enter correct first name",
      }));
    }

    if (LNameTest === true) {
      setSignUpRegx((previousState) => ({
        ...previousState,
        LNameError: false,
        LNameHelper: "",
      }));
    } else {
      setSignUpRegx((previousState) => ({
        ...previousState,
        LNameError: true,
        LNameHelper: "Enter correct last name ",
      }));
    }

    if (emailTest === true) {
      setSignUpRegx((previousState) => ({
        ...previousState,
        emailError: false,
        email: "",
      }));
    } else {
      setSignUpRegx((previousState) => ({
        ...previousState,
        emailError: true,
        email: "Enter correct email id",
      }));
    }

    if (passTest === true) {
      setSignUpRegx((previousState) => ({
        ...previousState,
        passwordError: false,
        passHelper: "",
      }));
    } else {
      setSignUpRegx((previousState) => ({
        ...previousState,
        passwordError: true,
        passHelper: "Enter correct password",
      }));
    }

    if (
      fNameTest === true &&
      LNameTest === true &&
      emailTest === true &&
      passTest === true
    ) {
      registration(registerObj)
        .then((res) => {
          console.log(res);
          alert(res.data.message);
        })
        .catch((error) => {
          alert("registation fail");
          console.log(error);
        });
    }
  };

  let history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <Card className="main" variant="outlined">
      <div className="first-Container">
        <div className="text">
          <div>
            <h4>Google</h4>
            <h2>Create your Google Account</h2>
            <h5>to continue to Gmail</h5>
          </div>
        </div>

        <div className="text-boxOne">
          <TextField
            error={signupRegx.FnameError}
            id="outlined-password-input"
            label="First name"
            type="Firstname"
            autoComplete="current-password"
            variant="outlined"
            helperText={signupRegx.FnameHelper}
            onChange={takeFname}
          />

          <TextField
            error={signupRegx.LNameError}
            id="outlined-password-input"
            label="Last name"
            type="Lastname"
            autoComplete="current-password"
            variant="outlined"
            helperText={signupRegx.LNameHelper}
            onChange={takelname}
          />
        </div>

        <div className="text-boxSec">
          <TextField
            error={signupRegx.emailError}
            id="outlined-password-input"
            label="Email"
            type="Email"
            autoComplete="current-password"
            variant="outlined"
            // style={{ marginLeft: "70px" }}
            helperText={signupRegx.emailHelper}
            onChange={takeEmailID}
          />

          <TextField
            error={signupRegx.passwordError}
            id="outlined-password-input"
            label="Password"
            type="Pass"
            autoComplete="current-password"
            variant="outlined"
            helperText={signupRegx.passHelper}
            onChange={takePass}
          />
        </div>

        <div className="button">
          <Button
            size="medium"
            // className={classes.margin}
            onClick={handleClick}
          >
            Sing in instead
          </Button>
          <Button
            variant="contained"
            color="primary"
            href="#contained-buttons"
            style={{
              marginLeft: "70px",
              width: "30%",
            }}
            onClick={Onsubmit}
          >
            Registration
          </Button>
        </div>
      </div>

      <div className="Second-Container">
        <img src={image} alt="" style={{ width: "50%", marginLeft: "125px" }} />
        <h5 className="Sec_Text">
          One account. All of Google working for you.
        </h5>
      </div>
    </Card>
  );
};
