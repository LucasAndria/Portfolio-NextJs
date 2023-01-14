import Image from "next/image";
import bgImage from "../../public/assets/Projects/todo-list/capture.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";

function TodoList() {
  return (
    <div className="w-full">
      <Head>
        <title>Lucas | Todo list</title>
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
          <h2 className="py-2">Todo List</h2>
          <h3>Application web</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h2>Déscription</h2>
          <p className="my-5">
            Une application très facile à utiliser. Elle vous permet de gérer
            vos tâches de manière efficace en vous permettant {"d'ajouter"}, de
            modifier et de supprimer les tâches selon vos besoins. {"J'ai "}
            développé cette application en utilisant le framework NextJs avec le
            language ReactJs, et pour la base de données, {"j'ai"} choisi
            firestore de google firebase pour sa flexibilité et sa fiabilité.
          </p>
          <Link href={"https://lux-todo-list.vercel.app/"} passHref={true}>
            <a target="_blank">
              <button className="bg-transparent mt-4 hover:shadow-xl hover:scale-110 hover:bg-gray-400 text-gray-700 cursor-pointer font-semibold hover:text-white py-2 px-4 border border-gray-400 hover:border-transparent rounded-xl ease-in-out duration-200">
                Live
              </button>
            </a>
          </Link>
          <Link
            href={"https://github.com/LucasAndria/TodoList"}
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
              {/* <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="mr-1" />ReactJs</p> */}
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="mr-1" />
                NextJs
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="mr-1" />
                Firestore
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="mr-1" />
                TailwindCSS
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

export default TodoList;
