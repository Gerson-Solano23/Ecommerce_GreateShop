"use client";
import UseProducts from '@/service/useProducts';
import React from 'react'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import Skeleton from './skeleton';
import { Product } from '@/interface/product';
import { Card, CardContent } from './ui/card';
import { Expand, ShoppingCart } from 'lucide-react';
import IconButton from '@/components/iconButton'
import { useRouter } from 'next/navigation';
function featuresProducts() {
  const router = useRouter();
  const { loading, result, error } = UseProducts();
  console.log("result", result);
  var products: Product[] = result?.data || [];
  console.log("products", products);
  return (
    <div className='max-w-6xl py-4 mx-auto sm:py-16 sm:px-24'>
      <h3 className='px-6 text-3xl sm:pb-8'>Products more sale</h3>
      <Carousel>
        <CarouselContent>
          {loading && (
            <Skeleton grid={3} />
          )}
          {result != null && (
            products.map((product: Product) => {

              return (
                <CarouselItem key={product.idProduct} className='md:basis-1/3 group'>
                  <div className='p-1'>
                    <Card className='py-4 border border-gray-200 shadow-none'>
                      <CardContent className='relative flex items-center justify-center px-6 py-2'>
                        <img src={product.img} alt={product.name} className='h-32 max-w-40' />
                        <div className='absolute w-full px- transition duration-200 opacity-0 group-hover:opacity-100 bottom-5'>
                          <div className='flex justify-between px-8'>      
                            <IconButton onClick={()=>router.push(`product/${product.name}`)} 
                            icon={<Expand size={20}/>}
                            className='text-gray-600'/>
                            <IconButton onClick={()=> console.log("Add Product", product.name)} 
                            icon={<ShoppingCart size={20}/>}
                            className='text-gray-600'/>
                           
                          </div>
                        </div>
                      </CardContent>
                      <div className='flex justify-center gap-4 px-8'>
                        <h3 className='text-lg font-bold'>{product.name}</h3>
                        <p className='text-gray-500'>${product.price}</p>
                      
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              )
            })
          )}
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext className='hidden sm:flex'/>
      </Carousel>
    </div>
  )
}

export default featuresProducts