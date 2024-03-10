'use client'


import { useInView, motion } from "framer-motion"
import { useRef} from 'react'
const phrases = [
    "It is a long established fact",
    "that a reader will be distracted",
    "by the readable content of a page",
    "when looking at its layout",
]
export default function index(){


    return(

        <div className = "flex items-center flex-col my-32 gap-[20vw] ">
            <div className = "h-[50vh]" />
            <MaskText/>
            <MaskText/>
            <MaskText />

        </div>
    )
}

export function MaskText(){

    const body = useRef(null);

    //once: once in view, useview will stop observing
    //-75 margin, activates when it is 75% in view
    const isInView = useInView(body, {once: true, margin: "-50%"})


    //overflow hidden. hids children. 
    //y is initially set to 100% and will be set to 0 once it is in view
    //
    const animation = {
        initial:{y:"100%"},
        enter: i => ({y:"0", transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i}})
    }

    return(
        <div ref={body} className = "text-[5vw]">
            {
                phrases.map((phrase, index) =>{
                    return <div key={index} className = "margin-0 font-[700] overflow-hidden">
                        <motion.p custom={index} variants={animation} initial="initial" animate={isInView ? "enter" : ""}>{phrase}</motion.p>
                    </div>
                })
                
            }
        </div>
    )
}