import React from "react";
import { Calendar } from "@/components/ui/calendar";

export default function CalendarSection() {
  return (
    <div className="hidden md:block p-4">
      <Calendar className="rounded-md border" />
    </div>
  );
}