import { Button } from "@/components/ui/button"
import { ChevronDown } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Categories = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">
        Categories
        <ChevronDown className="ml-2 h-4 w-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem>Category 1</DropdownMenuItem>
      <DropdownMenuItem>Category 2</DropdownMenuItem>
      <DropdownMenuItem>Category 3</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
)

export default Categories
