import Image from "next/image";
import bgImage from "../../public/assets/Projects/tours-mada/Fond.JPG";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";

function ToursMada() {
  return (
    <div className="w-full">
      <Head>
        <title>Lucas | Tours Mada</title>
        <link href="/assets/lux-head.png" />
      </Head>
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={bgImage}
          alt="Image"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10">
          <h2 className="py-2">Tours-mada</h2>
          <h3>Site web</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h2>Déscription</h2>
          <p className="my-5">
            {`
              C’est un site web de type server side rendering, J’ai utilisé le
              template engine pug pour faire les rendues dynamique des pages web.
              Mais elle peut aussi être utiliser en tant qu'API, par exemple si on
              veut récupérer la liste des tours, on fait un GET sur l'endpoint
              (/api/v1/tours), si vous voulez avoir plus d'information à propos de
              l'API, appuyez sur le bouton Doc API dessous. J'ai utilisé le Json
              Web Token (JWT) pour le system d'authentification, les systems de
              mailing sont éfféctuer avec nodemailer et le service sendgrid. Dans
              cette application, On peut créer un compte, s’authentifier,
              parcourir et acheté les différentes tours et modifier son profil.
              Les données sont stockées dans une base de données mongodb.
            `}
          </p>
          <Link href="https://tours-mada.deta.dev/" passHref={true}>
            <a target="_blank">
              <button className="bg-transparent mt-4 hover:shadow-xl hover:scale-110 hover:bg-gray-400 text-gray-700 cursor-pointer font-semibold hover:text-white py-2 px-4 border border-gray-400 hover:border-transparent rounded-xl ease-in-out duration-200">
                Site
              </button>
            </a>
          </Link>
          <Link
            href="https://documenter.getpostman.com/view/20385594/2s8YmGW6hy"
            passHref={true}
          >
            <a target="_blank">
              <button className="ml-5 bg-transparent hover:shadow-xl hover:scale-110 mt-4 hover:bg-gray-400 text-gray-700 cursor-pointer font-semibold hover:text-white py-2 px-4 border border-gray-400 hover:border-transparent rounded-xl  ease-in-out duration-200">
                Doc API
              </button>
            </a>
          </Link>
          <Link
            href={"https://github.com/LucasAndria/tours-mada"}
            passHref={true}
          >
            <a target="_blank">
              <button className="ml-5 bg-transparent hover:shadow-xl hover:scale-110 mt-4 hover:bg-gray-400 text-gray-700 cursor-pointer font-semibold hover:text-white py-2 px-4 border border-gray-400 hover:border-transparent rounded-xl  ease-in-out duration-200">
                Code
              </button>
            </a>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="mr-1" />
                NodeJs
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="mr-1" />
                ExpressJs
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="mr-1" />
                MongoDB
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="mr-1" />
                Pug
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer mt-10 w-min">Back</p>
        </Link>
      </div>
    </div>
  );
}

export default ToursMada;
