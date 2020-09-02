import '../styles/globals.css';
import '../styles/tailwind.css';
import Template from './Template';

function MyApp({ Component, pageProps }) {
  return (
  <Template>
  <Component {...pageProps} />
  </Template> 
  )
}

export default MyApp;
