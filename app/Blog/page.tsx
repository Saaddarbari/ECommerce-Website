import Image from "next/image";
import Form from 'next/form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Blog() {
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
                    <span className="relative bottom-[14rem] left-[35.7rem] text-[3rem] font-semibold text-black max-sm:bottom-[6rem] max-sm:left-[9rem] max-sm:text-[2rem]">Blog</span>
                    <span className="relative top-[-12rem] right-[-28.3rem] text-[1.5rem] font-semibold text-black max-sm:top-[-4rem] max-sm:right-[-4rem] max-sm:text-[1rem]">Home &gt;<span className="font-light">Blog</span></span>

                </div>
       </section>

       <section className="m-auto flex w-full lg:w-[90%] xl:w-[1300px] md:max-w-[1280px] overflow-hidden">
          <div className="w-full bg-none h-full flex ">
            <div className="ml-[5.5rem] my-[6rem] w-[840px] max-sm:mx-3 max-sm:w-full">
                    <Image
                            alt="Saaddarbari"
                            width="840"
                            height="416"
                            src="/Rectangle 68.png"
                        />
                        <h1 className="text-[2rem] font-medium my-4">Going all-in with millennial design</h1>
                        <p className="text-[15px] text-[#9F9F9F] mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                        <span className="border-b border-black text-[16px] font-medium pb-1">Read more</span>
                        <Image
                            alt="Saaddarbari"
                            width="840"
                            height="416"
                            src="/Rectangle 68 (1).png"
                            className="my-10"
                        />
                        <h1 className="text-[2rem] font-medium my-4">Exploring new ways of decorating</h1>
                        <p className="text-[15px] text-[#9F9F9F] mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                        <span className="border-b border-black text-[16px] font-medium pb-1">Read more</span>
                        <Image
                            alt="Saaddarbari"
                            width="840"
                            height="416"
                            src="/Rectangle 68 (2).png"
                            className="my-10"
                        />
                        <h1 className="text-[2rem] font-medium my-4">Handmade pieces that took time to make</h1>
                        <p className="text-[15px] text-[#9F9F9F] mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                        <span className="border-b border-black text-[16px] font-medium pb-1">Read more</span>
                        <div className="w-full flex justify-end gap-5">
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
            </div>
            <div className=" mx-10 my-[6rem] w-[270px] p-4 max-sm:hidden">
               <Form action="/search" style={{ position: 'relative', width: '280px' }}>
                        {/* On submission, the input value will be appended to the URL, e.g. /search?query=abc */}
                    <div className="flex gap-[5px] text-[24px]">
                        <input name="query" 
                           className="pt-[5px] pr-[40px] pb-[5px] pl-[15px] w-[300px] bg-none rounded border border-[#9F9F9F] text-[16px] max-sm:w-[12rem]" /> 
                        <button type="submit"  className='relative top-[20%] pointer right-[45px] text-[16px] max-sm:right-[35px]'>
                            <FontAwesomeIcon icon={faSearch}/>
                        </button>              
                    </div>
             </Form>
             <h1 className="text-[24px] font-medium my-5 ml-6">Categories</h1>
             <div className="flex justify-between leading-[3.5rem] ml-6 text-[#9F9F9F]">
             <ul>
                <li>Crafts</li>
                <li>Design</li>
                <li>Handmade</li>
                <li>Interior</li>
                <li>Wood</li>
             </ul>
             <ul>
                <li>2</li>
                <li>8</li>
                <li>7</li>
                <li>1</li>
                <li>6</li>
             </ul>
             </div>

             <div>
              <h1 className="text-[24px] font-medium mt-[7.5rem] ml-6">Recent Posts</h1>
              <div className="flex justify-between  ml-6 text-[#9F9F9F]">
             <ul className="my-3">
                <li className="my-3 flex gap-2 mt-[1.75rem] mb-[2.75rem]">
                <Image
                        alt="Saaddarbari"
                        width="80"
                        height="80"
                        src="/Rectangle 69 (5).png" 
                    />
                    <div>
                    <span className="text-[14px] ">Going all-in with millennial design</span><br />
                    <span className="text-[14px]">09 Dec 2024</span>
                    </div>
                </li>
                <li className="my-3 flex gap-2 mt-[1.75rem] mb-[2.75rem]">
                <Image
                        alt="Saaddarbari"
                        width="80"
                        height="80"
                        src="/Rectangle 69 (1).png"
                    />
                     <div>
                    <span className="text-[14px] ">Going all-in with millennial design</span><br />
                    <span className="text-[14px]">09 Dec 2024</span>
                    </div>
                </li>
                <li className="my-3 flex gap-2 mt-[1.75rem] mb-[2.75rem]">
                <Image
                        alt="Saaddarbari"
                        width="80"
                        height="80"
                        src="/Rectangle 69 (2).png"
                    />
                     <div>
                    <span className="text-[14px] ">Going all-in with millennial design</span><br />
                    <span className="text-[14px]">09 Dec 2024</span>
                    </div>
                </li>
                <li className="my-3 flex gap-2 mt-[1.75rem] mb-[2.75rem]">
                <Image
                        alt="Saaddarbari"
                        width="80"
                        height="80"
                        src="/Rectangle 69 (3).png"
                    />
                     <div>
                    <span className="text-[14px] ">Going all-in with millennial design</span><br />
                    <span className="text-[14px]">09 Dec 2024</span>
                    </div>
                </li>
                <li className="my-3 flex gap-2">
                <Image
                        alt="Saaddarbari"
                        width="80"
                        height="80"
                        src="/Rectangle 69 (4).png"
                    />
                     <div>
                    <span className="text-[14px] ">Going all-in with millennial design</span><br />
                    <span className="text-[14px]">09 Dec 2024</span>
                    </div>
                </li>
             </ul>
             </div>
             </div>
            </div>
          </div>

       </section>

            <section className="m-auto flex w-full lg:w-[90%] xl:w-[1300px] md:max-w-[1280px] overflow-hidden">
                <div className="w-full bg-[#FCF8F3] h-[10rem] max-sm:h-72 grid grid-cols-4 grid-rows-1 max-sm:grid-cols-2 max-sm:grid-rows-2">
                    <div className="relative top-[3rem] left-8">
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
                    <div className="relative top-[3rem] left-8">
                        <Image
                            alt="Saaddarbari"
                            width="60"
                            height="60"
                            src="/Vector (6).png"
                        />
                        <div className="relative left-[4rem] top-[-2.75rem]">
                            <span className="font-semibold">Warranty Protection</span><br />
                            <span className="text-[#898989]">Over 2 years</span>
                        </div>
                    </div>
                    <div className="relative top-[3rem] left-8">
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
                    <div className="relative top-[3rem] left-8">
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
