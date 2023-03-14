import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
// import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Investing from "./pages/Investing";
import Trading from "./pages/Trading";
import Researchtools from "./pages/Researchtools";
import Dashboard from "./dashboard/Dashboard";
import Signin from "./dashboard/Signin";
import Signup from "./dashboard/Signup";
import Forgotpassword from "./dashboard/Forgotpassword";
import ResetPassword from "./dashboard/ResetPassword";

function App() {
  // const DefaultRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/aboutus" element={<Aboutus />}></Route>
          <Route exact path="/investing" element={<Investing />}></Route>
          <Route exact path="/trading" element={<Trading />}></Route>
          <Route
            exact
            path="/researchtools"
            element={<Researchtools />}
          ></Route>
          <Route exact path="/signin" element={<Signin />}></Route>
          <Route
            exact
            path="/forgotpassword"
            element={<Forgotpassword />}
          ></Route>
          <Route
            exact
            path="/resetpassword"
            element={<ResetPassword />}
          ></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
  // };

  // return (
  //   <BrowserRouter>

  //        <Routes>
  //          <Route exact path="/"  element={<Signin/>}></Route>
  //          <Route exact path="/signup"  element={<Signup/>}></Route>
  //          <Route exact path="/forgotpassword"  element={<Forgotpassword/>}></Route>

  //          <Route exact path="/dashboard"  element={<Dashboard/>}></Route>
  //          <Route component={DefaultRoutes} />

  //         </Routes>

  //          </BrowserRouter>
  // );
}

export default App;
