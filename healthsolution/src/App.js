import React from "react";
import "./App.css";
import "./bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Contact from "./pages/Contact";
import NavBar from "./Components/NavBar";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NoFound";
import AddPatient from "./pages/AddPatient";
import ViewPatients from "./pages/ViewPatients";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/addpatient" component={AddPatient} />
        <Route path="/viewpatients" component={ViewPatients} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
