import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
    <section className="m-auto flex w-full lg:w-[90%] xl:w-[1300px] md:max-w-[1280px] overflow-hidden h-[670px] max-sm:h-[200px]">
      <div>
     <div className="w-full">
     <Image
                alt="Saaddarbari"
                width="1440"
                height="1007"
                src="/scandinavian-interior-mockup-wall-decal-background 1.png"
              />
      </div>
      <div className="w-[557px] h-[337px] bg-[#FFF3E3] xl-hidden relative bottom-[27rem] left-[41rem] p-10 max-sm:p-2 max-sm:left-0 max-sm:bottom-[10rem] max-sm:w-[257px] max-sm:h-[152px]">
        <h1 className="tracking-wider font-semibold">New Arrival</h1>
        <h1 className="font-bold text-[42px] max-sm:text-[22px] max-sm:mb-4 text-[#B88E2F] leading-[3.25rem] max-sm:leading-7">Discover Our <br />New Collection</h1>
        <p className="text-[16px] max-sm:hidden font-medium mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br />elit tellus, luctus nec ullamcorper mattis.</p>
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

      <div className="grid grid-rows-1 grid-cols-3  max-sm:gap-2 max-sm:mx-5 items-center  justify-center mt-10 max-sm:grid-rows-3 max-sm:grid-cols-1 px-[7.5rem] w-full max-sm:hidden">
        <div className="h-[470px] w-[316px] border border-none rounded-lg max-sm:h-[200px] max-sm:w-[160px] content-center">
        <div className="mb-5">
        <Image
                alt="Saaddarbari"
                width="381"
                height="480"
                src="/image 106.png"
              />
              
        </div>
        <span className="mx-[7rem] font-semibold text-[1.5rem]  max-sm:hidden">Dining</span>
        </div> 
        <span className="mx-[7rem] font-semibold text-[1.5rem]  xl:hidden">Dining</span> 
        <div className="h-[470px] w-[316px] border border-none rounded-lg max-sm:h-[200px] max-sm:w-[160px] content-center">
        <div className="mb-5">
        <Image
                alt="Saaddarbari"
                width="381"
                height="480"
                src="/image 100.png"
              />
               
        </div>
        <span className="mx-[7rem] font-semibold text-[1.5rem]  max-sm:hidden">Living</span>
        </div>  
         <span className="mx-[7rem] font-semibold text-[1.5rem] xl:hidden">Living</span>
        <div className="h-[470px] w-[316px] border border-none rounded-lg max-sm:h-[200px] max-sm:w-[160px] content-center">
        <div className="mb-5">
        <Image
                alt="Saaddarbari"
                width="381"
                height="480"
                src="/image 101.png"
              />
               
        </div>
        <span className="mx-[7rem] font-semibold text-[1.5rem]  max-sm:hidden">Bedroom</span>
        </div>  
       <span className="mx-[7rem] font-semibold text-[1.5rem]  xl:hidden">Bedroom</span>

      </div>

      <div className="mt-10 max-sm:grid-rows-3 max-sm:grid-cols-1  w-full xl:hidden">
        <div className="h-[470px] w-[316px] border border-none rounded-lg max-sm:h-[200px] max-sm:w-[160px] content-center">
        <div className="mb-5">
        <Image
                alt="Saaddarbari"
                width="381"
                height="480"
                src="/image 106.png"
              />
              
        </div>
        <span className="mx-[7rem] font-semibold text-[1.5rem]   max-sm:hidden">Dining</span>
        </div> 
        <span className="mx-[7rem] font-semibold text-[2rem] relative left-[5.25rem] bottom-[8rem] xl:hidden">Dining</span> 
        <div className="h-[470px] w-[316px] border border-none rounded-lg max-sm:h-[200px] max-sm:w-[160px] content-center">
        <div className="mb-5">
        <Image
                alt="Saaddarbari"
                width="381"
                height="480"
                src="/image 100.png"
              />
               
        </div>
        <span className="mx-[7rem] font-semibold text-[1.5rem]  max-sm:hidden">Living</span>
        </div>  
         <span className="mx-[7rem] font-semibold text-[2rem] relative left-[5.25rem] bottom-[8rem] xl:hidden">Living</span>
        <div className="h-[470px] w-[316px] border border-none rounded-lg max-sm:h-[200px] max-sm:w-[160px] content-center">
        <div className="mb-5">
        <Image
                alt="Saaddarbari"
                width="381"
                height="480"
                src="/image 101.png"
              />
               
        </div>
        <span className="mx-[7rem] font-semibold text-[1.5rem]  max-sm:hidden">Bedroom</span>
        </div>  
       <span className="mx-[7rem] font-semibold text-[2rem] relative left-[5.25rem] bottom-[8rem]  xl:hidden">Bedroom</span>

      </div>

    </section>

    <section className="m-auto mb-10 flex w-full lg:w-[90%] xl:w-[1300px] md:max-w-[1280px] overflow-hidden flex-col">
      <div className="flex justify-center items-center">
        <h1 className="max-sm:ml-4 text-[32px] font-bold mt-5">Our Products</h1>
      </div>
      <div className="grid grid-rows-1 gap-y-[1rem] max-sm:gap-y-[4rem]	mr-10 ml-8 max-sm:mx-5 grid-cols-4  max-sm:gap-2 items-center justify-center mt-10 max-sm:grid-rows-4 max-sm:grid-cols-2 px-[7.5rem] max-sm:px-0 w-full ">
        <Link href="/Products/Product01">
        <div className="sm:w-60 xl:h-[20rem] xs:w-52 xs:h-44 w-36 max-sm:h-40 bg-[#F5F5F5] relative">
        <Image 
            alt="product"
            width="600" 
            height="600"
            className="w-full h-[70%] object-cover " 
            src="/image 1.png"
            />
            <div className="ml-2 mt-2">
            <span className="font-medium  xs:text-base text-[1rem]">Syltherine</span>
           <br />
           <div className="xs:text-base text-sm mt-2">
               <span className="text-[#898989]">Stylish cafe chair</span><br />
               <span className="text-[#3A3A3A] text-sm font-medium">Rp 2.500.000</span> 
             </div>
             </div>
           </div>
        </Link>
        <Link href="/Products/Product02">
        <div className="sm:w-60 xl:h-[20rem] xs:w-52 xs:h-44 w-36 max-sm:h-40 bg-[#F5F5F5] relative group">
        <Image 
            alt="product"
            width="600" 
            height="600"
            className="w-full h-[70%] object-cover" 
            src="/image 2.png"
            />
            <div className="ml-2 mt-2">
            <span className="font-medium  xs:text-base text-[1rem]">Leviosa</span>
           <br />
           <div className="xs:text-base text-sm mt-2">
               <span className="text-[#898989]">Stylish cafe chair</span><br />
               <span className="text-[#3A3A3A] text-sm font-medium">Rp 2.500.000</span> 
             </div>
             </div>
           </div>
        </Link>
        <Link href="/Products/Product03">
        <div className="sm:w-60 xl:h-[20rem] xs:w-52 xs:h-44 w-36 max-sm:h-40 bg-[#F5F5F5] relative group">
        <Image 
            alt="product"
            width="600" 
            height="600"
            className="w-full h-[70%] object-cover" 
            src="/image 3.png"
            />
            <div className="ml-2 mt-2">
            <span className="font-medium  xs:text-base text-[1rem]">Lolito</span>
           <br />
           <div className="xs:text-base text-sm mt-2">
               <span className="text-[#898989]">MLuxury big sofa</span><br />
               <span className="text-[#3A3A3A] text-sm font-medium">Rp 7.000.000</span> 
             </div>
             </div>
           </div>
        </Link>
        <Link href="/Products/Product04">
        <div className="sm:w-60 xl:h-[20rem] xs:w-52 xs:h-44 w-36 max-sm:h-40 bg-[#F5F5F5] relative group">
        <Image 
            alt="product"
            width="600" 
            height="600"
            className="w-full h-[70%] object-cover" 
            src="/image 4.png"
            />
            <div className="ml-2 mt-2">
            <span className="font-medium  xs:text-base text-[1rem]">Respira</span>
           <br />
           <div className="xs:text-base text-sm mt-2">
               <span className="text-[#898989]">Outdoor bar table and stool</span><br />
               <span className="text-[#3A3A3A] text-sm font-medium">Rp 500.000</span> 
             </div>
             </div>
           </div>
        </Link>
        <Link href="/Products/Product05">
        <div className="sm:w-60 xl:h-[20rem] xs:w-52 xs:h-44 w-36 max-sm:h-40 bg-[#F5F5F5] relative group">
        <Image 
            alt="product"
            width="600" 
            height="600"
            className="w-full h-[70%] object-cover" 
            src="/image 9.png"
            />
            <div className="ml-2 mt-2">
            <span className="font-medium  xs:text-base text-[1rem]">Grifo</span>
           <br />
           <div className="xs:text-base text-sm mt-2">
               <span className="text-[#898989]">Night lamp</span><br />
               <span className="text-[#3A3A3A] text-sm font-medium">Rp 1.500.000</span> 
             </div>
             </div>
           </div>
        </Link>
        <Link href="/Products/Product06">
        <div className="sm:w-60 xl:h-[20rem] xs:w-52 xs:h-44 w-36 max-sm:h-40 bg-[#F5F5F5] relative group">
        <Image 
            alt="product"
            width="600" 
            height="600"
            className="w-full h-[70%] object-cover" 
            src="/image 6.png"
            />
            <div className="ml-2 mt-2">
            <span className="font-medium  xs:text-base text-[1rem]">Muggo</span>
           <br />
           <div className="xs:text-base text-sm mt-2">
               <span className="text-[#898989]">Small mug</span><br />
               <span className="text-[#3A3A3A] text-sm font-medium">Rp 150.000</span> 
             </div>
             </div>
           </div>
        </Link>
        <Link href="/Products/Product07">
        <div className="sm:w-60 xl:h-[20rem] xs:w-52 xs:h-44 w-36 max-sm:h-40 bg-[#F5F5F5] relative group">
        <Image 
            alt="product"
            width="600" 
            height="600"
            className="w-full h-[70%] object-cover" 
            src="/image 7.png"
            />
            <div className="ml-2 mt-2">
            <span className="font-medium  xs:text-base text-[1rem]">Pingky</span>
           <br />
           <div className="xs:text-base text-sm mt-2">
               <span className="text-[#898989]">Cute bed set</span><br />
               <span className="text-[#3A3A3A] text-sm font-medium">Rp 7.000.000</span> 
             </div>
             </div>
           </div>
        </Link>
        <Link href="/Products/Product08">
        <div className="sm:w-60 xl:h-[20rem] xs:w-52 xs:h-44 w-36 max-sm:h-40 bg-[#F5F5F5] relative group">
        <Image 
            alt="product"
            width="600" 
            height="600"
            className="w-full h-[70%] object-cover" 
            src="/image 8.png"
            />
            <div className="ml-2 mt-2">
            <span className="font-medium  xs:text-base text-[1rem]">Potty</span>
           <br />
           <div className="xs:text-base text-sm mt-2">
               <span className="text-[#898989]">Minimalist flower pot</span><br />
               <span className="text-[#3A3A3A] text-sm font-medium">Rp 500.000</span> 
             </div>
             </div>
           </div>
        </Link>
        </div>
        <div className="w-full flex justify-center">
        <button className="px-4 py-[0.5rem] mx-10 mt-9 bg-none border border-[#B88E2F] text-[#B88E2F] w-[12rem] h-3rem rounded text-[15px]">
            Show more
        </button>
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