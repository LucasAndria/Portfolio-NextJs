import Image from "next/image"
import Link from "next/link"
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';

function Navbar({ lang }) {
    const link = lang === 'fr' ? (
        { Home: 'Accueil', About: 'A propos', Skills: 'Compétences', Projects: 'Projets', Resume: 'Résumé', Contact: 'Contact' }
    ) : (
        { Home: 'Home', About: 'About', Skills: 'Skills', Projects: 'Projects', Resume: 'Resume', Contact: 'Contact' }
    )
    return (
        <div className="fixed w-full h-20 shadow-xl z-[100]">
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16 mx-5'>
                <Image src='/../public/assets/lux-head.png' width='70' height='50' alt />
                <div>
                    <ul className='hidden lg:flex mx-4 lg:mx-8'>
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
                        className='lg:hidden mr-8'
                    >
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>
            <div className="fixed left-0 top-0 w-full h-screen bg-black/70">
                <div className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3]">
                    <div>
                        <div className="flex mx-5 my-2 items-center justify-between">
                            <Image src='/../public/assets/lux-head.png' width='60' height='35' alt />
                            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div>
                            <p>{lang === 'fr' ? (
                                'Blablabla'
                            ) : (
                                'eng eng eng eng '
                            )}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
