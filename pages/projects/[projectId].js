import Image from "next/image"
import bgImage from '../../public/assets/me.jpeg'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from "next/link"

function ProjectId() {
    return (
        <div className="w-full">
            <div className="w-screen h-[30vh] lg:h-[40vh] relative">
                <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
                <Image className="absolute z-1" layout="fill" objectFit="cover" src={bgImage} alt="Image" />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10" >
                    <h2 className="py-2">Project Title</h2>
                    <h3>Tech used 1 / Tech used 2 / Tech used 3</h3>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
                <div className="col-span-4">
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates eligendi nulla asperiores voluptate omnis tempore repellat, magnam natus ab quos enim molestiae odio a velit placeat, cupiditate voluptas porro, eos sint soluta dignissimos sit minima. Voluptates nisi eligendi fugiat earum itaque iusto, illo, delectus quibusdam repellendus molestiae maiores laboriosam autem veniam soluta voluptatibus nobis nihil quaerat minus ea excepturi ex voluptatem? Eligendi tenetur ex amet voluptatum ipsam, placeat deserunt praesentium, debitis repudiandae nihil pariatur neque, nobis distinctio illo maiores voluptates esse illum? Accusamus culpa vitae quidem incidunt ex fuga nemo excepturi id, amet reprehenderit repudiandae aspernatur quaerat eveniet delectus. Quidem.</p>
                    <button className="px-8 py-2 mt-4 mr-8">Demo</button>
                    <button className="px-8 py-2 mt-4 ">Code</button>
                </div>
                <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
                    <div className="p-2">
                        <p className="text-center font-bold pb-2">Technologies</p>
                        <div className="grid grid-cols-3 md:grid-cols-1">
                            <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="mr-1" />Tech</p>
                            <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="mr-1" />Tech</p>
                            <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="mr-1" />Tech</p>
                            <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="mr-1" />Tech</p>
                        </div>
                    </div>
                </div>
                <Link href='/'><p className="underline cursor-pointer">Back</p></Link>
            </div>
        </div>
    )
}

export default ProjectId
