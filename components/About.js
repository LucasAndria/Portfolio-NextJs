import Image from "next/image";
import React from "react";

function About() {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center pt-24">
      <div className="max-w-[1240px] m-auto lg:grid grid-cols-3 gap-20">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            A propos
          </p>
          <h2 className="py-4">Qui suis-je ?</h2>
          <p className="py-2 text-gray-600">
            {`
            Andrianarijaona Lucas, un développeur web situé à Antananarivo.
            Passionné par les nouvelles technologies, j'ai commencé avec la
            modélisation et l'animation 3D en tant qu'autodidacte. Puis
            après mon baccalauréat, j'ai suivi un cursus universitaire dans
            le parcours Intégration et Développement (IDEV) à l'université 
            ESTI. On nous a initiés à la programmation avec le langage Pascal.
            Avec lequel j'ai pu réaliser plusieurs mini-projets personnels.
            `}
          </p>
          <p className="py-2 text-gray-600">
            {`
            Ayant exploré plusieurs langages de programmation,
            j'ai décidé d'utiliser JavaScript en raison de sa vitesse
            d'exécution, de sa flexibilité et de sa popularité parmi les
            développeurs.
            `}
          </p>
          <p className="py-2 text-gray-600">
            {`
            Après avoir obtenu ma licence, j'ai consacré de nombreux jours
            et nuits à la création de projets passionnants et à l'étude de
            sujets qui m'intéressaient afin de renforcer mes compétences.
            Aujourd'hui, je suis capable de créer pratiquement
            n'importe quel type de projet.
            `}
          </p>
        </div>

        {/* <div className="w-full h-[60vh] sm:h-[70vh] md:h-[60vh] m-auto shadow-xl shadow-gray-600 rounded-xl flex items-center justify-center p-4 scale-100 hover:scale-105 ease-in duration-300"> */}
        <div className="w-full hidden lg:h-[60vh] m-auto shadow-xl shadow-gray-600 rounded-xl lg:flex items-center justify-center p-4 scale-100 hover:scale-105 ease-in duration-300">
          <Image
            src="/assets/me.jpeg"
            layout="fill"
            className="rounded-xl"
            alt="Lucas"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
