import Image from "next/image"
import bgImage from '../../public/assets/Projects/multi-timer/capture.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from "next/link"
import Head from "next/head"

function MultiTimer() {
    return (
        <div className="w-full">
            <Head>
                <title>Lucas | Décompte</title>
                <link href="/assets/lux-head.png" />
            </Head>
            <div className="w-screen h-[30vh] lg:h-[40vh] relative">
                <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
                <Image className="absolute z-1" layout="fill" objectFit="cover" src={bgImage} alt="Image" />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10" >
                    <h2 className="py-2">Décompte</h2>
                    <h3>Application desktop</h3>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
                <div className="col-span-4">
                    <h2>Déscription</h2>
                    <p className="my-5">
                        Ceci est une application desktop que {"j'ai"} créer pour faciliter les taches des gérant {"d'une"} salle de jeu ou {"d'un"} cyber,
                        car ce logiciel est fait de plusieurs minuteur pour assigner à chaque console ou ordinateur, les minuteurs sont en rouge quand
                        une client sur un poste {"n'a"} pas encore payer. Toutes les actions dans ce logiciel sont enregistrer dans un fichier text pour
                        avoir le montant récolté par jours.
                    </p>
                    <Link href={'https://mega.nz/file/OngH3SBJ#9Gcj2dpvDvAw0IcEKWGy1eA1NevuZoyrecn-oHCbqrY'} passHref={true}>
                        <a target="_blank">
                            <button className="bg-transparent mt-4 hover:shadow-xl hover:scale-110 hover:bg-gray-400 text-gray-700 cursor-pointer font-semibold hover:text-white py-2 px-4 border border-gray-400 hover:border-transparent rounded-xl ease-in-out duration-200">Logiciel</button>
                        </a>
                    </Link>
                    <Link href={'https://github.com/LucasAndria/MultiTimer'} passHref={true}>
                        <a target="_blank">
                            <button className="ml-5 bg-transparent hover:shadow-xl hover:scale-110 mt-4 hover:bg-gray-400 text-gray-700 cursor-pointer font-semibold hover:text-white py-2 px-4 border border-gray-400 hover:border-transparent rounded-xl  ease-in-out duration-200">Code</button>
                        </a>
                    </Link>
                </div>
                <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
                    <div className="p-2">
                        <p className="text-center font-bold pb-2">Technologies</p>
                        <div className="grid grid-cols-3 md:grid-cols-1">
                            <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="mr-1" />Pascal</p>
                        </div>
                    </div>
                </div>
                <Link href='/#projects'><p className="underline cursor-pointer mt-10 w-min">Back</p></Link>
            </div>
        </div>
    )
}

export default MultiTimer
