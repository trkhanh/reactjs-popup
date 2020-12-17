import { useEffect } from 'react';

export const useOnEscape = (handler: () => void, active = true) => {
  useEffect(() => {
    if (!active) return;

    const listener = (event: any) => {
      if (event.key === 'Escape') handler();
    };

    document.addEventListener('keyup', listener);

    return () => {
      if (!active) return;
      document.removeEventListener('keyup', listener);
    };
  }, [handler, active]);
};

export const useRepositionOnResize = (handler: () => void, active = true) => {
  useEffect(() => {
    if (!active) return;
    const listener = () => {
      handler();
    };

    window.addEventListener('resize', listener);

    return () => {
      if (!active) return;
      window.removeEventListener('resize', listener);
    };
  }, [handler, active]);
};
