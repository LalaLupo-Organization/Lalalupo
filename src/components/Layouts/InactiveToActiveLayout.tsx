import React from "react"

export default function InActiveToActiveLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="w-full sm:w-fit">{children}</div>
    </>
  )
}
