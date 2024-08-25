import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus } from "lucide-react";

interface AddTodoProps {
  onAdd: (todo: { title: string; label: string }) => void;
}

export default function AddTodo({ onAdd }: AddTodoProps) {
  const [title, setTitle] = useState("");
  const [label, setLabel] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd({ title, label });
      setTitle("");
      setLabel("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <Input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Add new todo" 
        className="flex-grow"
      />
      <Select value={label} onValueChange={setLabel}>
        <SelectTrigger className="w-[120px]">
          <SelectValue placeholder="Label" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Coding">Coding</SelectItem>
          <SelectItem value="Reading">Reading</SelectItem>
          <SelectItem value="Basic todos">Basic todos</SelectItem>
          <SelectItem value="Projects pending">Projects pending</SelectItem>
        </SelectContent>
      </Select>
      <Button type="submit"><Plus className="w-4 h-4" /></Button>
    </form>
  );
}