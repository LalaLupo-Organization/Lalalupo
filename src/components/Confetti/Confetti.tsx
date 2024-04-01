import Lottie from "lottie-react";

import bubbles from "@/public/confetti.json";
export const Confetti = () => {
  return (
    <Lottie
      className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square h-[65%] sm:h-[80%] z-[100]"
      animationData={bubbles}
      loop={true}
      style={{
        position: "fixed",
      }}
    />
  );
};
