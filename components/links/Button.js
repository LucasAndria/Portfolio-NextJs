import { AiOutlineMail } from "react-icons/ai"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import Link from "next/link"

function LinkedInButton() {
    return (
        <Link href={"https://www.linkedin.com/in/lucas-andrianarijaona-7039641b8/"} passHref={true}>
            <a target="_blank" className="group rounded-full shadow-lg shadow-gray-400 p-[18px] lg:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn className="group-hover:animate-wiggle lg:w-5 lg:h-5 2xl:w-6 2xl:h-6 ease-in duration-300 " />
            </a>
        </Link>
    )
}

function GithubButton() {
    return (
        <Link href={"https://github.com/LucasAndria"} passHref={true}>
            <a target="_blank" className="group rounded-full shadow-lg shadow-gray-400 p-[18px] lg:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub className="group-hover:animate-wiggle lg:w-5 lg:h-5 2xl:w-6 2xl:h-6 ease-in duration-300" />
            </a>
        </Link>
    )
}

function MailButton() {
    return (
        <Link href="/#contact" passHref={true}>
            <a className="group rounded-full shadow-lg shadow-gray-400 p-[18px] lg:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail className="group-hover:animate-wiggle lg:w-5 lg:h-5 2xl:w-6 2xl:h-6 ease-in duration-300" />
            </a>
        </Link>
    )
}

function CVButton() {
    return (
        <Link href={"/assets/Lucas Andrianarijaona 2022.pdf"} passHref={true}>
            <a className="group rounded-full shadow-lg shadow-gray-400 p-[18px] lg:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill className="group-hover:animate-wiggle lg:w-5 lg:h-5 2xl:w-6 2xl:h-6 ease-in duration-300" />
            </a>
        </Link>
    )
}

export { GithubButton, LinkedInButton, MailButton, CVButton }
