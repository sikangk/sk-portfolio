import { useEffect, useState, useRef, useCallback } from 'react';
import "./App.css";
import "./App.device.css";
import About from './pages/About';
import Contact from './pages/Contact';
import Main from './pages/Main';
import Portfolio from './pages/Portfolio';
import Dot from './components/Dot';
import ReactPageScroller from 'react-page-scroller';


function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [blockScroll, setBlockScroll] = useState(false);

  const handlePageChange = useCallback((number) => {
    // setTimeout(() => {
    //     setCurrentPage(number);
    // }, 800);
    setCurrentPage(number);

  }, [currentPage])

  const scrollPageChange = useCallback((number) => {
    setCurrentPage(number);

  }, [currentPage])

  return (
    <>
      <img className='logo-wrap' src={require('./design/img/sk-portfolio.png')} />
      <div style={{ position: 'fixed', right: '5px', top: '5px', zIndex: -1 }}>
        <span className='main-text' style={{ fontSize: '10px' }}>Copyright 2022.곽시강 all rights reserved.</span>
      </div>
      <video
        autoPlay loop muted
        playsInline
        style=
        {{
          position: 'absolute',
          width: '100%',
          height: '100vh',
          top: 0,
          left: 0,
          zIndex: -5,
          objectFit: 'cover'
        }}
        src='https://cdn.videvo.net/videvo_files/video/free/2016-04/large_watermarked/160330_4_Typing3_Mpeg4_4K_preview.mp4'
      >

      </video>
      <ReactPageScroller
        animationTimer={1200}
        animationTimerBuffer={200}
        renderAllPagesOnFirstRender={true}
        goToPage={handlePageChange}
        pageOnChange={scrollPageChange}
        customPageNumber={currentPage}
        blockScrollDown={blockScroll}
        blockScrollUp={blockScroll}
      >
        <Main />
        <About />
        <Portfolio setBlockScroll={setBlockScroll} />
        <Contact />
      </ReactPageScroller>
    </>
  );
}

export default App;
