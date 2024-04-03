import classNames from "@/helpers/classNames";
import { useEffect, useRef } from "react";

type IconsType = "SuccessTickSquare" | "FailureSquare";
type ColorsType = "white" | "black";

interface IconProps extends React.SVGAttributes<HTMLOrSVGElement> {
  name: IconsType;
  color?: ColorsType;
  className: string;
}

const replaceColor = (svgString: string, newColor: string) => {
  const regex = /fill="#[A-Fa-f0-9]{6}"/g;
  const replacement = `fill="var(${newColor})"`;
  return svgString.replace(regex, replacement);
};

export const Icon: React.FC<IconProps> = ({
  name,
  color = "white",
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
      svgRef!.current!.innerHTML = replaceColor(svg.default, color);
    });
  }, [name, color]);

  return (
    <svg
      className={classNames("aspect-square", className)}
      ref={svgRef}
      {...props}
    ></svg>
  );
};
