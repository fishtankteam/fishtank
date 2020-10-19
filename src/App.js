import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ANavBar from "./components/layouts/ANavBar";
import Tank from "./components/Tank";

function App() {
  return (
    <div className="App">
      <ANavBar></ANavBar>
      <Tank name={"tank"}></Tank>
    </div>
  );
}

export default App;
