import { Button } from "@/components/ui/button"

const FeatureCard = ({ title }: { title: string }) => (
  <div className="border rounded-lg p-4 flex flex-col items-center justify-between">
    <h3 className="text-lg font-medium mb-4">{title}</h3>
    <Button>Click here</Button>
  </div>
)

export default FeatureCard