import { Canvas } from '@react-three/fiber'
import { CVButton, GithubButton, LinkedInButton, MailButton } from './links/Button'
// import { OrbitControls, Stars } from "@react-three/drei"

function Main() {

    return (
        <div id='home' className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <p className="text-xs tracking-widest text-gray-600">
                        Faire face aux défis, je {"n'accepte"} pas les limitations.
                    </p>
                    <h2 className="py-4 text-gray-700">Mon nom est <span className="text-[#5651e5]">Lucas</span></h2>
                    <h2 className="py-4 text-gray-700">Je suis un Développeur Web</h2>

                    <p className="py-4 text-gray-600 max-w-[70%] m-auto lg:text-lg ease-in duration-300">
                        Situé à Antananarivo.
                    </p>
                    {/* <p className="text-gray-600 max-w-[70%] m-auto lg:text-lg ease-in duration-300">
                        Vous pouvez me rejoindre ici
                    </p> */}


                    <div className="flex items-center justify-between max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] 2xl:max-w-[600px] m-auto py-4 ease-in duration-300">
                        <LinkedInButton />
                        <GithubButton />
                        <MailButton />
                        <CVButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
