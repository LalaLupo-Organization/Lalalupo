import { ButtonHTMLAttributes } from "react"
import { IconProps } from "./icon.types"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconProps["name"]
}

export interface AudioBubbleProps {
  imageClassName?: string
}
