import './App.css';
import React from 'react';
import { Container } from "semantic-ui-react";
import ToDoList from "./To-Do-List";


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Container textAlign='justified'>
          <ToDoList />
      </Container>
    </div>
  );
}

export default App;
