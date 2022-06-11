import {useEffect} from 'react';
import {ESCAPE} from '../service/const';

function useEscapeEventListener(onClose: () => void) {
  const onKeyDown = ({key}:KeyboardEvent) => {
    if (key === ESCAPE) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  });
}

export default useEscapeEventListener;
