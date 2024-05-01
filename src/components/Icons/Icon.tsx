import classNames from "@/helpers/classNames"
import { IconProps } from "@/types/icon.types"
import { useEffect, useRef } from "react"
export const Icon: React.FC<IconProps> = ({ name, className = "", square = true, ...props }) => {
  const svgRef = useRef<SVGSVGElement>(null)

  // useEffect(() => {
  //   const svgElement = async () => await import(`../../../public/assets/icons/${name}.svg`)

  //   svgElement().then(svg => {
  //     svgRef!.current!.innerHTML = svg.default
  //   })
  // }, [name])
  useEffect(() => {
    const loadSvg = async () => {
      try {
        const svgModule = await import(`../../../public/assets/icons/${name}.svg`)
        const svgContent = svgModule.default
        if (svgRef.current) {
          while (svgRef.current.firstChild) {
            svgRef.current.removeChild(svgRef.current.firstChild)
          }
          svgRef.current.insertAdjacentHTML("beforeend", svgContent)
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error("Error loading SVG:", error)
      }
    }

    loadSvg()
  }, [name])

  return <svg className={classNames(square ? "aspect-square" : "", className)} ref={svgRef} {...props}></svg>
}
