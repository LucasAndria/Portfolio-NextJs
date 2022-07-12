import { AiOutlineMail } from "react-icons/ai"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"

function Main({ smallText, lang }) {

    const greeting = lang === 'fr' ? (
        <h2 className="py-4 text-gray-700">Salut, mon nom est <span className="text-[#5651e5]">Lucas</span></h2>) : (
        <h2 className="py-4 text-gray-700">Hi, I'm <span className="text-[#5651e5]">Lucas</span></h2>)

    const brefPresentation = lang === 'fr' ? (
        <h2 className="py-4 text-gray-700">Un Développeur Web Junior</h2>) : (
        <h2 className="py-4 text-gray-700">A Junior web developer</h2>)

    const presentation = lang === 'fr' ? (
        <p className="py-4 text-gray-600 max-w-[70%] m-auto lg:text-lg ease-in duration-300">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic maiores cumque eius sed consectetur mollitia adipisci tempore modi vero? Molestias iusto eius officiis rem, illum perferendis soluta perspiciatis nam! Itaque.</p>) : (
        <p className="py-4 text-gray-600 max-w-[70%] m-auto lg:text-lg ease-in duration-300">Lorem ipsum mais en english dolor sit amet consectetur, adipisicing elit. Hic maiores cumque eius sed consectetur mollitia adipisci tempore modi vero? Molestias iusto eius officiis rem, illum perferendis soluta perspiciatis nam! Itaque.</p>)

    return (
        <div className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <p className="uppercase text-sm tracking-widest text-gray-600">
                        {smallText}
                    </p>
                    {greeting}
                    {brefPresentation}

                    {presentation}
                    <div className="flex items-center justify-between max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] 2xl:max-w-[600px] m-auto py-4 ease-in duration-300">
                        <div className="group rounded-full shadow-lg shadow-gray-400 p-[18px] sm:p-6 lg:p-7 2xl:p-8 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaLinkedinIn className="group-hover:animate-wiggle lg:w-5 lg:h-5 2xl:w-6 2xl:h-6 ease-in duration-300 " />
                        </div>
                        <div className="group rounded-full shadow-lg shadow-gray-400 p-[18px] sm:p-6 lg:p-7 2xl:p-8 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaGithub className="group-hover:animate-wiggle lg:w-5 lg:h-5 2xl:w-6 2xl:h-6 ease-in duration-300" />
                        </div>
                        <div className="group rounded-full shadow-lg shadow-gray-400 p-[18px] sm:p-6 lg:p-7 2xl:p-8 cursor-pointer hover:scale-110 ease-in duration-300">
                            <AiOutlineMail className="group-hover:animate-wiggle lg:w-5 lg:h-5 2xl:w-6 2xl:h-6 ease-in duration-300" />
                        </div>
                        <div className="group rounded-full shadow-lg shadow-gray-400 p-[18px] sm:p-6 lg:p-7 2xl:p-8 cursor-pointer hover:scale-110 ease-in duration-300">
                            <BsFillPersonLinesFill className="group-hover:animate-wiggle lg:w-5 lg:h-5 2xl:w-6 2xl:h-6 ease-in duration-300" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
