import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Collab(props){
    return (
        <>
          <div className="work-div">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="flex justify-center">
              <Image src={props.src} height={900} width={1600} className="object-cover rounded-xl" alt={props.alt}/>
            </motion.div>
            <div>
              <h2 className="text-center">{props.title}</h2>
              <p className="text-center">{props.content}</p> 
            </div>
          </div>
        </>
    )
}
