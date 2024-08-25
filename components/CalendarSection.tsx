import React from "react";
import { Calendar } from "@/components/ui/calendar";

export function CalendarSection() {
  return (
    <div className=" p-4">
      <Calendar className="rounded-md border" />
    </div>
  );
}