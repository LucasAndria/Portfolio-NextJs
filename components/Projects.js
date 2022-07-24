import ProjectItem from "./ProjectItem"
import Me from '../public/assets/me.jpeg'

function Projects() {
    return (
        <div id='projects' className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 pt-24">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">Projects</p>
                <h2 className="py-4">What I've built</h2>
                <div className="grid md:grid-cols-2 gap-8">

                    <ProjectItem titre='Titre du projet' bgImg={Me} url='/projects/item1' />
                    <ProjectItem titre='Titre du projet' bgImg={Me} url='/projects/item2' />
                    <ProjectItem titre='Titre du projet' bgImg={Me} url='/projects/item3' />
                    <ProjectItem titre='Titre du projet' bgImg={Me} url='/projects/item4' />

                </div>
            </div>
        </div>
    )
}

export default Projects
