import Image from "next/image"
import bgImage from '../../public/assets/Projects/productiverse/interfaces/bg-project.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from "next/link"
import Head from "next/head"

function productiverse() {
    return (
        <div className="w-full">
            <Head>
                <title>Lucas | Productiverse</title>
                <link href="/assets/lux-head.png" />
            </Head>
            <div className="w-screen h-[30vh] lg:h-[40vh] relative">
                <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
                <Image className="absolute z-1" layout="fill" objectFit="cover" src={bgImage} alt="Image" />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10" >
                    <h2 className="py-2">Productiverse</h2>
                    <h3>Application web</h3>
                </div>
            </div>
            <div className="max-w-[1240px] mx-auto p-2">
                <Link href='/#projects'><p className="underline cursor-pointer mt-10 w-min">Back</p></Link>
            </div>


            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8">
                <div className="col-span-4">
                    <h2>Déscription</h2>
                    <p className="my-5">
                        Productiverse est une application web pour la gestion des matières premières et des produits finie de l'entreprise SOAMADIGNA,
                        Je vous présente ci-dessous les étapes de création de cette application web.
                    </p>
                    <h2>UML</h2>
                    <p className="my-5">
                        <Image src={'/assets/Projects/productiverse/uml/ajout matiere premiere.jpg'} width={500} height={500} alt="Image" />
                    </p>
                    <h2>Capture d'ecran</h2>
                    <p className="my-5">
                        Productiverse est une application web pour la gestion des matières premières et des produits finie de l'entreprise SOAMADIGNA,
                        Je vous présente ci-dessous les étapes de création de cette application web.
                    </p>
                </div>

                <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 h-min">
                    <div className="p-2">
                        <p className="text-center font-bold pb-2">Technologies</p>
                        <div className="grid grid-cols-3 md:grid-cols-1">
                            {/* <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="mr-1" />NodeJs</p> */}
                            <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="mr-1" />NextJs</p>
                            <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="mr-1" />TailwindCSS</p>
                            <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="mr-1" />Firestore</p>
                            <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="mr-1" />GraphQL</p>
                            <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="mr-1" />React Native</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default productiverse