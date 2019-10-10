import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
const interactiveCanvas = window.interactiveCanvas;

function App() {
  const [text, setText] = useState('');
  interactiveCanvas.ready({
    onUpdate(data) {
      if ('text' in data) {
        setText(data.text);
      }
    }
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{text}</h1>
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => interactiveCanvas.sendTextQuery('スタート')}
        >
          push
        </a>
      </header>
    </div>
  );
}

export default App;
