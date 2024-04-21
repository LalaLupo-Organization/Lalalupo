type IconsType = "SuccessTickSquare" | "FailureSquare" | "AudioIcon" | "MobileTextBubble" | "DesktopTextBubble"

export interface IconProps extends React.SVGAttributes<HTMLOrSVGElement> {
  name: IconsType
  className?: string
  square?: boolean
}
