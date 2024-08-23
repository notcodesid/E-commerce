 "use client"
import React, { useState } from 'react';
import { Navbar } from "@/components/navbar"
import { Sidebar } from '@/components/sidebar';
import { CalendarSection } from '@/components/CalendarSection';
import  {MainContent} from '@/components/MainContent';

export default function App() {

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <MainContent/>
        <CalendarSection />
      </div>
    </div>
  );
}