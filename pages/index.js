import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Speakers from '../components/Speakers';
import Schedule from '../components/Schedule';
import Register from '../components/Register';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tech For Good Summit - IEEE Computer Society</title>
        <meta name="description" content="Innovating for a better world. Join visionaries, developers, and leaders dedicated to leveraging technology for humanity's greatest challenges." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Hero />
        <About />
        <Speakers />
        <Schedule />
        <Register />
      </main>
      <Footer />
    </div>
  );
}
