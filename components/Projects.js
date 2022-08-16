import ProjectItem from "./ProjectItem"
import bg from '../public/assets/Projects/E-gouter/E-gouter.jpg'
import VanillaTilt from 'vanilla-tilt';

function Projects() {

    return (
        <div id='projects' className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 pt-24">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">Projets</p>
                <h2 className="py-4">{"Ce que j'ai créer"}</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <ProjectItem titre='E-Gouter-Za' descri='Une application mobile qui permet de faire des commandes.' bgImg={bg} url='/projects/e-gouter' />
                    <ProjectItem titre='The rescues' descri="Un jeu platformer que l'on a créer en 24h pour la gamejam+ 2020" bgImg={bg} url='/projects/e-gouter' />
                </div>
            </div>
        </div>
    )
}

export default Projects
