import { motion } from 'framer-motion';

export default function CollabBottom(props){
    return (
        <>
          <div className='work-div lg:mb-[-1.5rem] 2xl:mb-[-1.5rem] 2xl:mt-[-3.5rem] lg:mt-[-2.5rem]'>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className='flex justify-center'>
                  <img src={props.src} className='object-cover rounded-xl aspect-video ' alt={props.alt}/>
              </motion.div>
              <div>
                  <h2 className='text-center'>{props.title}</h2>
                  <p className='text-center'>{props.content}</p>
              </div>
          </div>
        </>
    )
}

