import React from "react";
import logo from "./logo.svg";
import "./App.css";

const Hoge = () => {
  const hello = "hello";

  return (
    <>
      <p>{hello}</p>
      <p>{hello}</p>
      <p>{hello}</p>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editsss<code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {Hoge()}
      </header>
    </div>
  );
}

export default App;
