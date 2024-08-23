import Link from 'next/link'
import {  User, ShoppingCart } from 'lucide-react'


export default function Navbar() {

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                SportsGear
              </Link>
            </div>
          </div>
          <div className="hidden sm:flex items-center">
            <Link href="/account" className="ml-4 p-2">
              <User className="h-6 w-6" />
              <span className="sr-only">User account</span>
            </Link>
            <Link href="/cart" className="ml-4 p-2">
              <ShoppingCart className="h-6 w-6" />
              <span className="sr-only">Shopping cart</span>
            </Link>
          </div>
          <div className="flex items-center sm:hidden">
            <Link href="/cart" className="p-2">
              <ShoppingCart className="h-6 w-6" />
              <span className="sr-only">Shopping cart</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}