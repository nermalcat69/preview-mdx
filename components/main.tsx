import { lastUpdated } from "@/components/markdownPreviewer/last-updated"
import { markdownCode } from "@/components/markdownPreviewer/markdown-code"
import { Preview } from "@/components/markdownPreviewer/preview"
import  Info  from "@/components/globals/info"



export function Main() {
  return (
    <section className="py-2">
      <div>{lastUpdated()}</div>
      <div className="border border-gray-200 mt-8 p-6  rounded-md grid grid-cols-2 gap-6 my-8">
        <div className=" ">{markdownCode()}</div>
        <div className="">{Preview()}</div>
      </div>
      <Info />
    </section>
  )
}
