import Lottie from "lottie-react";

import loader from "@/public/loader.json";
export const Loader = () => {
  return (
    <Lottie
      animationData={loader}
      loop={true}
      style={{ height: "90px", position: "relative", bottom: "30px" }}
    />
  );
};
