import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tag, Trash2 } from "lucide-react";
import { AddTodo } from "./AddTodo";
import { Sidebar } from "./Sidebar"; // Import Sidebar

interface Todo {
  id: number;
  title: string;
  label: string;
}

export function MainContent() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null); // State for selected label

  const addTodo = (newTodo: Omit<Todo, 'id'>) => {
    const todo = { id: todos.length + 1, ...newTodo };
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleLabelClick = (label: string) => {
    setSelectedLabel(label);
  };

  const filteredTodos = todos.filter(todo => {
    const matchesSearch = todo.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLabel = selectedLabel ? todo.label === selectedLabel : true;
    return matchesSearch && matchesLabel;
  });

  return (
    <div className="flex">
      {/* Sidebar Component */}
      <Sidebar 
        onLabelClick={handleLabelClick} // Pass label click handler
      />

      <div className="w-1/2 p-4">
        {/* Search Input */}
        <Input 
          type="search" 
          placeholder="Search" 
          className="mb-4" 
          value={searchQuery} 
          onChange={handleSearchChange} 
        />
        
        {/* Add Todo Component */}
        <AddTodo onAdd={addTodo} />

        {/* Display Filtered Todos */}
        <div className="mt-4 space-y-4">
          {filteredTodos.map((todo) => (
            <Card key={todo.id}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="flex items-center justify-between w-full">
                  <CardTitle className="text-sm font-medium">{todo.title}</CardTitle>
                  <div className="flex items-center space-x-2">
                    {todo.label && (
                      <Badge variant="secondary">
                        <Tag className="w-3 h-3 mr-1" />
                        {todo.label}
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full" 
                  onClick={() => deleteTodo(todo.id)}
                  variant="destructive"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Complete the task
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
