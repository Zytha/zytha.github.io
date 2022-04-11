import { motion } from 'framer-motion';

export default function Spliter(props) {
    return (
        <>
            <article>
                <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className="relative flex py-5 items-center">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <span className="flex-shrink mx-4 text-gray-400"> { props.text } </span>
                    <div className="flex-grow border-t border-gray-400"></div>
                </motion.div>
            </article>
        </>
    )
}