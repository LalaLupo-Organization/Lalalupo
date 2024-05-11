import Lottie from "lottie-react"
import React from "react"
import audiowave from "@/public/audiowave.json"
const AudioWave = () => {
  return <Lottie style={{ height: "150px", width: "100%" }} animationData={audiowave} loop={true} />
}

export default AudioWave
