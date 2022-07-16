import Head from "next/head";
import { useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home({ lang, smallText }) {

  const title = lang === 'fr' ? ('Lucas | Développeur junior') : ('Lucas | Junior developer')

  return (
    <div>
      <Head>
        <title>{title}</title>
        <link ref='icon' href="/assets/lux-head.png" />
      </Head>
      <Main smallText={smallText} lang={lang} />
      <About lang={lang} />
      <Skills lang={lang} />
      <Projects lang={lang} />
      <Contact lang={lang} />
    </div>
  )
}
