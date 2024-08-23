import { Progress } from "@/components/ui/progress"
export function Progressbar() {

    return (
        <>
            <div className="mt-auto">
                <h3 className="text-sm font-medium mb-2">Progress bar</h3>
                <Progress value={33} className="w-full" />
            </div>
        </>
    )
}