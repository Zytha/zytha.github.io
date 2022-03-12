import Image from 'next/image';
import Head  from 'next/head';
import { motion } from 'framer-motion';

import Social from '../components/Social';
import Collab from '../components/Collab';
import CollabBottom from '../components/CollabBottom';

import Stob from '../public/images/stob.png';
import Email from '../public/images/email.png';
import Github from '../public/images/github.png';
import Twitter from '../public/images/twitter.png';
import PlaceHolder from '../public/images/invalid.png';

export default function Home() {
    return (
        <>
            <Head>
                <title>Zytha's Homepage</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="keywords" content="Zytha, Github, React, JavaScript, Front-End Developer, Next, Yang Zheng Yong"/>
                <meta name="description" content="Hello there! Welcome to my homepage, I'm Zytha. A passionate front-end web developer from Malaysia. I have experience in developing awesome static websites with TailwindCSS and Next.js."/>
                <meta property="og:type" content="Homepage"/>
                <meta property="og:url" content="https://www.zytha.ml"/>
                <meta name="theme-color" content="#292C34"/>
            </Head>

            <article>
                <motion.h1 initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} >Homepage</motion.h1>
                <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, delay: 0.25 }} className="relative flex py-5 items-center">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <span className="flex-shrink mx-4 text-gray-400"> General Infomation </span>
                    <div className="flex-grow border-t border-gray-400"></div>
                </motion.div>
                <motion.div initial={{ x:-50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
                  <h2>📚 About me</h2>
                  <p>Hello there! Welcome to my homepage, I'm Zytha. A passionate front-end web developer from Malaysia. I have experience in developing awesome static websites with TailwindCSS and Next.js. I'm also obsessed with some general-purpose programming languages like Ruby and Python. I learn most of my programming skills from the internet.</p>
                </motion.div>
                <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, delay: 0.75 }} className="relative flex py-5 items-center">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <span className="flex-shrink mx-4 text-gray-400"> Collabs </span>
                    <div className="flex-grow border-t border-gray-400"></div>
                </motion.div>
            </article>
            <motion.article className="grid grid-cols-1 lg:grid-cols-2" initial={{ y: 50, opacity: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1 }}>
                <Collab src={Stob} alt="Stob" title="Stob" content="A multi-purpose Discord bot with 25+ functions, 60+ users and user friendly control panel."/>
                <Collab src={PlaceHolder} alt="Coming Soon" title="Coming Soon" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus magna nec maximus tincidunt."/>
                <CollabBottom src={PlaceHolder} alt="Coming Soon" title="Coming Soon" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus magna nec maximus tincidunt."/>
            </motion.article>
            <article>
                <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, delay: 1.25 }} className="relative flex py-5 items-center">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <span className="flex-shrink mx-4 text-gray-400"> Socials </span>
                    <div className="flex-grow border-t border-gray-400"></div>
                </motion.div>
            </article>
            <article>
                <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, delay: 1.5 }} className="flex justify-center items-center content-center">
                    <Social href="https://github.com/zytha" src={Github} alt="Github"/>
                    <Social href="https://twitter.com/xXyangXx_" src={Twitter} alt="Twitter"/>
                    <Social href="mailto: yang@zytha.ml" src={Email} alt="Email"/>
               </motion.div>
            </article>
        </>
    );
}

