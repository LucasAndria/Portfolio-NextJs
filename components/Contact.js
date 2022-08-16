import Link from "next/link"
import { AiOutlineMail } from "react-icons/ai"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import { CVButton, GithubButton, LinkedInButton, MailButton } from "./links/Button"

function Contact() {
    return (
        <div id='contact' className="w-full lg:h-screen">
            <div className="max-w-[1240px] m-auto px-2 py-24 w-full">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">Contact</p>
                {/* <h2 className="py-4">Me rejoindre</h2> */}
                <div className="grid lg:grid-cols-5 gap-8">
                    {/* left */}
                    <div className="col-span-3 lg:col-span-2 w-full shadow-xl shadow-gray-400 rounded-xl p-4">
                        <div className="lg:p-4 h-full">
                            <div>
                                <img className="rounded-xl hover:scale-105 ease-in duration-300 mb-5" src="/assets/Contacter.png" alt="/" />
                            </div>
                            <div>
                                <h2 className="py-2">Lucas ANDRIANARIJAONA</h2>
                                <p>Developeur web Junior</p>
                                <p className="py-4">Je suis à votre disposition pour des projets ou pour un emploie. Contacter moi.</p>
                            </div>
                            <div>
                                {/* <p className="uppercase pt-8">Lien : </p> */}
                                <div className="flex items-center justify-between py-4">
                                    <LinkedInButton />
                                    <GithubButton />
                                    {/* <MailButton /> */}
                                    <CVButton />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right */}

                    <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
                        <div className="p-4">
                            <form>
                                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                                    <div className="flex flex-col">
                                        <label className="uppercase text-sm py-2">Nom</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="uppercase text-sm py-2">Numero téléphone</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                                    </div>
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">Email</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" />
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">Objet</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">Message</label>
                                    <textarea className="border-2 rounded-lg p-3 border-gray-300" rows='10'></textarea>
                                </div>
                                <button className="w-full p-4 text-gray-100 mt-4">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center py-12">
                    <Link href='/'>
                        <div className="group rounded-full shadow-lg shadow-gray-400 p-[20px] lg:p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                            <HiOutlineChevronDoubleUp className="text-[#5651e5] group-hover:animate-bounce" size={30} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact
