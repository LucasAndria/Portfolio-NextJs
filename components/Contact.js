import Link from "next/link"
import { AiOutlineMail } from "react-icons/ai"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import { CVButton, GithubButton, LinkedInButton, MailButton } from "./links/Button"
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react"
import Image from "next/image"
import ContactImg from '../public//assets/Contacter.png'

function Contact() {

    const [copyMailLoaded, setCopyMailLoaded] = useState(false)
    const [copyNumLoaded, setCopyNumLoaded] = useState(false)
    const form = useRef();

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_a4d75pp', 'portfolio_id', form.current, 'ab24u_EApe1H27i4f')
            .then((result) => {
                alert(`Votre email a bien été reçu, Je répondrais le plus rapidement possible.`);
                console.log(result.text)
            }, (error) => {
                alert(error.text);
            });

        e.target.reset()
    }

    function copyMail() {
        navigator.clipboard.writeText("lucasandria01@gmail.com")
        setCopyMailLoaded(true)
        setTimeout(() => {
            setCopyMailLoaded(false)
        }, 800);
    }

    function copyNum() {
        navigator.clipboard.writeText("034 20 529 88")
        setCopyNumLoaded(true)
        setTimeout(() => {
            setCopyNumLoaded(false)
        }, 800);
    }

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
                                <Image
                                    className='rounded-xl hover:scale-105 ease-in duration-300'
                                    src={ContactImg}
                                    alt='contact'
                                />
                            </div>
                            <div className="mt-5">
                                {/* <p className="uppercase pt-8">Lien : </p> */}
                                <p className="py-2 font-bold flex gap-3">lucasandria01@gmail.com
                                    <button
                                        className="px-2 py-1 text-sm font-medium rounded text-white bg-blue-600 hover:bg-blue-600/80"
                                        onClick={copyMail}
                                    >
                                        <svg className={copyMailLoaded ? "bi bi-check w-4 h-4 text-white animate-ping absolute text-center" : "bi bi-check hidden"} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                        </svg>
                                        <span className={copyMailLoaded ? "invisible" : ""}>
                                            <svg className="bi bi-clipboard w-4 h-4 text-white text-center" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                                            </svg>
                                        </span>
                                    </button>
                                </p>
                                <p className="py-2 font-bold  flex gap-3">034 20 529 88
                                    <button
                                        className="px-2 py-1 text-sm font-medium rounded text-white bg-blue-600 hover:bg-blue-600/80"
                                        onClick={copyNum}
                                    >
                                        <svg className={copyNumLoaded ? "bi bi-check w-4 h-4 text-white animate-ping absolute text-center" : "bi bi-check hidden"} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                        </svg>
                                        <span className={copyNumLoaded ? "invisible" : ""}>
                                            <svg className=" bi bi-clipboard w-4 h-4 text-white text-center" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                                            </svg>
                                        </span>
                                    </button>
                                </p>

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
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                                    <div className="flex flex-col">
                                        <label className="uppercase text-sm py-2">Nom</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='nom' />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="uppercase text-sm py-2">Numero téléphone</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='numero' />
                                    </div>
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">Email</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name='email' />
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">Objet</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='objet' />
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">Message</label>
                                    <textarea className="border-2 rounded-lg p-3 border-gray-300" rows='10' name='message'></textarea>
                                </div>
                                <input type="submit" value='Send Message' className="w-full bg-transparent mt-4 hover:bg-[#5651e5] text-[#5651e5] cursor-pointer font-semibold hover:text-white py-2 px-4 border border-[#5651e5] hover:border-transparent rounded" />
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