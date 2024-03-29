import ProjectItem from "./ProjectItem";
import bg_egouter from "../public/assets/Projects/e-gouter/gouter.jpg";
import bg_todolist from "../public/assets/Projects/todo-list/capture.png";
import bg_rescues from "../public/assets/Projects/the-rescues/bg-1.png";
import bg_multiTimer from "../public/assets/Projects/multi-timer/bg.png";
import bg_trainingTimer from "../public/assets/Projects/training-timer/bg.png";
import bg_productiverse from "../public/assets/Projects/productiverse/interfaces/Befor/bg.png";
import bg_calculatrice from "../public/assets/Projects/calculatrice/bg.JPG";
import bg_nodeFarm from "../public/assets/Projects/node-farm/bg.JPG";
import bg_toursMada from "../public/assets/Projects/tours-mada/bg.JPG";

function Projects() {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 pt-24">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projets
        </p>
        <h2 className="py-4">{"Ce que j'ai créé"}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* <ProjectItem titre='Productiverse' descri="Une application web qui permet à la gestion des matières premières et produits de l'entreprise soamadigna" bgImg={bg_productiverse} url='/projects/productiverse' /> */}
          <ProjectItem
            titre="Tours Mada"
            descri="Site web generer par du serveur side rendering"
            bgImg={bg_toursMada}
            url="/projects/tours-mada"
          />
          <ProjectItem
            titre="Node Farm"
            descri="Site web generer par du serveur side rendering avec un serveur NodeJs"
            bgImg={bg_nodeFarm}
            url="/projects/node-farm"
          />
          <ProjectItem
            titre="Todo List"
            descri="Une application web pour mémoriser les taches à accomplir"
            bgImg={bg_todolist}
            url="/projects/todo-list"
          />
          <ProjectItem
            titre="Training timer"
            descri="Une application mobile utiliser pendant un entrainement"
            bgImg={bg_trainingTimer}
            url="/projects/training-timer"
          />
          <ProjectItem
            titre="Décompte"
            descri="Un logiciel utiliser pour faire la décompte de chaque postes dans un salle de jeu"
            bgImg={bg_multiTimer}
            url="/projects/decompte"
          />
          <ProjectItem
            titre="Calculatrice"
            descri="Un simple calculatrice fait avec du HTML, CSS et Js"
            bgImg={bg_calculatrice}
            url="/projects/calculatrice"
          />
          <ProjectItem
            titre="E-Gouter-Za"
            descri="Une application mobile qui permet de faire des commandes."
            bgImg={bg_egouter}
            url="/projects/e-gouter"
          />
          <ProjectItem
            titre="The rescues"
            descri="Un jeu platformer que l'on a créer en 24h pour la gamejam+ 2020"
            bgImg={bg_rescues}
            url="/projects/the-rescues"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
