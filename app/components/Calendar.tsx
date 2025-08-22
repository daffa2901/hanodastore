"use client"
import * as React from "react"
import { Calendar } from "@/components/ui/calendar"

export function Calendar2() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  console.log("Selected date:", date);

  return (
    <div className="flex justify-center">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow-sm"
        captionLayout="dropdown"
      />
    </div>
  )
}

export default Calendar2
