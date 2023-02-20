import './App.css';
import React from "react";
import Menu from "./components/Menu/Menu"
import Title from "./components/Title/Title"
import Timer from "./components/Timer/Timer"
function App() {
  return (
    <div className="App">
        <Menu/>
      <div className={"content__block"}>
        <Title/>
        <Timer/>
          <div className={"red__line"}></div>
      </div>
    </div>
  );
}

export default App;
