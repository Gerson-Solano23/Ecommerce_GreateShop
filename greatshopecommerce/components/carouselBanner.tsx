"use client";
import { useRouter } from 'next/navigation';
import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import { Card, CardContent } from './ui/card';
import Autoplay from "embla-carousel-autoplay"
export const dataInfoCarousel = [
    {
        id: 1,
        title: "Las mejores ofertas de la semana",
        description: "¡Descubre nuestras increíbles ofertas de la semana y aprovecha las mejores promociones! No te pierdas esta oportunidad para disfrutar de nuestros productos a un precio excepcional.",
        image: "/images/banner1.jpg",
        link: "/product/1"
    },
    {
        id: 2,
        title: "Envío gratis a todo todo el país",
        description: "¡Envío gratis a todo el país aplicable a compras mayores a $50.000! No te pierdas esta oportunidad para disfrutar de nuestros productos sin gastar nada más.",
        image: "/images/banner2.jpg",
        link: "/product/2"
    },
    {
        id: 3,
        title: "Elegí tu producto favorito",
        description: "Para que tu vida sea más fácil y cómoda",
        image: "/images/banner2.jpg",
        link: "/product/2"
    },
    {
        id: 4,
        title: "Los mejores productos para tu vida",
        description: "¡Descubre una amplia gama de productos de alta calidad para tu vida diaria! Desde electrónicos avanzados hasta artículos de belleza y más, tenemos todo lo que necesitas para una vida más cómoda y feliz.",
        image: "/images/banner2.jpg",
        link: "/product/2"
    },
    
]

function carouselBanner() {
    const router = useRouter();
  return (
    <div className='bg-teal-600 dark:bg-teal-900'>
    <Carousel className='w-full max-w-4xl mx-auto'
        plugins={[
            Autoplay({
                delay: 3500,
            })
        ]}
    >
        <CarouselContent>
            {dataInfoCarousel.map((item) => (
                <CarouselItem key={item.id} onClick={() => router.push(item.link)} className='cursor-pointer'> 
                    <div>
                        <Card className='shadow-none border-none bg-transparent'>
                        <CardContent className='flex flex-col items-center justify-center p-2 text-center'>
                            <h4 className='text-2xl'>{item.title}</h4>
                            <p className='text-sm'>{item.description}</p>
                        </CardContent>

                        </Card>
                            
                    </div>
                </CarouselItem>
                ))}
        </CarouselContent>
    </Carousel>
    </div>
  )
}

export default carouselBanner