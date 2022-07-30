import Image from "next/image"
import bgImage from '../../public/assets/Projects/E-gouter/Fond.jpeg'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from "next/link"

function EGouter() {
    return (
        <div className="w-full">
            <div className="w-screen h-[30vh] lg:h-[40vh] relative">
                <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
                <Image className="absolute z-1" layout="fill" objectFit="cover" src={bgImage} alt="Image" />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10" >
                    <h2 className="py-2">E-Gouter-Za</h2>
                    <h3>React native</h3>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
                <div className="col-span-4">
                    <h2>Déscription</h2>
                    <p className="my-5">C'est un projet proposé par notre enseignant pour valider notre module Programmation mobile.
                        Cette application mobile permet faire des recherches et de commander dans 4 réstaurants situé à Antananarivo.
                        Elle possede 3 menus dans la bare de navigation, le premier menu en forme de maison sert a rechercher et a commander des plats
                        , le deuxième sert à afficher les historiques de commandes, et le troisième et le dérnier sert à afficher l'historique journalière.
                    </p>
                    <button className="px-8 py-2 mt-4 mr-8 bg-gray-400 rounded-full shadow-xl shadow-black">App</button>
                    <button className="px-8 py-2 mt-4 mr-8 bg-gray-400 rounded-full shadow-xl shadow-black">Code</button>
                </div>
                <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
                    <div className="p-2">
                        <p className="text-center font-bold pb-2">Technologies</p>
                        <div className="grid grid-cols-3 md:grid-cols-1">
                            <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="mr-1" />React Native</p>
                        </div>
                    </div>
                </div>
                <Link href='/#projects'><p className="underline cursor-pointer mt-10">Back</p></Link>
            </div>
        </div>
    )
}

export default EGouter
