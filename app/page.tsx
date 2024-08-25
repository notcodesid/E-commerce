import { Navbar } from "@/components/Navbar"
import { CalendarSection } from '@/components/CalendarSection';
import { MainContent } from '@/components/MainContent';

export default function App() {
  return (
    <div>
      <Navbar />
      <div>
        <MainContent />
       
      </div>
    </div>
  );
}