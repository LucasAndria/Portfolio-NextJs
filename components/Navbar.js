import Image from "next/image"
import Link from "next/link"
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'


function Navbar({ smallText, lang }) {


    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    const [navBg, setNavBg] = useState('#ecf0f3')
    const [linkColor, setLinkColor] = useState('#1f2937')
    const router = useRouter()

    useEffect(() => {
        if (router.asPath.includes('/projects')) {
            setNavBg('transparent')
            setLinkColor('#ecf0f3')
        } else {
            setNavBg('#ecf0f3')
            setLinkColor('#1f2937')
        }
    }, [router])

    const toggleNav = (val = 'tsisy') => {
        val !== 'tsisy' ? setNav(val) : setNav(!nav)
    }

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        };
        window.addEventListener('scroll', handleShadow)
    }, [])

    const link = (lang === 'fr') ? (
        { Home: 'Accueil', About: 'A propos', Skills: 'Compétences', Projects: 'Projets', Resume: 'Résumé', Contact: 'Contact' }
    ) : (
        { Home: 'Home', About: 'About', Skills: 'Skills', Projects: 'Projects', Resume: 'Resume', Contact: 'Contact' }
    )
    return (
        <div style={{ backgroundColor: navBg }} className={shadow ? 'fixed w-full h-20 shadow-xl z-[100] ease-in duration-300' :
            'fixed w-full h-20 z-[100] ease-in duration-300'}>
            <div className='flex justify-between items-center w-full h-full px-1 sm:px-5'>
                <Link href='/'>
                    <div><Image className="cursor-pointer" src='/assets/lux-head.png' width='70' height='50' /></div>
                </Link>
                <div className="mx-[1%]">
                    <ul style={{ color: linkColor }} className='hidden lg:flex'>
                        <li className='ml-10 text-sm uppercase hover:text-[#5651e5]'>
                            <Link href='/'>{link.Home}</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:text-[#5651e5]'>
                            <Link href='/#about'>{link.About}</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:text-[#5651e5]'>
                            <Link href='/#skills'>{link.Skills}</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:text-[#5651e5]'>
                            <Link href='/#projects'>{link.Projects}</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:text-[#5651e5]'>
                            <Link href='/'>{link.Resume}</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:text-[#5651e5]'>
                            <Link href='/#contact'>{link.Contact}</Link>
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
                            <Link href='/'>
                                <div><Image onClick={() => toggleNav(false)} src='/assets/lux-head.png' width='60' height='35' className="cursor-pointer" /></div>
                            </Link>
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
                                <li onClick={() => toggleNav(false)} className="py-4 text-sm" >{link.Home}</li>
                            </Link>
                            <Link href='/#about'>
                                <li onClick={() => toggleNav(false)} className="py-4 text-sm" >{link.About}</li>
                            </Link>
                            <Link href='/#skills'>
                                <li onClick={() => toggleNav(false)} className="py-4 text-sm" >{link.Skills}</li>
                            </Link>
                            <Link href='/#projects'>
                                <li onClick={() => toggleNav(false)} className="py-4 text-sm" >{link.Projects}</li>
                            </Link>
                            <Link href='/#contact'>
                                <li onClick={() => toggleNav(false)} className="py-4 text-sm" >{link.Contact}</li>
                            </Link>
                        </ul>
                        <div className="pt-40">
                            <p className="uppercase tracking-widest text-[#5651e5] text-sm md:text-[0.92rem]">
                                {smallText}
                            </p>
                            <div className='flex items-center justify-between my-4 w-[80%]'>
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
