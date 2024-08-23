import React from "react";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

export function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-primary text-primary-foreground">
      <h1 className="text-2xl font-bold">Todos</h1>
      <div className="flex space-x-4">
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
          <span className="sr-only">User profile</span>
        </Button>
      </div>
    </nav>
  );
}