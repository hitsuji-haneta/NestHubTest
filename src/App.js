import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
const interactiveCanvas = window.interactiveCanvas;

const fetchTags = async setQiita => {
  const uri = `https://qiita.com/api/v2/users/hitsuji-haneta/following_tags`;
  const res = await fetch(uri, {
    headers: {
      Authorization: 'Bearer ba345cb906f722da9a1300d31a47c7434be7a5d8'
    }
  });
  const resJson = await res.json();
  console.log(resJson);
  setQiita(resJson);
};

const QiitaList = ({ qiita }) => qiita.map(elm => <p>{elm.id}</p>);

function App() {
  const [text, setText] = useState('');
  const [qiita, setQiita] = useState([]);
  interactiveCanvas.ready({
    onUpdate(data) {
      if ('text' in data) {
        setText(data.text);
      }
    }
  });
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1>{text}</h1>
        <a
          className='App-link'
          href='#'
          target='_blank'
          rel='noopener noreferrer'
          onClick={() => interactiveCanvas.sendTextQuery('スタート')}>
          push
        </a>
        <QiitaList qiita={qiita} />
        <button onClick={() => fetchTags(setQiita)}>qiita</button>
      </header>
    </div>
  );
}

export default App;
