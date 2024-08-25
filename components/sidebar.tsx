import React from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onLabelClick: (label: string) => void; 
}

export function Sidebar({ isOpen, onClose, onLabelClick }: SidebarProps) {
  const labels = ['Coding', 'Reading', 'Basic todos', 'Projects pending'];

  return (
    <div className={`${isOpen ? 'block' : 'hidden'} md:block w-full md:w-1/4 p-4 bg-muted fixed md:static top-0 left-0 h-screen z-50 overflow-y-auto`}>
      <div className="flex justify-between items-center mb-4 md:hidden">
        <h2 className="font-bold">Labels</h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-5 w-5" />
        </Button>
      </div>
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
