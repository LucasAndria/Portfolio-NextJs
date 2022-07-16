import { useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {

  const [lang, setLang] = useState('fr')
  const smallText = lang === 'fr' ? 'Bienvenue dans mon portefolio' : 'welcome to my portefolio'

  return (
    <>
      <Navbar smallText={smallText} lang={lang} />
      <Component {...pageProps} lang={lang} smallText={smallText} />
    </>
  );
}

export default MyApp;
