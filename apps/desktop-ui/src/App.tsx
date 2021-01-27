import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { meaningOfLife } from "@fourviere/fourviere-ui";
const { ipcRenderer } = window.require("electron");

function useIpc(obj: { action: string; data: any }) {
  ipcRenderer.invoke(obj.action, obj.data);
}

function App() {
  return (
    <div className="App">
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
          Learn React {meaningOfLife}
        </a>
        <button onClick={() => useIpc({ action: "msg", data: "pluto" })}>
          Send message to electron
        </button>
      </header>
    </div>
  );
}

export default App;
