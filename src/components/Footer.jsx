import { motion } from 'framer-motion';

// Images
import github from '../images/github.png';
import twitter from '../images/twitter.png';
import email from '../images/email.png';

export default function Footer() {
    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 3.0 }} className='flex justify-center items-center content-center'>
                <motion.a  href='https://github.com/reactwindd' target='_blank' rel='noreferrer' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='w-[2.0rem] mb-[1.5rem] mx-[0.5rem]'>
                    <img src={ github } alt='github' className='h-[32px] w-[32px]'/>
                </motion.a>
                <motion.a href='https://twitter.com/reactwindd' target='_blank' rel='noreferrer' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='w-[2.0rem] mb-[1.5rem] mx-[0.5rem]'>
                    <img src={ twitter } alt='twitter' className='h-[32px] w-[32px]'/>
                </motion.a>
            </motion.div>
        </>
    );
}
