import Head from "next/head";
import { useState } from "react";
import About from "../components/About";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {

  const [lang, setLang] = useState('fr')
  const title = lang === 'fr' ? ('Lucas | Développeur junior') : ('Lucas | Junior developer')
  const smallText = lang === 'fr' ? 'Bienvenue dans mon portefolio' : 'welcome to my portefolio'
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link ref='icon' href="/assets/lux-head.png" />
      </Head>

      <Navbar smallText={smallText} lang={lang} />
      <Main smallText={smallText} lang={lang} />
      <About lang={lang} />
      <Skills lang={lang} />
      <Projects lang={lang} />
    </div>
  )
}
