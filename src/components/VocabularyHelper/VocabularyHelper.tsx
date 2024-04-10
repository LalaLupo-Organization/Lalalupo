import React from "react"
import { v4 as uuid } from "uuid"
export default function VocabularyHelper({ data }: { data: string[] }) {
  return (
    <div className="p-4 w-full border-yellow-300 bg-yellow-50 rounded-lg mt-4">
      <h2 className="font-fredoka text-yellow-700">VOCABULARY</h2>
      {data.map(item => {
        return (
          <p key={uuid()} className="ml-4 ">
            {item}
          </p>
        )
      })}
    </div>
  )
}
