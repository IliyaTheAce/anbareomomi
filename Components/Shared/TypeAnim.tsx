'use client'

import { TypeAnimation } from "react-type-animation"

export default function TypeAnim({words} : {words: any}){
    return       <TypeAnimation
    sequence={words}
    speed={50}
    repeat={Infinity}
    className="text"
  />
}