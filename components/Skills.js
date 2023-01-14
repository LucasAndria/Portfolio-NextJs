import Image from "next/image";
import { BsLinkedin } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

function Skills() {
  return (
    <div id="skills" className="w-full lg:h-screen p-2 pt-24">
      <div className="max-w-[1240px] mx-auto flex flex-col h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Compétences
        </p>
        <h2 className="py-4">Les téchnologies que {"j'utilise"}</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/node.png"
                  width="64px"
                  height="64px"
                  alt="React native logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NodeJs</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/react.png"
                  width="64px"
                  height="64px"
                  alt="Reactjs logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>ReactJs</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/nextjs.png"
                  width="64px"
                  height="64px"
                  alt="NextJs logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NextJs</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/react.png"
                  width="64px"
                  height="64px"
                  alt="React native logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React Native</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/python.png"
                  width="64px"
                  height="64px"
                  alt="Python logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Python</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/git.png"
                  width="64px"
                  height="64px"
                  alt="Github logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Git</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/blender.png"
                  width="64px"
                  height="64px"
                  alt="Blender logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Blender</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/photoshop.png"
                  width="64px"
                  height="64px"
                  alt="Photoshop logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Photoshop</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
