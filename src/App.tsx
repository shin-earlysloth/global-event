import React from "react";
import logo from "./logo.svg";
import "./App.css";
import useTimeOut from "./hooks/useTimeOut";

function App() {
  const { minutes, second } = useTimeOut();

  return (
    <div className="App">
      {minutes}:{second}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button>테스트 버튼</button>
        <input />
      </header>
    </div>
  );
}

export default App;
