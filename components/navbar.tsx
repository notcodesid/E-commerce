import React from "react";
import { User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-primary text-primary-foreground">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold">Todos</h1>
      </div>
      <div className="flex space-x-4">
        <User className="h-5 w-5" />
      </div>
    </nav>
  );
}