import { useEffect, useState, useRef, useCallback } from 'react';
import "./App.css";
import About from './pages/About';
import Contact from './pages/Contact';
import Main from './pages/Main';
import Portfolio from './pages/Portfolio';
import { FullPage, Slide } from 'react-full-page';
import Dot from './components/Dot';


function App() {
  const [pageState, setPageState] = useState(0);

  return (
    <FullPage
      //initialSlide={pageState}
      duration={1500}
      //controlProps={(o) => console.log(o)}
      //nextChange={(i) => console.log(i, 'next')}
      beforeChange={(o) => setPageState(o.to)}
    >
      <Slide>
        <Main />
      </Slide>
      <Slide>
        <About />
      </Slide>
      <Slide>
        <Portfolio />
      </Slide>
      <Slide>
        <Contact />
      </Slide>
      <div style={{ position: 'fixed', top: 50, left: 70 }}>
        <h1>sk PortFolio</h1>
      </div>
      {pageState > 0 && <Dot pageState={pageState} />}
    </FullPage>

  );
}

export default App;
