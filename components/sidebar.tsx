import React from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export function Sidebar() {
  return (
    <div className="w-1/4 p-4 bg-muted">
      <h2 className="font-bold mb-4">My Projects</h2>
      {['Coding', 'Reading', 'Basic todos', 'Projects pending'].map((option, index) => (
        <Button key={index} variant="outline" className="w-full mb-2">{option}</Button>
      ))}
      <h3 className="font-bold mt-4 mb-2">Progress bar</h3>
      <Progress value={33} className="w-full" />
    </div>
  );
}