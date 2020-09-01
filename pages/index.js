import Head from 'next/head';

import Navbar from '../components/Navbar';


export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
      <Navbar/>
      </header>
      <main>
        <h1 className="text-4xl text-p1 font-serif">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

      </main>

      <footer >
    
      </footer>
    </div>
  );
}
