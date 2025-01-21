import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons'; 

export default function Product03() {
    return (
        <main>
          <section className="bg-[#F9F1E7] px-4 md:px-[70px] flex h-[100px] gap-3 items-center">
            <div className="text-customGray2">Home</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
            className="lucide lucide-chevron-right">
                <path d="m9 18 6-6-6-6"></path>
            </svg>
            <div className="text-customGray2">Shop</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
            className="lucide lucide-chevron-right">
                <path d="m9 18 6-6-6-6"></path>
                </svg>
                <div data-orientation="vertical" role="none" className="shrink-0 bg-slate-200 dark:bg-slate-800 w-[1px] h-[40px] border border-customGray2">
                </div>
                    <div className="font-semibold">Lolito</div>
          </section>

            <section className="m-auto mb-10 flex w-full lg:w-[90%] xl:w-[1300px] md:max-w-[1280px] overflow-hidden flex-col border-b pb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-20">
                    <div className="flex gap-8 ">
                        <div className="hidden md:inline-flex flex-col gap-8">
                            <div className="bg-primary-light h-[80px] rounded-[8px] inline-flex items-center px-2">
                                <Image
                                    alt="product"
                                    width="80"
                                    height="80"
                                    src="/image 3.png"
                                />               
                             </div>
                            <div className="bg-primary-light h-[80px] rounded-[8px] inline-flex items-center px-2">
                                <Image
                                    alt="product"
                                    width="80"
                                    height="80"
                                    src="/image 3.png"
                                />                    
                            </div>
                            <div className="bg-primary-light h-[80px] rounded-[8px] inline-flex items-center px-2">
                                <Image
                                    alt="product"
                                    width="80"
                                    height="80"
                                    src="/image 3.png"
                                />                        
                            </div>
                            <div className="bg-primary-light h-[80px] rounded-[8px] inline-flex items-center px-2">
                                <Image
                                    alt="product"
                                    width="80"
                                    height="80"
                                    className="w-full h-[70%] object-cover "
                                    src="/image 3.png"
                                />                           
                            </div>
                        </div>
                        <div className=" flex flex-col max-sm:w-[20rem] max-sm:mx-5 bg-primary-light  rounded-[8px] h-[500px] max-sm:h-[20rem] justify-center items-center">
                            <Image
                                alt="product"
                                width="600"
                                height="600"
                                src="/image 3.png"
                            />            
                        </div>
                    </div>
                    <div className="px-10">
                        <p className="text-[42px]">Lolito</p>
                        <p className="text-[24px] font-medium text-[#9F9F9F]">Rp 7.000.000</p>
                        <div className="flex items-center gap-[22px]">
                            <div className="text-[#FFC700] text-[2rem] ">
                                <span >★</span>
                                <span >★</span>
                                <span >★</span>
                                <span >★</span>
                                <span >★</span>
                            </div>
                            <div className="shrink-0 bg-slate-200 dark:bg-slate-800 w-[1px] h-[40px] border border-customGray2"></div>
                            <p className="text-[#9F9F9F] text-[15px] font-medium">5 Customer Review</p>
                        </div>
                        <p className="mt-4">Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
                        <div>
                            <p className="text-[16px] mb-[12px] mt-[22px] text-[#9F9F9F] font-medium">Size</p>
                            <nav className="mx-auto w-full flex ">
                                <ul className="flex-row items-center flex gap-[38px]">
                                    <li className="bg-[#F9F1E7] h-[60px] w-[60px] hover:bg-[#F9F1E7] rounded-[10px]">
                                    <Link className="flex items-center justify-center rounded-md text-sm font-medium  hover:bg-[#B88E2F] h-[60px] w-[60px] text-20" href="">L</Link>
                                    </li>
                                    <li className="bg-[#F9F1E7] h-[60px] w-[60px] hover:bg-[#F9F1E7] flex justify-center items-center rounded-[10px]">
                                    <Link className="flex items-center justify-center rounded-md text-sm font-medium  hover:bg-[#B88E2F] h-[60px] w-[60px] text-20" href="">XL</Link>
                                    </li>
                                    <li className="bg-[#F9F1E7] h-[60px] w-[60px] hover:bg-[#F9F1E7] flex justify-center items-center rounded-[10px]">
                                        <Link className="flex items-center justify-center rounded-md text-sm font-medium  hover:bg-[#B88E2F] h-[60px] w-[60px] text-20" href="">XS</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="flex gap-[18px] items-center mt-32 max-sm:mx-0 max-sm:my-5">
                            <div className="inline-flex h-[64px] px-[15px] gap-[35px] items-center border border-customGray2 rounded-[10px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    className="lucide lucide-minus cursor-pointer">
                                    <path d="M5 12h14"></path>
                                </svg>
                                <p className="font-semibold text-normal select-none">1</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-plus cursor-pointer">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5v14"></path>
                                </svg>
                            </div>
                            <div className="flex gap-4 max-sm:flex-col">
                            <div>
                                <button className=" bg-white text-black hover:bg-white border border-black rounded-[10px] px-10 py-4  max-sm:px-9" type="button">Add to Cart</button>
                            </div>
                            <div>
                            <Link href="/Camparison">
                                  <button className=" bg-white text-black hover:bg-white border border-black rounded-[10px] px-10 py-4 max-sm:px-9" type="button">+ Compare</button>
                                </Link>
                             </div>
                            </div>
                        </div>
                        <div className="my-[41px]">
                            <div data-orientation="horizontal" role="none" className="shrink-0 bg-slate-200 dark:bg-slate-800 h-[1px] w-full border border-[#D9D9D9]">
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 text-[#9F9F9F] text-[20px] font-normal">
                            <div className="flex gap-4">
                                <p className="text-customGray">SKU</p>
                                <p className="text-customGray">:</p>
                                <div className="text-customGray">SS001</div>
                            </div>
                            <div className="flex gap-4">
                                <p className="text-customGray">Category</p>
                                <p className="text-customGray">:</p>
                                <div className="text-customGray">Sofas</div>
                            </div>
                            <div className="flex gap-4">
                                <p className="text-customGray">Tags</p>
                                <p className="text-customGray">:</p>
                                <div className="text-customGray">Sofa, Chair, Home, Shop</div>
                            </div>
                            <div className="flex gap-4">
                                <p className="text-customGray">Share</p>
                                <p className="text-customGray">:</p>
                                <div className="text-customGray">
                                    <div className="flex gap-[23px]">
                                    <div style={{ fontSize: '24px', color: 'black', cursor: 'pointer' }}>
                                      <FontAwesomeIcon icon={faFacebook} />
                                    </div>
                                    <div style={{ fontSize: '24px', color: 'black', cursor: 'pointer' }}>
                                       <FontAwesomeIcon icon={faLinkedin} />
                                     </div>
                                     <div style={{ fontSize: '24px', color: 'black', cursor: 'pointer' }}>
                                        <FontAwesomeIcon icon={faTwitter} />
                                     </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center justify-center m-auto mb-10 w-full lg:w-[90%] xl:w-[1300px] md:max-w-[1280px] overflow-hidden  border-b pb-4">
                <div className="flex gap-[53px]">
                    <p className="text-black text-normal md:text-[24px] font-semibold">Description</p>
                    <p className="text-[#9F9F9F] text-normal md:text-[24px]">Additional Information</p>
                    <p className="text-[#9F9F9F] text-normal md:text-[24px]">Reviews [5]</p>
                    </div>
                    <div className="mt-[37px] ">
                        <p className="text-[#9F9F9F] text-normal px-20">Embodying the raw, wayward spirit of rock roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
                        <p className="text-[#9F9F9F] text-normal mt-[30px] px-20">Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-[37px]">
                            <div className=" flex flex-col bg-[#F9F1E7]  rounded-[8px] justify-center items-center">
                                <Image 
                                alt="product"  
                                width="200" 
                                height="200"
                                src="/Cloud sofa three seater + ottoman_2 1.png"  
                                 className="w-full object-cover" />
                                 </div>
                                 <div className=" flex flex-col bg-[#F9F1E7] rounded-[8px] justify-center items-center">
                                    <Image 
                                    alt="product" 
                                    width="200" 
                                    height="200"
                                    src="/Cloud sofa three seater + ottoman_2 1.png" 
                                    className="w-full object-cover" />
                                    </div>
                                    </div>
            </section>

            <section className="m-auto mb-10 flex w-full lg:w-[90%] xl:w-[1300px] md:max-w-[1280px] overflow-hidden flex-col">
                <div className="flex justify-center items-center">
                    <h1 className="max-sm:ml-4 text-[32px] font-bold mt-5">Related Products</h1>
                </div>
                <div className="grid grid-rows-1 gap-y-[1rem] max-sm:gap-y-[4rem]	mr-10 ml-8 max-sm:mx-5 grid-cols-4  max-sm:gap-2 items-center justify-center mt-10 max-sm:grid-rows-2 max-sm:grid-cols-2 px-[7.5rem] max-sm:px-0 w-full ">
                    <Link href="">
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
                    <Link href="">
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
                    <Link href="">
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
                    <Link href="">
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
        </main>
    )
}