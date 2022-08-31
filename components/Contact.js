import Link from "next/link"
import { AiOutlineMail } from "react-icons/ai"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import { CVButton, GithubButton, LinkedInButton, MailButton } from "./links/Button"
import emailjs from '@emailjs/browser';
import { useRef } from "react"
import Image from "next/image"
import ContactImg from '../public//assets/Contacter.png'

function Contact() {

    const form = useRef();

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_a4d75pp', 'portfolio_id', form.current, 'ab24u_EApe1H27i4f')
            .then((result) => {
                alert(`Votre email a bien été reçu, Je répondrais le plus rapidement possible. ${result.text}`);
            }, (error) => {
                alert(error.text);
            });

        e.target.reset()
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
                                <p className="py-2 font-bold">lucasandria01@gmail.com <button className="ml-2 px-2 bg-blue-600" onClick={() => (navigator.clipboard.writeText("lucasandria01@gmail.com"), alert('email copié'))}>copier</button></p>
                                <p className="py-2 font-bold">034 20 529 88 <button className="ml-2 px-2 bg-blue-600" onClick={() => (navigator.clipboard.writeText("034 20 529 88"), alert('numéro copié'))}>copier</button></p>

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