import { motion } from 'framer-motion';

export default function Social(props){
    return (
        <>
          <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href={props.href} target="_blank" rel="noreferrer" className="w-[2.0rem] mb-[1.5rem] mx-[0.5rem]">
            <img src={props.src} alt={props.alt} className='h-[32px] w-[32px]'/>
          </motion.a>
        </>
    )
}
