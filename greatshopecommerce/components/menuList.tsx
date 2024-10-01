"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Laptops",
    href: "/products/laptops",
    description:
      "Laptops de ultima generacion",
  },
  {
    title: "Monitors",
    href: "/products/monitors",
    description:
      "Monitores de alta calidad y resolucion HD",
  },
  {
    title: "Keyboards",
    href: "/products/keyboards",
    description:
      "Los teclados mas comodos y con mejor calidad",
  },
  {
    title: "Headphones",
    href: "/products/headphones",
    description: "El mejor sonido para tus oidos",
  },
  {
    title: "Memories",
    href: "/products/memories",
    description:
      "Almacena tus archivos de manera segura y rapida",
  },
  {
    title: "Accessories",
    href: "/products/accessories",
    description:
      "Obten los mejores accesorios para tu computadora y mas",
  },
  {
    title: "Phones",
    href: "/products/phones",
    description:
      "Celulares de ultima generacion con las mejores camaras",
  }
]

const  MenuList = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                 
                    <div className="mb-2 mt-4 text-lg font-medium">
                      IT Products
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      The best products for your pc and more
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/shop" title="Store">
                Your products
              </ListItem>
              <ListItem href="/offers" title="Offers">
                The best offers
              </ListItem>
          
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default MenuList;