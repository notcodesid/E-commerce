 "use client"
import { Navbar } from "@/components/Navbar"
import { Sidebar } from '@/components/Sidebar';
import { CalendarSection } from '@/components/CalendarSection';
import  {MainContent} from '@/components/MainContent';

export default function App() {

  return (
    <div className="min-h-screen w-full text-foreground">
      <Navbar />
      <div className="flex">
        <Sidebar isOpen={false} onClose={function (): void {
          throw new Error('Function not implemented.');
        } } onLabelClick={function (label: string): void {
          throw new Error("Function not implemented.");
        } } />
        <MainContent/>
        <CalendarSection />
      </div>
    </div>
  );
}