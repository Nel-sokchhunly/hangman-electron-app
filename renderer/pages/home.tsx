import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Hangman Application</title>
      </Head>
      <div className='root'>
        <Navbar />
      </div>
    </React.Fragment>
  );
}

export default Home;
