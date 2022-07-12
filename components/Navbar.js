import Image from "next/image"
import Link from "next/link"
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useState } from "react";

function Navbar({ smallText, lang }) {

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
        <div className="fixed w-full h-20 shadow-xl z-[100] bg-white/80">
            <div className='flex justify-between items-center w-full h-full px-1 sm:px-5'>
                <Image src='/assets/lux-head.png' width='70' height='50' />
                <div className="mx-[1%]">
                    <ul className='hidden lg:flex'>
                        <li className='ml-10 text-sm uppercase hover:text-green-500'>
                            <Link href='/'>{link.Home}</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:text-green-500'>
                            <Link href='/'>{link.About}</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:text-green-500'>
                            <Link href='/'>{link.Skills}</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:text-green-500'>
                            <Link href='/'>{link.Projects}</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:text-green-500'>
                            <Link href='/'>{link.Resume}</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:text-green-500'>
                            <Link href='/'>{link.Contact}</Link>
                        </li>
                    </ul>
                    <div
                        // style={{ color: `${linkColor}` }}
                        // onClick={handleNav}
                        className='lg:hidden cursor-pointer'
                        onClick={() => toggleNav(true)}
                    >
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>

            <div className={nav ? 'lg:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ""}>
                <div className={nav ?
                    "fixed left-0 top-0 w-[80%] sm:w-[70%] md:w-[60%] p-4 h-screen bg-[#ecf0f3] ease-in-out duration-700" :
                    "fixed left-[-100%]  top-0 w-[80%] sm:w-[70%] md:w-[60%] h-screen p-10 ease-in duration-700"}>
                    <div>
                        <div className="flex my-2 items-center justify-between">
                            <Image src='/assets/lux-head.png' width='60' height='35' />
                            <div onClick={() => toggleNav(false)} className={nav ? "rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer ease-in-out duration-500" : 'hidden'}>
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
                                <li className="py-4 text-sm" >{link.Home}</li>
                            </Link>
                            <Link href='/'>
                                <li className="py-4 text-sm" >{link.About}</li>
                            </Link>
                            <Link href='/'>
                                <li className="py-4 text-sm" >{link.Skills}</li>
                            </Link>
                            <Link href='/'>
                                <li className="py-4 text-sm" >{link.Projects}</li>
                            </Link>
                            <Link href='/'>
                                <li className="py-4 text-sm" >{link.Contact}</li>
                            </Link>
                        </ul>
                        <div className="pt-40">
                            <p className="uppercase tracking-widest text-[#5651e5] text-sm md:text-lg">
                                {smallText}
                            </p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className="group rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <FaLinkedinIn className="group-hover:animate-wiggle" />
                                </div>
                                <div className="group rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <FaGithub className="group-hover:animate-wiggle" />
                                </div>
                                <div className="group rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <AiOutlineMail className="group-hover:animate-wiggle" />
                                </div>
                                <div className="group rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <BsFillPersonLinesFill className="group-hover:animate-wiggle" />
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
