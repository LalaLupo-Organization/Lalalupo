import loader from "@/public/loader.json"
import Lottie from "lottie-react"

export const Loader = () => {
  return <Lottie animationData={loader} loop={true} style={{ height: "90px", position: "relative", bottom: "30px" }} />
}
