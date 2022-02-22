import { useEffect, useState, useRef } from 'react';
import "./App.css";
import About from './pages/About';
import Contact from './pages/Contact';
import Main from './pages/Main';

const DIVIDER_HEIGHT = 5;

function App() {
  const outerDivRef = useRef();
  const [scrollIndex, setScrollIndex] = useState(1);

  useEffect(() => {
    const whellHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current;
      const pageHeight = window.innerHeight;

      if (deltaY > 0) {
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: 'smooth'
          })
          setScrollIndex(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: 'smooth'
          })
          setScrollIndex(3)
        } else {
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth"
          })
          setScrollIndex(3)
        }
      } else {
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            duration: 500,
            behavior: 'smooth'
          })
          setScrollIndex(1);
        } else {
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth"
          })
          setScrollIndex(2)
        }
      }

    }
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", whellHandler);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", whellHandler)
    }

  }, [])


  return (
    <div ref={outerDivRef} className='outer'>
      <Main />
      <div className='divider' />
      <About />
      <div className='divider' />
      <Contact />
    </div>
  );
}

export default App;
