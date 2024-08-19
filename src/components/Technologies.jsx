import { RiReactjsLine } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri";
import { BiLogoPython } from "react-icons/bi";
import { BiLogoPostgresql } from "react-icons/bi";
import { BiLogoDocker } from "react-icons/bi";
import { SiJenkins } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },    
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2
            whileInView={{ opacity: 1, y: 0}}
            initial= {{ opacity: 0, y: -100}}
            transition={{ duration: 1.5}} 
            className="my-20 text-center text-4xl">Technologies</motion.h2>
        <motion.div whileInView={{opacity: 1, x: 0}}
            initial={{ opacity: 0, x: -100}}
            transition={{ duration: 1.5}} 
            className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl p-4 border-4 border-neutral-800">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl p-4 border-4 border-neutral-800">
                <RiNodejsLine className="text-7xl text-green-500"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl p-4 border-4 border-neutral-800">
                <BiLogoPython className="text-7xl text-yellow-600"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl p-4 border-4 border-neutral-800">
                <BiLogoPostgresql className="text-7xl text-sky-700"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(6)}
                initial="initial"
                animate="animate"
                className="rounded-2xl p-4 border-4 border-neutral-800">
                <SiJenkins className="text-7xl text-red-600"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl p-4 border-4 border-neutral-800">
                <BiLogoDocker className="text-7xl text-blue-700"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies