import { RefObject, useEffect } from 'react';
import { EventType } from 'types';

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

export const useOnClickOutSide = (
  ref: RefObject<HTMLElement> | RefObject<HTMLElement>[],
  handler: () => void,
  active = true
) => {
  useEffect(() => {
    if (!active) return;
    const listener = (event: any) => {
      // Do nothing if clicking ref's element or descendent elements
      const refs = Array.isArray(ref) ? ref : [ref];

      let contains = false;
      refs.forEach((r) => {
        if (!r.current || r.current.contains(event.target)) {
          contains = true;
          return;
        }
      });
      event.stopPropagation();
      if (!contains) handler();
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      if (!active) return;
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler, active]);
};
