import classNames from "@/helpers/classNames";
import { useEffect, useRef } from "react";

type IconsType = "SuccessTickSquare" | "FailureSquare";

interface IconProps extends React.SVGAttributes<HTMLOrSVGElement> {
  name: IconsType;
  className: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  className = "",
  ...props
}) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svgElement = async () =>
      await import(`../../../public/assets/icons/${name}.svg`);

    svgElement().catch((e) => {
      console.error("<strong>On loading the SVG</strong>", e);
    });

    svgElement().then((svg) => {
      svgRef!.current!.innerHTML = svg.default;
    });
  }, [name]);

  return (
    <svg
      className={classNames("aspect-square", className)}
      ref={svgRef}
      {...props}
    ></svg>
  );
};