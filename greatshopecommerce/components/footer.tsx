"use client";
import React from 'react'
import { Twitter, Instagram, Facebook } from 'lucide-react';
import { useRouter } from "next/navigation";

function Footer() {
  const router = useRouter();
  return (
    <footer className="bg-gray-900 text-white py-8 mt-auto">
        <div className="container mx-auto flex flex-col items-center">
            <div className="text-2xl font-bold mb-4">GreateShop</div>
            <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300">Home</a>
                <a href="#" className="hover:text-gray-300">Products</a>
                <a href="#" className="hover:text-gray-300">About Us</a>
                <a href="#" className="hover:text-gray-300">Contact Us</a>
            </div>
            <div className="flex space-x-4 mt-4">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <Twitter strokeWidth="1" className="cursor-pointer" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <Instagram strokeWidth="1" className="cursor-pointer" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <Facebook strokeWidth="1" className="cursor-pointer" />
                </a>
            </div>
        </div>
        <div className="text-center mt-8">
            &copy; 2024 GreateShop. All rights reserved.
        </div>
    </footer>
  )
}

export default Footer