import { Button } from "@/components/ui/button"
import { Progressbar } from "@/components/progressbar"

const Sidebar = () => (
  <div className="w-full h-full flex flex-col space-y-4 p-4 bg-background">
    <h2 className="text-lg font-semibold">Sidebar</h2>
    <Button variant="outline" className="w-full justify-start">Option 1</Button>
    <Button variant="outline" className="w-full justify-start">Option 2</Button>
    <Button variant="outline" className="w-full justify-start">Option 3</Button>
    <Button variant="outline" className="w-full justify-start">Option 4</Button>

    <Progressbar />
  </div>
)

export default Sidebar
