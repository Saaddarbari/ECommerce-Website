"use client"
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
   <nav className=" top-0 z-30 w-full print:hidden">
      <div className="m-auto flex h-10 w-[100%] items-end justify-between max-sm:flex md:h-16 mb-5 lg:w-[90%] xl:w-[1300px]">
        <div className="font-bold text-black lg:block xl-lg:text-xl xl:text-2xl ">
         <h1 className="ml-20 max-sm:mx-[1rem] max-sm:text-[18px] flex">
          <Image
                alt="Saaddarbari"
                width="50"
                height="32"
                src="/Meubel House_Logos-05.png"
              />
           Furniro
          </h1>
        </div>
      
          <ul className="cursor-pointer	flex gap-9 text-[1rem] font-medium justify-center items-center text-black max-sm:hidden">
            <li className="hover:underline">
              <Link href="/">
              Home
              </Link>
              </li>
            <li className="hover:underline">
            <Link href="/Shop">
              Shop
              </Link>
              </li>
            <li className="hover:underline">
            <Link href="/Blog">
              About
              </Link>
              </li>
            <li className="hover:underline">
            <Link href="/Contact">
              Contact
              </Link>
              </li>
          </ul>
          
        <div className='flex gap-8 mr-14 max-sm:gap-4 max-sm:mr-7'>
        <button type="submit"  >
            {/* <Image 
                        alt="product"
                        width="20" 
                        height="20"
                        src="/Vector (12).png"
                        className='items-center justify-center flex'
                        /> */}
              <FontAwesomeIcon icon={faUser} className="font-[20px]" />

            </button>
            <button type="submit">
                <FontAwesomeIcon icon={faSearch}/>
            </button>
            <button className=' text-[18px]'>
                <FontAwesomeIcon icon={faRegularHeart}  />
            </button>
            <Link href="/Cart">
            <button type="submit"  >
            <Image 
                        alt="product"
                        width="20" 
                        height="20"
                        src="/Vector (12).png"
                        className='items-center justify-center flex'
                        />
            </button>
           </Link>
       </div>
       </div>
        
        
      <hr />
    </nav>
  );
}
 

   