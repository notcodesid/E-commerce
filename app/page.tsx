"use client"
import { useState } from 'react'
import { Menu, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Navbar from '@/components/navbar'
import Sidebar from '@/components/sidebar'
import FeatureCard from '@/components/featureCard'
import Categories from '@/components/categories'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <nav>
          <Navbar />
          <div className="container mx-auto flex justify-between items-center">
            <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <Sidebar />
              </SheetContent>
            </Sheet>
          </div>
        </nav>

        <div className="flex-1 container mx-auto p-4 flex">
          <aside className="hidden lg:block w-1/4 mr-4">
            <Sidebar />
          </aside>

          <main className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0">
              <div className="relative w-full sm:w-auto">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input type="search" placeholder="Search" className="pl-8 w-full sm:w-[300px]" />
              </div>
              <Categories />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard title="Feature 1" />
              <FeatureCard title="Feature 2" />
              <FeatureCard title="Feature 3" />
              <FeatureCard title="Feature 4" />
              <FeatureCard title="Feature 5" />
              <FeatureCard title="Feature 6" />
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
