"use client"
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { allProd } from "@/sanity/lib/queries";
export default function Shop() {
  const [product,setProduct] = useState<Product[]>([])
    useEffect(()=>{
      async function FetchProduct() {
        const fetchData:Product[] = await client.fetch(allProd)
        setProduct(fetchData) 
      }
      FetchProduct()
    },[])
  return (
    <main>
    <section className="m-auto flex w-full lg:w-[90%] xl:w-[1300px] md:max-w-[1280px] overflow-hidden">
        <div>
        <Image
                alt="Saaddarbari"
                width="1440"
                height="416"
                src="/Rectangle 1.png"
                className="opacity-50 blur-[2px] h-full"
              />
              <span className="relative bottom-[14rem] left-[35.7rem] text-[3rem] font-semibold text-black max-sm:bottom-[6rem] max-sm:left-[8rem] max-sm:text-[2rem]">Shop</span>
              <span className="relative top-[-12rem] right-[-28.3rem] text-[1.5rem] font-semibold text-black max-sm:top-[-4rem] max-sm:right-[-3rem] max-sm:text-[1rem]">Home &gt;<span className="font-light">Shop</span></span>

              </div>
    </section>

    <section className="m-auto flex w-full lg:w-[90%] xl:w-[1300px] md:max-w-[1280px] overflow-hidden">
       <div className="w-full bg-[#FCF8F3] h-[5rem] flex justify-between "> 
        <div className="flex items-center">
          <div className="flex">
        <Image 
            alt="product"
            width="19" 
            height="15"
            src="/Vector (2).png"
            />
            <span className="font-medium ml-3">Filter</span>
            <Image 
            alt="product"
            width="19" 
            height="10"
            src="/Vector (3).png"
            className="ml-8"
            />
            <Image 
            alt="product"
            width="19" 
            height="10"
            src="/Vector (4).png"
            className="ml-8 "
            />
           
        </div>
         <div className="w-[0.1rem] h-12 bg-black ml-5 max-sm:hidden"></div>
         <h1 className="ml-5 max-sm:hidden">Showing 1&#8722;16 of 32 results</h1>
         </div>
         <div className="flex items-center mr-14">
         <div>
          <span className="mx-4 font-medium">Show</span>
         <input type="number" placeholder="1" className="pr-1 pl-[1.25rem] py-2 bg-white text-black w-[2.75rem]"/>
         </div>
         <div>
          <span className="mx-4 font-medium">Short by</span>
         <input type="text" placeholder="Default" className="pr-1 pl-[1.25rem] py-2 bg-white text-black w-[9rem]"/>
         </div>
         </div>
        </div>
    </section>

    <section className="m-auto mb-10 flex w-full lg:w-[90%] xl:w-[1300px] md:max-w-[1280px] overflow-hidden flex-col">
    <div className="grid grid-rows-1 gap-y-[1rem] max-sm:gap-y-[2rem]	mr-10 ml-8 max-sm:mx-5 grid-cols-4  items-center justify-center mt-10 max-sm:grid-rows-4 max-sm:grid-cols-2 px-[7.5rem] max-sm:px-0 w-full ">
    {product.map((product) =>(
       <div key={product._id}>   
       <Link href={`/Products/${product._id}`}>
       <div className="sm:w-60 xl:h-[20rem] xs:w-52 xs:h-44 w-36 max-sm:h-72 bg-[#F5F5F5] relative group">
       {product.productImage && (
                <Image
                   src={urlFor(product.productImage).url()}
                   alt="image"
                   width="600"
                height="600"
                className="w-full h-[70%] object-cover"
                 />
            )}

              <div className="ml-2 mt-2">
                <span className="font-medium xs:text-base text-[1rem]">{product.title}</span>
                <br />
                <div className="xs:text-base text-sm mt-2">
                  <span className="text-[#898989]">Stylish cafe chair</span>
                  <br />
                  <span className="text-[#3A3A3A] text-sm font-medium">Rs {product.price}</span>
                </div>
              </div>

              <div className="absolute left-0 top-0 w-full h-full bg-[#3A3A3A]/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center">
                <button
                  className="inline-flex items-center justify-center text-sm max-sm:px-4 max-sm:py-1  px-8   py-2  text-[#B88E2F] text-[2rem] font-bold bg-gray-100 border border-[#B88E2F] rounded transition-colors"
                  type="button"
                >
                  View Product
                </button>

                <div className="flex justify-center gap-5 mt-4">
                  <div className="flex gap-1 items-center hover:cursor-pointer">
                    <Image alt="icon" loading="lazy" width="15" height="15" src="/Vector (9).png" />
                    <Link className="text-white" href="/Products/Product01">Share</Link>
                  </div>
                  <div className="flex gap-1 items-center hover:cursor-pointer">
                    <Image alt="icon" loading="lazy" width="15" height="15" src="/Vector (10).png" />
                    <Link className="text-white" href="/Camparison">Compare</Link>
                  </div>
                  <div className="flex gap-1 items-center hover:cursor-pointer">
                    <Image alt="icon" loading="lazy" width="15" height="15" src="/Vector (11).png" />
                    <Link className="text-white" href="/">Like</Link>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          </div>
       ))}
        </div>
        <div className="w-full flex justify-center gap-5">
        <button className="px-4 py-2 hover:bg-[#B88E2F] hover:text-white mt-12  bg-[#FCF8F3] border-none  text-black rounded text-[15px]">
            1
        </button>
        <button className="px-4 py-2  hover:bg-[#B88E2F] hover:text-white mt-12 bg-[#FCF8F3] border-none  text-black rounded text-[15px]">
            2
        </button>
        <button className="px-4 py-2 hover:bg-[#B88E2F] hover:text-white mt-12 bg-[#FCF8F3] border-none  text-black rounded text-[15px]">
            3
        </button>
        <button className="px-4 py-2 hover:bg-[#B88E2F] hover:text-white mt-12 bg-[#FCF8F3] border-none text-black rounded text-[15px]">
            Next
        </button>
        </div>
    </section>

    <section className="m-auto flex w-full lg:w-[90%] xl:w-[1300px] md:max-w-[1280px] overflow-hidden">
    <div className="w-full bg-[#FCF8F3] h-[10rem] max-sm:h-72 grid grid-cols-4 grid-rows-1 max-sm:grid-cols-2 max-sm:grid-rows-2">  
      <div className="relative top-[3rem] left-8 max-sm:left-1">
       <Image
                alt="Saaddarbari"
                width="60"
                height="60"
                src="/Vector (5).png"
              />
              <div className="relative left-[4rem] top-[-2.75rem]">
        <span className="font-semibold">High Quality</span><br />
        <span className="text-[#898989]">crafted from top materials</span>
        </div>
        </div>
      <div className="relative top-[3rem] left-8 max-sm:left-1">
       <Image
                alt="Saaddarbari"
                width="60"
                height="60"
                src="/Vector (6).png"
              />
              <div className="relative left-[4rem] top-[-2.75rem]">
        <span className="font-semibold ">Warranty Protection</span><br />
        <span className="text-[#898989]">Over 2 years</span>
        </div>
        </div>
      <div className="relative top-[3rem] left-8 max-sm:left-1">
       <Image
                alt="Saaddarbari"
                width="60"
                height="60"
                src="/Vector (7).png"
              />
              <div className="relative left-[4rem] top-[-2.75rem]">
        <span className="font-semibold">Free Shipping</span><br />
        <span className="text-[#898989]">Order over 150 $</span>
        </div>
        </div>
      <div className="relative top-[3rem] left-8 max-sm:left-1">
       <Image
                alt="Saaddarbari"
                width="60"
                height="60"
                src="/Vector (8).png"
              />
              <div className="relative left-[4rem] top-[-2.75rem]">
        <span className="font-semibold">24 / 7 Support</span><br />
        <span className="text-[#898989]">Dedicated support</span>
        </div>
        </div>
      
    </div>
    </section>
    </main>
  );
}
 

   