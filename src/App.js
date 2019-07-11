import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
const assistantCanvas = window.assistantCanvas;

function App() {
  const [text, setText] = useState('');
  assistantCanvas.ready({
    onUpdate(state) {
      if ('text' in state) {
        setText(state.text);
      }
    }
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => assistantCanvas.sendTextQuery('speech')}
        >
          push
        </a>
        <h1>{text}</h1>
      </header>
    </div>
  );
}

export default App;
