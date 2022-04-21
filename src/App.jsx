// Dependencies
import { motion } from 'framer-motion';

// Components
import Collab from './components/Collab';
import CollabBottom from './components/CollabBottom';
import Footer from './components/Footer';
import Spliter from './components/Spliter';

// Images
import stob from './images/stob.webp';
import invalid from './images/invalid.webp';
import notex from './images/notex.webp';

export default function Home() {
    return (
        <>
            <motion.h1 initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} >Homepage</motion.h1>
            <Spliter text='About Us'/>

            { /* About */ }
            <motion.div className='wrapper' initial={{ x:-50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
                <h2>📚 About me</h2>
                <p>Hello there! Welcome to my homepage, I'm Zytha. A passionate front-end web developer from Malaysia. I have experience in developing awesome static websites with TailwindCSS and React.</p>
            </motion.div>

            <Spliter text='Collabs'/>

            { /* Collabs */ }
            <motion.div className='wrapper grid grid-cols-1 lg:grid-cols-2' initial={{ y: 50, opacity: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1 }}>
                <motion.a href='http://bill-zhanxg.com/' target='_blank' initial={{ y: 50, opacity: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.50 }}>
                    <Collab src={stob} alt='Stob' title='Stob' content='A multi-purpose Discord bot with 25+ functions, 60+ users and user friendly control panel.'/>
                </motion.a>
                <motion.a href='https://site.notexmc.tk/' target='_blank' initial={{ y: 50, opacity: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 2 }}>
                    <Collab src={notex} alt='Notex' title='NotexMC' content='Notex Network is an unique and fun to play Minecraft Bedrock Edition PvP Server.'/>
                </motion.a>
                <motion.div initial={{ y: 50, opacity: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 2.50 }}>
                    <CollabBottom src={invalid} alt='Coming Soon' title='Coming Soon' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus magna nec maximus tincidunt.'/>
                </motion.div>
            </motion.div>

            <Spliter text='Socials'/>

            { /* Footer */ } 
            <Footer />
        </>
    );
}

