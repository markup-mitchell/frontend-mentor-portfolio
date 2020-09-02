import { useRouter } from "next/router";
import { useState, useEffect } from 'react';

import '../styles/globals.css';
import '../styles/tailwind.css';
import Template from './Template';

function MyApp({ Component, pageProps }) {
  let [menuOpen, toggleMenu] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      toggleMenu(false)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])
  return (
  <Template menuOpen={menuOpen} toggleMenu={() => toggleMenu(!menuOpen)}>
  <Component {...pageProps} />
  </Template> 
  )
}

export default MyApp;
