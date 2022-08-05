import { AiOutlineMail } from "react-icons/ai"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { Canvas } from '@react-three/fiber'
// import { OrbitControls, Stars } from "@react-three/drei"

function Main() {

    return (
        <div id='home' className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <p className="text-xs tracking-widest text-gray-600">
                        Bienvenue dans mon portefolio
                    </p>
                    <h2 className="py-4 text-gray-700">Mon nom est <span className="text-[#5651e5]">Lucas</span></h2>
                    <h2 className="py-4 text-gray-700">Un Développeur Web Junior</h2>

                    <p className="py-4 text-gray-600 max-w-[70%] m-auto lg:text-lg ease-in duration-300">
                        Situé à Antananarivo. Vous pouvez me rejoindre ici
                    </p>

                    <div className="flex items-center justify-between max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] 2xl:max-w-[600px] m-auto py-4 ease-in duration-300">
                        <div className="group rounded-full shadow-lg shadow-gray-400 p-[18px] lg:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaLinkedinIn className="group-hover:animate-wiggle lg:w-5 lg:h-5 2xl:w-6 2xl:h-6 ease-in duration-300 " />
                        </div>
                        <div className="group rounded-full shadow-lg shadow-gray-400 p-[18px] lg:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaGithub className="group-hover:animate-wiggle lg:w-5 lg:h-5 2xl:w-6 2xl:h-6 ease-in duration-300" />
                        </div>
                        <div className="group rounded-full shadow-lg shadow-gray-400 p-[18px] lg:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <AiOutlineMail className="group-hover:animate-wiggle lg:w-5 lg:h-5 2xl:w-6 2xl:h-6 ease-in duration-300" />
                        </div>
                        <div className="group rounded-full shadow-lg shadow-gray-400 p-[18px] lg:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <BsFillPersonLinesFill className="group-hover:animate-wiggle lg:w-5 lg:h-5 2xl:w-6 2xl:h-6 ease-in duration-300" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
