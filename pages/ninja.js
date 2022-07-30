import { motion } from 'framer-motion'
import Link from 'next/link'

function Ninja() {
    return (
        <div className='flex flex-col items-center h-screen bg-black pt-[20%]'>
            <h2 className='mb-5'>
                welcome to Pizza Joint
            </h2>
            <Link href='/'>
                <a>
                    Create your pizza
                </a>
            </Link>
        </div>
    )
}

export default Ninja
