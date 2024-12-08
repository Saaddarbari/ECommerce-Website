import Link from "next/link";

export default function Footer() {
   return (
      <footer className="bg-none text-black border-t  border-[#D9D9D9] pt-10">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               <div>
                  <h2 className="font-bold text-[1.25rem] leading-[5.25rem]">Funiro</h2>
                  <p className="mt-4 text-[#9F9F9F] font-light">400 University Drive Suite 200 Coral Gables,<br />
                  FL 33134 USA</p>
               </div>
               <div>
                  <h2 className="font-medium text-[1.25rem] text-[#9F9F9F] leading-[5.25rem] max-sm:leading-6">Link</h2>
                  <Link href="/"><p className="mt-4 font-semibold leading-[3.5rem] max-sm:leading-5">Home</p></Link>
                  <Link href="/Shop"><p className="mt-3 font-semibold leading-[3.5rem] max-sm:leading-5">Shop</p></Link>
                  <Link href="/Blog"><p className="mt-3 font-semibold leading-[3.5rem] max-sm:leading-5">About</p></Link>
                  <Link href="/Contact"><p className="mt-3 font-semibold leading-[3.5rem] max-sm:leading-5">Contact</p></Link>
               </div>
               <div>
                  <h2 className="font-medium text-[1.25rem] text-[#9F9F9F] leading-[5.25rem] max-sm:leading-6">Help</h2>
                  <ul className="mt-4 space-y-3 font-semibold leading-[3.5rem] max-sm:leading-5">
                     <li>Payment Options</li>
                     <li>Returns</li>
                     <li>Privacy Policies</li>
                  </ul>
               </div>
               <div>
                  <h2 className="font-medium text-[1.25rem] text-[#9F9F9F] leading-[5.25rem] max-sm:leading-none">Newsletter</h2>
                  <input type="text" className="border-b border-black mt-[1.5rem] w-[71%] mr-1" placeholder="Enter Your Email Address" />
                  <button className="border-b border-black">
                    Subscribe
                  </button>
               </div>
            </div>
            <div className="mt-10 border-t border-[#D9D9D9] text-zinc-800">
               <p className="py-6">© Copyright Rimel 2022. All right reserved</p>
            </div>
         </div>
      </footer>
   );
}
