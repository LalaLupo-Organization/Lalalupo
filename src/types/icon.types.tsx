type IconsType =
  | "SuccessTickSquare"
  | "FailureSquare"
  | "AudioIcon"
  | "MobileTextBubble"
  | "DesktopTextBubble"
  | "AccentedLettersArrow"
  | "PlayAudio"
  | "SlowAudio"
  | "Mic"

export interface IconProps extends React.SVGAttributes<HTMLOrSVGElement> {
  name: IconsType
  className?: string
  square?: boolean
}
