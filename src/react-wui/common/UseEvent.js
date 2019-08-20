import {useEffect, useRef} from 'react';

//refer to https://overreacted.io/making-setinterval-declarative-with-react-hooks/
const useEvent = (name, handler, elem = window) => {
  const handlerRef = useRef(null);

  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    //only support IE >=11 and other modern browsers
    const isSupportedBrowser = elem && elem.addEventListener;
    if (!isSupportedBrowser) {
      return;
    }
    const listener = event => handlerRef.current(event);
    elem.addEventListener(name, listener);
    return () => {
      elem.removeEventListener(name, listener);
    };
  }, [name, elem]);
};

export default useEvent;