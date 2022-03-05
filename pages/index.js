import Image from 'next/image';
import Head from 'next/head';

import Social from '../components/Social';
import Collab from '../components/Collab';
import CollabBottom from '../components/CollabBottom';

import Stob from '../public/images/stob.png';
import Github from '../public/images/github.png';
import Twitter from '../public/images/twitter.png';
import PlaceHolder from '../public/images/invalid.png';

export default function Home() {
    return (
        <>
            <Head>
                <title>Zytha's Homepage</title>
                <meta name="description" content="Hello there! Welcome to my homepage, I'm Zytha. A passionate front-end web developer from Malaysia. I have experience in developing awesome static websites with TailwindCSS and Next.js."/>
                <meta property="og:type" content="Homepage"/>
                <meta property="og:url" content="https://www.zytha.ml"/>
                <meta name="theme-color" content="#292C34"/>
            </Head>

            <article>
                <h1>Homepage</h1>
                <div className="relative flex py-5 items-center">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <span className="flex-shrink mx-4 text-gray-400"> General Infomation </span>
                    <div className="flex-grow border-t border-gray-400"></div>
                </div>
                <h2>📚 About me</h2>
                <p>Hello there! Welcome to my homepage, I'm Zytha. A passionate front-end web developer from Malaysia. I have experience in developing awesome static websites with TailwindCSS and Next.js. I'm also obsessed with some general-purpose programming languages like Ruby and Python. I learn most of my programming skills from the internet.</p>
                <div className="relative flex py-5 items-center">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <span className="flex-shrink mx-4 text-gray-400"> Collabs </span>
                    <div className="flex-grow border-t border-gray-400"></div>
                </div>
            </article>
            <article className="grid grid-cols-1 lg:grid-cols-2">
                <Collab src={Stob} alt="Stob" title="Stob" content="A multi-purpose Discord bot with 25+ functions, 60+ users and user friendly control panel."/>
                <Collab src={PlaceHolder} alt="Coming Soon" title="Coming Soon" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus magna nec maximus tincidunt."/>
                <CollabBottom src={PlaceHolder} alt="Coming Soon" title="Coming Soon" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus magna nec maximus tincidunt."/>
            </article>
            <article>
                <div className="relative flex py-5 items-center">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <span className="flex-shrink mx-4 text-gray-400"> Socials </span>
                    <div className="flex-grow border-t border-gray-400"></div>
                </div>
            </article>
            <article>
                <div className="flex justify-center items-center content-center">
                    <Social href="https://github.com/zytha" src={Github} alt="Github"/>
                    <Social href="https://twitter.com/xXyangXx_" src={Twitter} alt="Twitter"/>
               </div>
            </article>
        </>
    );
}

