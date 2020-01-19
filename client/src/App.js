import React from 'react';
import { Provider } from "react-redux";
import Background from './img/bg.jpg';
import Overlay from './img/overlay.png';
import { NavBar } from './components/NavBar.js'
import { MainSection } from './components/MainSection.js'
import './App.css';
import { Typography } from '@material-ui/core';

const contactTag = "Matthew Jones        | mjjply2@gmail.com        | (510)-650-5167"

const Contact = () => {
  return (
    <div style={styles.contact}>
      <Typography style={{marginTop: 30}}>{contactTag}</Typography>
    </div>
  )
}

function App() {
  return (
      <div className="App" style={styles.backgroundStyle}>
        <div style={styles.mainContentContainer}>
          <NavBar/>
          <MainSection/>
          <Contact/>
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
    marginTop: 80,
  },
  contact: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'space-between',
    width: 500,
  }
}