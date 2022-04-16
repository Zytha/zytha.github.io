import { motion } from 'framer-motion';

export default function Collab(props){
    return (
        <>
            <div className='work-div drop-shadow-2xl'>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className='flex justify-center'>
                    <img src={props.src} width={ 1280 } height={ 720 } alt={props.alt} className='object-cover rounded-xl aspect-video'/>
                </motion.div>
                <div>
                    <h2 className='text-center'>{props.title}</h2>
                    <p className='text-center'>{props.content}</p> 
                </div>
            </div>
        </>
    )
}

