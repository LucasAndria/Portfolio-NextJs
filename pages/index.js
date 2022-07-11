import Head from "next/head";
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Home() {

  const [lang, setLang] = useState('en')
  const title = lang === 'fr' ? ('Lucas | Développeur junior') : ('Lucas | Junior developer')
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link ref='icon' href="/assets/lux-head.png" />
      </Head>

      <Navbar lang={lang} />
    </div>
  )
}
