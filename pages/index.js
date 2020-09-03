import Head from 'next/head';

import Navbar from '../components/Navbar';


export default function Home() {
  return (
    <div className="relative">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-auto">
      <h1 className="font-serif text-p3 text-40 font-bold tracking-tight leading-10">Hey, I'm Alex Spencer and I love building beautiful websites</h1>
      <button>About Me</button>
      <h1 className="font-serif text-p3 text-40 font-bold tracking-tight leading-10">Hey, I'm Alex Spencer and I love building beautiful websites</h1>
      <button>About Me</button>
      </main>
    </div>
  );
}
