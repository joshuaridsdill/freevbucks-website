import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

const playSound = (sound: string) => {
  const audio = new Audio(`${sound}`);
  audio.play();
};

function App() {
  const [showImage, setShowImage] = useState<boolean>(false);

  const onClickButton = () =>
  {
    playSound(`${process.env.PUBLIC_URL}/GET OUT Meme Sound Effect.mp3`);
    playSound(`${process.env.PUBLIC_URL}/sadcat.mp3`)
    setShowImage(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='vbucks-container'>
          <img src={`${process.env.PUBLIC_URL}/v-bucks.png`}/>
          <img src={`${process.env.PUBLIC_URL}/fortnite-transparent-avatar-8.png`}/>
          <img src={`${process.env.PUBLIC_URL}/v-bucks.png`}/>
        </div>
        <button className="image-button" onClick={onClickButton}/>
        <img src={`${process.env.PUBLIC_URL}/sadcat_background.jpeg`} className='sadcat-background'
          style={{
            opacity: showImage ? 1 : 0,
            transition: "opacity 5s",
            zIndex: showImage ? 1 : -99,
          }}
        />
      </header>
    </div>
  );
}

export default App;
