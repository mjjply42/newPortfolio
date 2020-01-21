import React from 'react';
import { Provider } from "react-redux";
import Background from './img/bg.jpg';
import Overlay from './img/overlay.png';
import { NavBar } from './components/NavBar.js'
import { MainSection } from './components/MainSection.js'
import './App.css';
import { Typography } from '@material-ui/core';

function App() {
  return (
      <div className="App" style={styles.backgroundStyle}>
        <div style={styles.mainContentContainer}>
          <NavBar/>
          <MainSection/>
        </div>
      </div>
  );
}

export default App;


const styles = {
  backgroundStyle: {
    minHeight: window.innerHeight, 
    backgroundImage: `url(${Overlay}), url(${Background})`, 
		backgroundRepeat: 'repeat, no-repeat',
		backgroundSize: 'auto, 100% 100%',
		backgroundAttachment: 'fixed',
    overflowY: 'scroll',
  },
  mainContentContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 20,
  },
}