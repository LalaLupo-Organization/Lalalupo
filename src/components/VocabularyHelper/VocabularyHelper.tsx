import { v4 as uuid } from "uuid"
export default function VocabularyHelper({ data }: { data: string[] }) {
  return data.length ? (
    <div className="p-4 w-full border-yellow-300 bg-vocabulary rounded-lg mt-8 sm:mt-12">
      <h2 className="font-semibold text-vocabulary_heading">VOCABULARY</h2>
      {data.map(item => {
        return (
          <p key={uuid()} className="ml-4 text-vocabulary_text ">
            {item}
          </p>
        )
      })}
    </div>
  ) : null
}
