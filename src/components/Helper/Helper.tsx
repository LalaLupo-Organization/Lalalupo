import classNames from "@/helpers/classNames"
import { Helper } from "@/types/lesson.types"
import { v4 as uuid } from "uuid"
export default function Helpers({ data }: { data: Helper[] }) {
  const isTip = (type: Helper["type"]) => type === "Tip"
  return data.length ? (
    <div className="mt-8 sm:mt-12 w-full flex flex-col gap-4">
      {data
        ?.slice()
        .sort((a, b) => {
          if (a.type === "Tip") return -1
          if (b.type === "Tip") return 1
          return 0
        })
        .map(({ type, values }) => (
          <div key={uuid()} className={classNames("p-4 rounded-lg", isTip(type) ? "bg-tip" : "bg-vocabulary")}>
            <h2 className={classNames("font-semibold uppercase", isTip(type) ? "text-tip_heading" : "text-vocabulary_heading")}>
              {isTip(type) ? "HELPFUL TIP" : "VOCABULARY"}
            </h2>
            {values?.map(item => {
              return (
                <p key={uuid()} className="ml-4 text-vocabulary_text ">
                  {item}
                </p>
              )
            })}
          </div>
        ))}
    </div>
  ) : null
}
