import Image from "next/image"
import Link from "next/link"
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useState } from "react";

function Navbar({ lang }) {

    const [nav, setNav] = useState(false)

    const toggleNav = (val = 'tsisy') => {
        val !== 'tsisy' ? setNav(val) : setNav(!nav)
    }

    const link = (lang === 'fr') ? (
        { Home: 'Accueil', About: 'A propos', Skills: 'Compétences', Projects: 'Projets', Resume: 'Résumé', Contact: 'Contact' }
    ) : (
        { Home: 'Home', About: 'About', Skills: 'Skills', Projects: 'Projects', Resume: 'Resume', Contact: 'Contact' }
    )
    return (
        <div className="fixed ml-[1%] w-[98%] h-20 shadow-xl z-[100]">
            <div className='flex justify-between items-center w-full h-full px-1 sm:px-5'>
                <Image src='/assets/lux-head.png' width='70' height='50' alt />
                <div>
                    <ul className='hidden lg:flex'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/'>{link.Home}</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/'>{link.About}</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/'>{link.Skills}</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/'>{link.Projects}</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/'>{link.Resume}</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/'>{link.Contact}</Link>
                        </li>
                    </ul>
                    <div
                        // style={{ color: `${linkColor}` }}
                        // onClick={handleNav}
                        className='lg:hidden'
                        onClick={() => toggleNav(true)}
                    >
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>

            <div className={nav ? `lg:hidden fixed left-0 top-0 w-full h-screen bg-black/70` : ""}>
                <div className={nav ?
                    "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] p-10 h-screen bg-[#ecf0f3] ease-in duration-500" :
                    "fixed left-[-100%] top-0 p-10 ease-in duration-500"}>
                    <div className="ml-[2%] w-[96%]">
                        <div className="flex my-2 items-center justify-between">
                            <Image src='/assets/lux-head.png' width='60' height='35' alt />
                            <div onClick={() => toggleNav(false)} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className="border-b border-gray-300 my-4">
                            <p className="w-[85%] md:w-[90%] py-4">
                                {lang === 'fr' ? (
                                    'Bienvenue !'
                                ) : (
                                    'Welcome to my portefolio !'
                                )}</p>
                        </div>
                    </div>
                    <div className="ml-[2%] w-[96%] py-4 flex flex-col">
                        <ul className="uppercase">
                            <Link href='/'>
                                <li className="py-4 text-sm" >Home</li>
                            </Link>
                            <Link href='/'>
                                <li className="py-4 text-sm" >About</li>
                            </Link>
                            <Link href='/'>
                                <li className="py-4 text-sm" >Skills</li>
                            </Link>
                            <Link href='/'>
                                <li className="py-4 text-sm" >Projects</li>
                            </Link>
                            <Link href='/'>
                                <li className="py-4 text-sm" >Contact</li>
                            </Link>
                        </ul>
                        <div className="pt-40">
                            <p className="uppercase tracking-widest text-[#5651e5]">
                                {lang === 'fr' ? (
                                    'Me contacter'
                                ) : (
                                    'Get in touch with me'
                                )}
                            </p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <FaLinkedinIn />
                                </div>
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <FaGithub />
                                </div>
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <AiOutlineMail />
                                </div>
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <BsFillPersonLinesFill />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar
