import { useEffect, useState, useRef, useCallback } from 'react';
import "./App.css";
import About from './pages/About';
import Contact from './pages/Contact';
import Main from './pages/Main';
import { FullPage, Slide } from 'react-full-page';


function App() {

  
  return (
 
    <FullPage duration={1300}>
      <Slide>
        <Main />
      </Slide>
      <Slide>
        <About />
      </Slide>
      <Slide>
        <Contact />
      </Slide>
    </FullPage>
  );
}

export default App;
