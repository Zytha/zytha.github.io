import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Social(props){
    return (
        <>
          <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href={props.href} target="_blank" rel="noreferrer" className="w-[2.0rem] mb-[1.5rem] mx-[0.5rem]">
            <Image src={props.src} alt={props.alt} height={32} width={32}/>
          </motion.a>
        </>
    )
}
