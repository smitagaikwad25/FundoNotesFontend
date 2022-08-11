import logo from "./logo.svg";
import "./App.css";
import { Login } from "./pages/login/signIn";
import PrimarySearchAppBar from "./components/appBar.jsx/searchbar";
import { DashBord } from "./pages/DashBord/dashBord";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { SignUpPage } from "./pages/signUp/signUp";
import { TakeNote3 } from "./components/takeNote3/takeNote3";

function App() {
  return (
    // <div className="App">
    //   {/* <Login /> */}
    //   {/* <RegisterUser /> */}
    //   {/* <PrimarySearchAppBar /> */}
    //   {/* <SignUpPage/> */}
    // </div>

    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/Signup" component={SignUpPage} />
        <Route path="/header" component={DashBord} />
        <Route path="/note3" component={TakeNote3} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
