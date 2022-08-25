import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {


  return (
    <div>
      <Head>
        <title>Lucas | Développeur junior</title>
        <link href={"/assets/lux-head.png"} />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
