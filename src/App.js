import { motion } from 'framer-motion';

import Social from './components/Social';
import Collab from './components/Collab';
import CollabBottom from './components/CollabBottom';

import stob from './images/stob.png';
import invalid from './images/invalid.png';
import github from './images/github.png';
import twitter from './images/twitter.png';
import email from './images/email.png';

export default function Home() {
    return (
        <>
            <article>
                <motion.h1 initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} >Homepage</motion.h1>
                <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, delay: 0.25 }} className="relative flex py-5 items-center">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <span className="flex-shrink mx-4 text-gray-400"> General Infomation </span>
                    <div className="flex-grow border-t border-gray-400"></div>
                </motion.div>
                <motion.div initial={{ x:-50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
                  <h2>📚 About me</h2>
                  <p>Hello there! Welcome to my homepage, I'm Zytha. A passionate front-end web developer from Malaysia. I have experience in developing awesome static websites with TailwindCSS and React.</p>
                </motion.div>
                <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, delay: 0.75 }} className="relative flex py-5 items-center">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <span className="flex-shrink mx-4 text-gray-400"> Collabs </span>
                    <div className="flex-grow border-t border-gray-400"></div>
                </motion.div>
            </article>
            <motion.article className="grid grid-cols-1 lg:grid-cols-2" initial={{ y: 50, opacity: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1 }}>
                <motion.a href="http://bill-zhanxg.com/" target="_blank" initial={{ y: 50, opacity: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.50 }}>
                    <Collab src={stob} alt="Stob" title="Stob" content="A multi-purpose Discord bot with 25+ functions, 60+ users and user friendly control panel."/>
                </motion.a>
                <motion.div initial={{ y: 50, opacity: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 2 }}>
                    <Collab src={invalid} alt="Coming Soon" title="Coming Soon" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus magna nec maximus tincidunt."/>
                </motion.div>
                <motion.div initial={{ y: 50, opacity: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 2.50 }}>
                    <CollabBottom src={invalid} alt="Coming Soon" title="Coming Soon" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus magna nec maximus tincidunt."/>
                </motion.div>
            </motion.article>
            <article>
                <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, delay: 2.75 }} className="relative flex py-5 items-center">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <span className="flex-shrink mx-4 text-gray-400"> Socials </span>
                    <div className="flex-grow border-t border-gray-400"></div>
                </motion.div>
            </article>
            <article>
                <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 3.0 }} className="flex justify-center items-center content-center">
                    <Social href="https://github.com/zytha" src={github} alt="Github"/>
                    <Social href="https://twitter.com/xXyangXx_" src={twitter} alt="Twitter"/>
                    <Social href="mailto: yang@zytha.ml" src={email} alt="Email"/>
               </motion.div>
            </article>
        </>
    );
}

