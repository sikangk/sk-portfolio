import { useEffect, useState, useRef, useCallback } from 'react';
import "./App.css";
import About from './pages/About';
import Contact from './pages/Contact';
import Main from './pages/Main';
import Portfolio from './pages/Portfolio';
import Dot from './components/Dot';
import ReactPageScroller from 'react-page-scroller';


function App() {
  const [currentPage, setCurrentPage] = useState(0);

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
      <img src={require('./design/img/sk-portfolio.png')}
        style={{
          width: 300,
          position: 'fixed',
          top: 10,
          left: 5,
          zIndex: 999
        }} />
      <video
        muted autoPlay loop
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
      >
        <Main />
        <About />
        <Portfolio />
        <Contact />
      </ReactPageScroller>
    </>
  );
}

export default App;
