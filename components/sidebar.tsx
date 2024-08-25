import React from "react";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  onLabelClick: (label: string) => void;
}

export default function Sidebar({ onLabelClick }: SidebarProps) {
  const labels = ['Coding', 'Reading', 'Basic todos', 'Projects pending'];

  return (
    <div className="hidden md:block w-1/4 p-4 bg-muted h-screen z-50 overflow-y-auto">
      {labels.map((label, index) => (
        <Button 
          key={index} 
          variant="outline" 
          className="w-full mb-2" 
          onClick={() => onLabelClick(label)}
        >
          {label}
        </Button>
      ))}
    </div>
  );
}