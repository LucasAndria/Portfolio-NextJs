import Image from "next/image"
import bgImage from '../../public/assets/Projects/training-timer/capture.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from "next/link"
import Head from "next/head"

function TrainingTimer() {
    return (
        <div className="w-full">
            <Head>
                <title>Lucas | Training Timer</title>
                <link href="/assets/lux-head.png" />
            </Head>
            <div className="w-screen h-[30vh] lg:h-[40vh] relative">
                <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
                <Image className="absolute z-1" layout="fill" objectFit="cover" src={bgImage} alt="Image" />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10" >
                    <h2 className="py-2">Training Timer</h2>
                    <h3>Application mobile</h3>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
                <div className="col-span-4">
                    <h2>Déscription</h2>
                    <p className="my-5">
                        Pendant la confinement je voyais ma petite soeur {"s'entrainer"} tous les jours et elle devait regarder la montre ou utilser
                        le minuteur du télephone pour mésurer le temps de ses séries, alors elle est obligé de lancer le minuteur
                        à chaque fois {"qu'elle"} commence une série et en plus elle ne met pas de minuteur pendant les pauses, par conséquent
                        les pauses sont parfois trop longue. Alors pour {"l'aider"}, je lui ai demander si elle voudrais {"d'une"} application
                        qui fera toutes ces taches automatiquement. Et elle a dit que ça {"l'aiderait"} bien pour arriver à ces objéctifs. La plus
                        difficile dans la création de cette application était la gestion de plusieurs fonctions {'"'}setTimeout{'"'} de javascript, {"J'étais"}
                        obligé de changer 3 fois {"l'algorithme de l'application"} pour {"qu'elle"} soit fonctionnel.
                    </p>
                    <Link href={'https://mega.nz/file/fyI3HASC#NjMd4C1u2Ks4pUviKq8NRoOtckUknyt1nlqNAXHwMgw'} passHref={true}>
                        <a target="_blank">
                            <button className="bg-transparent mt-4 hover:shadow-xl hover:scale-110 hover:bg-gray-400 text-gray-700 cursor-pointer font-semibold hover:text-white py-2 px-4 border border-gray-400 hover:border-transparent rounded-xl ease-in-out duration-200">App</button>
                        </a>
                    </Link>
                    <Link href={'https://github.com/LucasAndria/Training-Timer'} passHref={true}>
                        <a target="_blank">
                            <button className="ml-5 bg-transparent hover:shadow-xl hover:scale-110 mt-4 hover:bg-gray-400 text-gray-700 cursor-pointer font-semibold hover:text-white py-2 px-4 border border-gray-400 hover:border-transparent rounded-xl  ease-in-out duration-200">Code</button>
                        </a>
                    </Link>
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

export default TrainingTimer
