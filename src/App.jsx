import React from "react";
import DarkMode from "./components/Darkmode";
import DarkMode2 from "./components/Darkmode2";
// import Coba from "./components/Coba";

function App() {
  // tes
  console.log(process.env.API_KEY);

  return (
    <div className="App">
      <DarkMode />
      <h1>Welcome to React</h1>
      <DarkMode2 />
    </div>
  );
}

export default App;
