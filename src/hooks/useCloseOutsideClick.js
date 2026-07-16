import { useEffect, useRef } from 'react';

export default function useCloseOutsideClick(handler, capture = true) {
  //we defined capture as true by default because in most cases we want to capture the click event in the capturing phase to avoid the issue of the click event being captured in the bubbling phase and if the clicked element is inside the modal it will close the modal before the click event reaches the element's onClick handler which might couse and the window will be closed before opening.
  const ref = useRef();
  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }
      document.addEventListener('click', handleClick, capture); // if we dont use true in this listener then the click event will be captured in the bubbling phase and if the clicked element is inside the modal it will close the modal before the click event reaches the element's onClick handler which might couse and the window will be closed before opening.
      return () => document.removeEventListener('click', handleClick, capture);
    },
    [handler, capture],
  );
  return ref;
}
