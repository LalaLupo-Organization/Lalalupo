import classNames from "@/helpers/classNames"
import { useEffect, useRef } from "react"

type IconsType = "SuccessTickSquare" | "FailureSquare" | "AudioIcon" | "MobileTextBubble" | "DesktopTextBubble"

interface IconProps extends React.SVGAttributes<HTMLOrSVGElement> {
  name: IconsType
  className?: string
  square?: boolean
}

export const Icon: React.FC<IconProps> = ({ name, className = "", square = true, ...props }) => {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const svgElement = async () => await import(`../../../public/assets/icons/${name}.svg`)

    svgElement().then(svg => {
      svgRef!.current!.innerHTML = svg.default
    })
  }, [name])

  return <svg className={classNames(square ? "aspect-square" : "", className)} ref={svgRef} {...props}></svg>
}
