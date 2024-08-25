"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Sidebar } from "./Sidebar"


const SHEET_SIDES = ["left"] as const;

type SheetSideType = (typeof SHEET_SIDES)[number];

interface SheetSideProps {
  onLabelClick: (label: string) => void;
}

export default function SheetSide({ onLabelClick }: SheetSideProps) {

 
  return (
    <div className="grid grid-cols-1 gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="outline">{side}</Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <Sidebar onLabelClick={function (label: string): void {
              throw new Error("Function not implemented.");
            } } />
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}