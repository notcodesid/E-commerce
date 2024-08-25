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
        <MainContent/>
        <CalendarSection />
      </div>
    </div>
  );
}