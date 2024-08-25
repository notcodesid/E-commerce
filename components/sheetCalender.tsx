import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Calendar } from "./ui/calendar"

export default function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Calendar</Button>
      </SheetTrigger>
      <SheetContent>
        <Calendar />
      </SheetContent>
    </Sheet>
  )
}
