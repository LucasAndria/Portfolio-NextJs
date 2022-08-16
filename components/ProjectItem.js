import Link from "next/link"
import Image from "next/image"

function ProjectItem({ titre, descri, bgImg, url }) {
    return (
        <div className="relative flex items-center justify-center w-full shadow-xl shadow-gray-400 
                    rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image className="rounded-xl group-hover:opacity-40" src={bgImg} alt='background' />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-2xl text-white tracking-wider text-center">{titre}</h3>
                <p className="pb-4 pt-2 text-white text-center">{descri}</p>
                <Link href={url}>
                    <a>
                        <p className="text-center py-3 px-4 hover:text-white hover:bg-gray-600 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                            {"Plus d'info"}
                        </p>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default ProjectItem
