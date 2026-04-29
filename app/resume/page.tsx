import { notFound } from "next/navigation"
import ResumeView from "./resume-view"

export default function ResumePage() {
  if (process.env.NODE_ENV !== "development") {
    notFound()
  }

  return <ResumeView />
}
