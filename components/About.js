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
            ANDRIANARIJAONA Lucas, Un Développeur Web situé à Antananarivo.
            Passionné par les nouvelles technologies, {"J'ai"} commencé avec la
            modélisation et {"l'animation"} 3D en tant {"qu'autodidacte"}. Puis
            après mon bacc {"j'ai"} suivi un cursus universitaire dans le
            parcours Intégration et Développement {"(IDEV)"} à {"l'université "}
            ESTI. On nous a initiés à la programmation avec le langage pascal.
            Avec lequel {"j'ai"} pu réaliser plusieurs petits projets
            personnels.
          </p>
          <p className="py-2 text-gray-600">
            Après avoir utilisé plusieurs langages de programmation, {"j’ai "}
            choisi {"d’utiliser"} JavaScript à cause de sa rapidité, sa
            flexibilité mais aussi parce que {"c’est l’une"} des langages de
            programmation les plus utiliser.
          </p>
          <p className="py-2 text-gray-600">
            Une personne bien organisée, débrouillarde et qui fait beaucoup
            attention aux détails. {"J'adore"} aller à la salle de sports,
            regarder des films, lire des livres et jouer au jeu video.
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
