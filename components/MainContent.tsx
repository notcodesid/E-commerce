import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tag, Trash2 } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { AddTodo } from "./AddTodo";

interface Todo {
  id: number;
  title: string;
  label: string;
}

export function MainContent() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: "Feature 1", label: "Coding" },
    { id: 2, title: "Feature 2", label: "" },
    { id: 3, title: "Feature 3", label: "" },
    { id: 4, title: "Feature 4", label: "" },
  ]);

  const addTodo = (newTodo: Omit<Todo, 'id'>) => {
    const todo = { id: todos.length + 1, ...newTodo };
    setTodos([...todos, todo]);
    toast({
      title: "Todo added",
      description: `"${newTodo.title}" has been added to your list.`,
    });
  };

  const updateTodoLabel = (id: number, newLabel: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, label: newLabel } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    const todoToDelete = todos.find(todo => todo.id === id);
    setTodos(todos.filter(todo => todo.id !== id));
    if (todoToDelete) {
      toast({
        title: "Task completed",
        description: `"${todoToDelete.title}" has been removed from your list.`,
      });
    }
  };

  return (
    <div className="w-1/2 p-4">
      <Input type="search" placeholder="Search" className="mb-4" />
      <AddTodo onAdd={addTodo} />
      <div className="mt-4 space-y-4">
        {todos.map((todo) => (
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
  );
}