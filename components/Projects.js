import ProjectItem from "./ProjectItem"
import bg_egouter from "./assets/Projects/e-gouter/e-gouter.jpg"
import bg_todolist from "./assets/Projects/todo-list/capture.png"
import bg_rescues from "./assets/Projects/the-rescues/bg-1.png"

function Projects() {

    return (
        <div id='projects' className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 pt-24">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">Projets</p>
                <h2 className="py-4">{"Ce que j'ai créer"}</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <ProjectItem titre='E-Gouter-Za' descri='Une application mobile qui permet de faire des commandes.' bgImg={bg_egouter} url={'/projects/e-gouter'} />
                    <ProjectItem titre='The rescues' descri="Un jeu platformer que l'on a créer en 24h pour la gamejam+ 2020" bgImg={bg_rescues} url={'/projects/the-rescues'} />
                    <ProjectItem titre='Todo List' descri="Une application web pour mémoriser les taches à accomplir" bgImg={bg_todolist} url={'/projects/todo-list'} />
                </div>
            </div>
        </div>
    )
}

export default Projects
