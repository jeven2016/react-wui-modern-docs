import {useEffect, useRef} from 'react';

//refer to https://overreacted.io/making-setinterval-declarative-with-react-hooks/
const useEvent = (name, handler, listenable = true, elem = window) => {
  //a mutable callback variable pointing to the latest interval callback
  //instead of recreating one all the time
  const handlerRef = useRef(null);

  /*
   * You can specify a dependency array as a second argument,
   * and React will only re-run the effect if something in that array changes
   */
  useEffect(() => {
    if (!listenable) {
      return;
    }
    handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    if (!listenable) {
      return;
    }
    //only support IE >=11 and other modern browsers
    const isSupportedBrowser = elem && elem.addEventListener;
    if (!isSupportedBrowser) {
      return;
    }
    console.log("add a event listener");
    const listener = event => handlerRef.current(event);
    elem.addEventListener(name, listener);
    return () => {
      elem.removeEventListener(name, listener);
    };
  }, [name, elem]);
};

export default useEvent;