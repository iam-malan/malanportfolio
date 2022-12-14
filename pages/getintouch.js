import Head from 'next/head';
import {useState} from 'react';
import React from 'react';

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);
    
    return (
      <div className={darkMode ? "dark" : ""}>
        <Head>
          <title>Malan Bruwer Portfolio</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-butons dark:text-white'>Get in Touch!</h1>
           </nav> 
        </section>
        </div>    
    )
}
