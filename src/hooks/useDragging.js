import { useEffect, useState } from 'react';

export const useDragging = (ref, body, setActive) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startHeight, setStartHeight] = useState(0);

  useEffect(() => {
    const dragLineRef = ref.current;
    const bodyRef = body.current;

    const resizeWindows = () => {
      if (window.innerWidth > 1024) updateSheetHeight(25);
    };

    const dragStart = (e) => {
      setIsDragging(true);
      setStartY(e.touches?.[0].pageY);
      setStartHeight(bodyRef.offsetHeight);
      bodyRef.classList.add('dragging');
    };

    const dragStop = () => {
      setIsDragging(false);
      bodyRef.classList.remove('dragging');
      const sheetHeight = parseInt(bodyRef.style.height);
      sheetHeight < 25
        ? setActive(false)
        : sheetHeight > 50
        ? updateSheetHeight(100)
        : updateSheetHeight('initial');
    };

    const updateSheetHeight = (height) => {
      height === 'initial'
        ? (bodyRef.style.height = 'initial')
        : (bodyRef.style.height = `${height}vh`);
    };

    const dragging = (e) => {
      if (!isDragging) return;
      const delta = startY - e.touches?.[0].pageY;
      const newHeight = ((startHeight + delta) / window.innerHeight) * 100;
      updateSheetHeight(newHeight);
    };

    window.addEventListener('resize', resizeWindows);
    document.addEventListener('touchend', dragStop);
    dragLineRef.addEventListener('touchstart', dragStart);
    document.addEventListener('touchmove', dragging);

    return () => {
      window.addEventListener('resize', resizeWindows);
      document.removeEventListener('touchend', dragStop);
      dragLineRef.removeEventListener('touchstart', dragStart);
      document.removeEventListener('touchmove', dragging);
    };
  }, [isDragging, ref, body, window.innerWidth]);
};
