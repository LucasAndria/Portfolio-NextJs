import Image from 'next/image'
import React from 'react'

function About() {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center pt-24'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-20'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#5651e5]'>A propos</p>
                    <h2 className='py-4'>Qui suis-je ?</h2>
                    {/* <p className='py-2 text-gray-600'>
                        Je suis un dévoppeur web junior
                    </p> */}
                    <p className='py-2 text-gray-600'>
                        Un Développeur Web situé à Antananarivo.
                        {"J'ai"} commencé à apprendre la programmation, la modélisation et {"l'animation"} 3D en tant {"qu'autodidacte"}. Puis après mon bacc {"j'ai"} décidé
                        de suivre un cursus universitaire {"d'Intégration"} et Développement à {"l'université"} ESTI. On nous a initié à la programmation
                        avec le langage pascal. Avec cette notion, {"j'ai"} pu créer une application desktop pour faire la décompte sur plusieurs postes dans un salle de jeu ou un cyber,
                        qui est un peut basic. Vous pouvez la télecharger dans mes repositories github.
                    </p>
                    <p className='py-2 text-gray-600'>
                        Une personne bien organisée, débrouillarde et qui fait beaucoup attention aux détails. {"J'adore"} aller dans les salle de sports,
                        regarder des films, lire des livres et jouer au jeu video.
                    </p>
                    <p className='py-2 text-gray-600'>
                        Capable de faire le développement backend et un peu plus que les basiques du frontend.
                    </p>
                </div>

                <div className='w-full h-[60vh] sm:h-[70vh] md:h-[60vh] m-auto shadow-xl shadow-gray-600 rounded-xl flex items-center justify-center p-4 scale-100 hover:scale-105 ease-in duration-300'>
                    <Image src='/assets/me.jpeg' layout='fill' className='rounded-xl' alt="Lucas" />
                </div>
            </div>
        </div>
    )
}

export default About