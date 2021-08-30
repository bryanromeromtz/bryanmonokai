import React, { useRef, useEffect, useState } from 'react';

const CustomeCursor = () => {
  const cursorRef = useRef(null);
  const [changeColorCursor, setChangeColorCursor] = useState(false);

  //handler cursor
  useEffect(() => {
    function handlerCusomeCursor(e) {
      const { clientX, clientY } = e;
      cursorRef.current.style.left = clientX + 4 + 'px';
      cursorRef.current.style.top = clientY + 4 + 'px';
    };
    function handlerChangeColorCursor() {
      if (window.scrollY >= 739) {
        setChangeColorCursor(true);
      } else {
        setChangeColorCursor(false);
      }
    }
    document.addEventListener('mousemove', handlerCusomeCursor);
    window.addEventListener('scroll', handlerChangeColorCursor);
    return () => {
      document.removeEventListener('mousemove', handlerCusomeCursor);
    }
  }, []);

  // handler change cursor color



  return (
    <div className={`${changeColorCursor ? "cursor-change-color" : "cursor"}`} ref={cursorRef}></div>
  )
}

export default CustomeCursor;
