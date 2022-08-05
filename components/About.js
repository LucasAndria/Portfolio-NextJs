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
                        Je suis un Développeur Web Junior situé à Antananarivo. Très motivé quand on parle de la nouvelle téchnologie,
                        j'ai commence a apprendre en tant qu'autodidacte. Puis apres mon bacc j'ai décidé de suivre un cursus universitaire
                        d'Intégration et Développement à l'université ESTI.
                    </p>
                    <p className='py-2 text-gray-600'>
                        Un personne bien organisé, débrouillard et qui fait beaucoup attention aux détails. J'adore aller dans les salle de sports,
                        regarder des films, lire des livres et jouer au jeu video.
                    </p>
                    {/* <p className='py-2 text-gray-600'>
                        A la recherche de poste en tant que développeur back-end ou front-end ou 3D designer.
                    </p> */}
                </div>

                <div className='w-full h-[60vh] sm:h-[70vh] md:h-[60vh] m-auto shadow-xl shadow-gray-600 rounded-xl flex items-center justify-center p-4 scale-100 hover:scale-105 ease-in duration-300'>
                    <Image src='/assets/me.jpeg' layout='fill' className='rounded-xl' />
                </div>
            </div>
        </div>
    )
}

export default About