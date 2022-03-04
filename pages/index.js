import Image from 'next/image'

import Stob from '../public/images/stob.png';
import Github from '../public/images/github.png';
import Twitter from '../public/images/twitter.png';
import PlaceHolder from '../public/images/invalid.png';

export default function Home() {
    return (
        <>
            <article>
                <h1>Homepage</h1>
                <div className="relative flex py-5 items-center">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <span className="flex-shrink mx-4 text-gray-400"> General Infomation </span>
                    <div className="flex-grow border-t border-gray-400"></div>
                </div>
                <h2>📚 About me</h2>
                <p>Hello there! Welcome to my portfolio, I'm Zytha. A passionate front-end web developer from Malaysia. I have experience in developing awesome static websites with TailwindCSS and Next.js. I'm also obsessed with some general-purpose programming languages like Ruby and Python. I learn most of my programming skills from the internet.</p>
                <div className="relative flex py-5 items-center">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <span className="flex-shrink mx-4 text-gray-400"> Collabs </span>
                    <div className="flex-grow border-t border-gray-400"></div>
                </div>
            </article>
            <article className="grid grid-cols-1 lg:grid-cols-2">
                <div className="work-div">
                    <div className="flex justify-center">
                        <Image src={Stob} className="aspect-video object-cover rounded-xl" alt="Stob"/>
                    </div>
                    <div>
                        <h2 className="text-center">Stob</h2>
                        <p className="text-center">A multi-purpose Discord bot with 25+ functions, 60+ users and user friendly control panel.</p>
                    </div>
                </div>
                <div className="work-div">
                    <div className="flex justify-center">
                        <Image src={PlaceHolder} className="aspect-video object-cover rounded-xl" alt="Coming Soon"/>
                    </div>
                    <div>
                        <h2 className="text-center">Coming Soon</h2>
                        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus magna nec maximus tincidunt.</p>
                    </div>
                </div>
                <div className="work-div pb-[0rem] lg:mb-[-1.5rem] 2xl:mb-[-3rem] 2xl:mt-[-5rem]  lg:mt-[-2.5rem]">
                    <div className="flex justify-center">
                        <Image src={PlaceHolder} className="aspect-video object-cover rounded-xl" alt="Coming Soon"/>
                    </div>
                    <div>
                        <h2 className="text-center">Coming Soon</h2>
                        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus magna nec maximus tincidunt.</p>
                    </div>
                </div>
            </article>
            <article>
                <div className="relative flex py-5 items-center">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <span className="flex-shrink mx-4 text-gray-400"> The End </span>
                    <div className="flex-grow border-t border-gray-400"></div>
                </div>
            </article>
            <article>
                <div className="flex justify-center items-center content-center">
                    <a href="https://github.com/zytha" target="_blank" rel="noreferrer" className="w-[2.0rem] mb-[1.5rem] mx-[0.5rem]">
                        <Image src={Github} alt="Github" height={32} width={32}/>
                    </a>
                    <a href="https://twitter.com/xXyangXx_" target="_blank" rel="noreferrer" className="w-[2.0rem] mb-[1.5rem] mx-[0.5rem]">
                        <Image src={Twitter} alt="Twitter" height={32} width={32}/>
                    </a>
               </div>
            </article>
        </>
    );
}

