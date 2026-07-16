import { useEffect } from 'react';

export default function useEscForClose(key, taskToDo) {
  const keyPressHandler = (e) => (e.key === key ? taskToDo(false) : null);
  useEffect(() => {
    window.addEventListener('keydown', keyPressHandler);
    return () => window.removeEventListener('keydown', keyPressHandler);
  });
}
