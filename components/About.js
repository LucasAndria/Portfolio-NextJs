import Image from 'next/image'
import React from 'react'

function About({ lang }) {
    return (
        <div className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                    <h2 className='py-4'>Who I Am</h2>
                    <p className='py-2 text-gray-600'>
                        Description of me Lorem, ipsum dolor sit amet consectetur
                    </p>
                    <p className='py-2 text-gray-600'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium tenetur dolore sunt sapiente sint, distinctio accusantium magni iste unde error temporibus a? Voluptas dicta suscipit veniam dignissimos porro. Harum fugiat assumenda accusamus inventore architecto repellendus eligendi! Eos eveniet quam quo mollitia accusamus veritatis quos iure reiciendis dicta in! Assumenda, nemo?
                    </p>
                    <p className='py-2 text-gray-600'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore sapiente laudantium vitae quam tenetur quo est voluptatum voluptatem deserunt. Perspiciatis, voluptatum veniam architecto obcaecati totam, esse in dolorem consectetur ipsam officiis dignissimos omnis eos? Nulla, sit, impedit nesciunt nam dicta et dignissimos perspiciatis sapiente aperiam molestiae fugiat. Temporibus, quis error magnam cumque illum veritatis vitae atque, libero recusandae dolorum nam beatae nostrum? Soluta cupiditate quo omnis quasi, nesciunt beatae eos delectus. Totam at officia fuga aspernatur modi reiciendis? Necessitatibus, ad eum dignissimos eligendi eos at quia esse accusamus dolore est, repellendus praesentium ducimus facilis velit soluta quas quo incidunt natus.
                    </p>

                    <p className='py-2 text-gray-600 underline cursor-pointer'>
                        Check out some of my projects.
                    </p>
                </div>

                <div className='w-full h-[60vh] sm:h-[70vh] md:h-[60vh] m-auto shadow-xl shadow-gray-600 rounded-xl flex items-center justify-center p-4 scale-100 hover:scale-105 ease-in duration-300'>
                    <Image src='/assets/me.jpeg' layout='fill' className='rounded-xl' />
                </div>
            </div>
        </div>
    )
}

export default About
