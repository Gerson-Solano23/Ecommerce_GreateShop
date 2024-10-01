import React from 'react'
import { Popover,PopoverContent, PopoverTrigger } from './ui/popover'
import { Menu } from 'lucide-react'
import Link from "next/link"
function MobileItems() {
  return (
    <Popover>
        <PopoverTrigger>
            <Menu />
        </PopoverTrigger>
        <PopoverContent className='flex flex-col gap-4'>
            <Link href="/products/laptops" className='block'>Laptops</Link>
            <Link href="/products/monitors" className='block'>Monitors</Link>
            <Link href="/products/keyboards" className='block'>Keyboards</Link>
            <Link href="/products/headphones" className='block'>Headphones</Link>
            <Link href="/products/memories" className='block'>Memories</Link>
            <Link href="/products/accessories" className='block'>Accessories</Link>
            <Link href="/products/phones" className='block'>Phones</Link>
        </PopoverContent>
    </Popover>
  )
}

export default MobileItems
