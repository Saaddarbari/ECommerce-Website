"use client"
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { eight} from "@/sanity/lib/queries";
import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  
  const [product,setProduct] = useState<Product[]>([])
  useEffect(()=>{
    async function FetchProduct() {
      const fetchData:Product[] = await client.fetch(eight)
      setProduct(fetchData) 
    }
    FetchProduct()
  },[])
  
  return (
    <main>
      <section className="m-auto flex w-full lg:w-[90%] xl:w-[1300px] md:max-w-[1280px] overflow-hidden h-[670px] max-sm:h-[500px]">
        <div>
          <div className="w-full">
            <Image
              alt="Saaddarbari"
              width="1440"
              height="1007"
              src="/scandinavian-interior-mockup-wall-decal-background 1.png"
              className=" max-sm:h-[30rem] "
            />
          </div>
          <div className="w-[557px] h-[337px] bg-[#FFF3E3] xl-hidden relative bottom-[27rem] left-[41rem] p-10 max-sm:p-2 max-sm:left-10 max-sm:bottom-[25rem] max-sm:w-[257px] max-sm:h-[320px]">
            <h1 className="tracking-wider font-semibold max-sm:text-[28px]">New Arrival</h1>
            <h1 className="font-bold text-[42px] max-sm:text-[22px] max-sm:mb-4 text-[#B88E2F] leading-[3.25rem] max-sm:leading-7">Discover Our <br />New Collection</h1>
            <p className="text-[16px] font-medium mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br />elit tellus, luctus nec ullamcorper mattis.</p>
            <button className="bg-[#B88E2F] px-12 py-4 max-sm:px-6 max-sm:py-[0.55rem] text-white font-medium max-sm:mr-7">
              BUY NOW
            </button>
          </div>
        </div>
      </section>

      <section className="m-auto mb-10 flex w-full lg:w-[90%] xl:w-[1300px] md:max-w-[1280px] overflow-hidden flex-col">
        <div className="text-center w-full">
          <h1 className="font-bold text-[32px] max-sm:text-[24px]">Browse The Range</h1>
          <p className="text-[#666666]  max-sm:text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="grid grid-rows-1 grid-cols-3  max-sm:gap-32 max-sm:mx-5 items-center  justify-center mt-10 max-sm:grid-rows-3 max-sm:grid-cols-1 px-[7.5rem] max-sm:px-[1.2rem] max-sm:mb-28 w-full">
          <div className="h-[470px] w-[316px] border border-none rounded-lg max-sm:h-[300px] max-sm:w-[280px] content-center">
            <div className="mb-5">
              <Image
                alt="Saaddarbari"
                width="382"
                height="480"
                src="/image 106.png"
              />

            </div>
            <span className="mx-[7rem] font-semibold text-[1.5rem] ">Dining</span>
          </div>
          <div className="h-[470px] w-[316px] border border-none rounded-lg max-sm:h-[300px] max-sm:w-[280px] content-center">
            <div className="mb-5">
              <Image
                alt="Saaddarbari"
                width="381"
                height="480"
                src="/image 100.png"
              />

            </div>
            <span className="mx-[7rem] font-semibold text-[1.5rem] ">Living</span>
          </div>
          <div className="h-[470px] w-[316px] border border-none rounded-lg max-sm:h-[300px] max-sm:w-[280px] content-center">
            <div className="mb-5">
              <Image
                alt="Saaddarbari"
                width="381"
                height="480"
                src="/image 101.png"
              />
            </div>
            <span className="mx-[7rem] font-semibold text-[1.5rem] ">Bedroom</span>
          </div>

        </div>

      

      </section>

      <section className="m-auto mb-10 flex w-full lg:w-[90%] xl:w-[1300px] md:max-w-[1280px] overflow-hidden flex-col">
        <div className="flex justify-center items-center">
          <h1 className="max-sm:ml-4 text-[32px] font-bold mt-5">Our Products</h1>
        </div>

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
                    <Link className="text-white" href={`/Products/${product._id}`}>Share</Link>
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


        <div className="w-full flex justify-center">
          <Link href={"/Shop"}><button className="px-4 py-[0.5rem] mx-10 mt-9 bg-none border border-[#B88E2F] text-[#B88E2F] w-[12rem] h-3rem rounded text-[15px]">
            Show more
          </button></Link>
        </div>
      </section>

      <section className="m-auto mb-10 flex w-full lg:w-[90%] xl:w-[1300px] md:max-w-[1280px] overflow-hidden flex-col">
        <div className="w-full bg-[#FCF8F3] h-[30rem] ">
          <div className="w-[31%] mt-[11rem] ml-[6rem] max-sm:hidden">
            <h1 className="text-[40px] font-bold max-sm:text-[30px] ">50+ Beautiful rooms
              inspiration</h1>
            <p className="font-medium text-[16px] ">Our designer already made a lot of beautiful <br />prototipe of rooms that inspire you</p>
            <div >
              <button className="px-4 py-[0.5rem] mt-5 font-semibold bg-[#B88E2F] border text-white rounded text-[15px]">
                Explore More
              </button>
            </div>
          </div>
          <div>
            <Image
              alt="Saaddarbari"
              width="304"
              height="482"
              src="/Rectangle 24.png"
              className="relative left-[38rem] bottom-[23.5rem] max-sm:left-[1.50rem] max-sm:top-[1rem] "
            />

          </div>
          <div className="max-sm:hidden">
            <Image
              alt="Saaddarbari"
              width="304"
              height="382"
              src="/Rectangle 25.png"
              className="relative left-[58rem] bottom-[51rem]"
            />
          </div>
          <div className="bg-white opacity-50 h-[125px] w-[267px] relative left-[2.50rem] bottom-[8.25rem] ">
          </div>
          <div className="max-sm:hidden">
            <span className="text-[1rem] text-gray-400 font-semibold px-2 py-3 relative right-[-41.25rem] top-[-62.25rem] ">01 -- Bedroom</span>
            <span className="text-[1.5rem] text-black font-semibold px-2 py-3 relative right-[-33.25rem] top-[-60.25rem] ">Inner Peace</span>
          </div>
          <div className="max-sm:hidden">
            <Image
              alt="Saaddarbari"
              width="34"
              height="32"
              src="/arrow.png"
              className="relative left-[50.50rem] bottom-[60.80rem]"
            />
          </div>
          <div className="xl:hidden">
            <div className="max-sm:w-full relative left-[3rem] bottom-[15.2rem]">
              <h1 className="font-bold max-sm:text-[20px] xl:hidden">50+ Beautiful rooms <br />
                inspiration</h1>
              <div >
                <button className="px-4 py-[0.5rem] mt-2 font-semibold bg-[#B88E2F] border text-white rounded text-[15px]">
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="m-auto mb-10 flex w-full lg:w-[90%] xl:w-[1300px] md:max-w-[1280px] overflow-hidden flex-col">
        <div>
          <h1 className="font-medium text-[20px] text-zinc-500 text-center">Share your setup with</h1>
          <h1 className="max-sm:ml-4 text-[32px] font-bold text-center">#FuniroFurniture</h1>
        </div>
        <div className="w-full mt-4">
          <Image
            alt="Saaddarbari"
            width="1440"
            height="1007"
            src="/section.png"
          />
        </div>
      </section>

    </main>
  );
}
