import { useEffect, useState } from 'react';

export const useDragging = (ref, body, setActive) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startHeight, setStartHeight] = useState(0);

  useEffect(() => {
    const dragLineRef = ref.current;
    const bodyRef = body.current;

    const dragStart = (e) => {
      setIsDragging(true);
      setStartY(e.pageY);
      setStartHeight(bodyRef.offsetHeight);
      bodyRef.classList.add('dragging');
    };

    const dragStop = () => {
      setIsDragging(false);
      bodyRef.classList.remove('dragging');
      const sheetHeight = parseInt(bodyRef.style.height);
      sheetHeight < 25
        ? setActive(false)
        : sheetHeight > 75
        ? updateSheetHeight(100)
        : updateSheetHeight(25);
    };

    const updateSheetHeight = (height) => {
      bodyRef.style.height = `${height}vh`;
    };

    const dragging = (e) => {
      if (!isDragging) return;
      const delta = startY - e.pageY;
      const newHeight = ((startHeight + delta) / window.innerHeight) * 100;
      updateSheetHeight(newHeight);
    };

    document.addEventListener('mouseup', dragStop);
    dragLineRef.addEventListener('mousedown', dragStart);
    document.addEventListener('mousemove', dragging);

    return () => {
      document.removeEventListener('mouseup', dragStop);
      dragLineRef.removeEventListener('mousedown', dragStart);
      document.removeEventListener('mousemove', dragging);
    };
  }, [isDragging, ref, body]);
};
