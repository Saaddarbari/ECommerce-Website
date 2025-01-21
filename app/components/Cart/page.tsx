import Image from "next/image";
import Link from "next/link";
import React from "react";
const CartPage = () => {
  return (
    <div className=" w-full md:max-w-[1440px]  mx-auto   overflow-hidden    lg:pl-0 ">
      <div className="w-full h-[306px] pagesBg overflow-hidden   ">
      <div className="m-auto flex w-full lg:w-[90%] xl:w-[1300px] md:max-w-[1280px] overflow-hidden">
                <div>
                    <Image
                        alt="Saaddarbari"
                        width="1440"
                        height="416"
                        src="/Rectangle 1.png"
                        className="opacity-50 blur-[2px] h-full"
                    />
                    <span className="relative bottom-[14rem] left-[35.7rem] text-[3rem] font-semibold text-black max-sm:bottom-[6rem] max-sm:left-[9rem] max-sm:text-[2rem]">Cart</span>
                    <span className="relative top-[-12rem] right-[-28.3rem] text-[1.5rem] font-semibold text-black max-sm:top-[-4rem] max-sm:right-[-4rem] max-sm:text-[1rem]">Home &gt;<span className="font-light">Cart</span></span>

                </div>
       </div>
      </div>
      <div className="max-w-[1250px] flex flex-wrap justify-center items-center gap-6 p-10">
        <div className="max-w-[817px] flex flex-col gap-10 w-full">
          <ul className="flex flex-wrap justify-evenly items-center pl-0 md:pl-24  bg-[#FFF9E5] w-full h-[55px]  ">
            <li>Product</li>
            <li className="ml-3">Price</li>
            <li className="ml-3">Quantity</li>
            <li>Subtotal</li>
          </ul>
          <ul className="flex justify-between items-center   h-[55px] w-full">
            <li className="bg-[#FFF9E5] -mr-5 hidden md:block">
              <Image
                src="/image 2.png"
                height={90}
                width={90}
                alt="sofa set image"
              ></Image>
            </li>
            <li>Asgaard sofa</li>
            <li className="mr-5">Rs. 250,000.00</li>
            <li>
              <span className="h-[20px] w-[20px] border p-2 rounded-lg border-1  mr-10">
                1
              </span>
            </li>
            <li className="mr-8">Rs. 250,000.00</li>
          </ul>
          <div className=" mx-auto block md:hidden">
          <Image
                src={"/images/sofaSet.png"}
                height={150}
                width={150}
                alt="sofa set image"
              ></Image>
          </div>
          <div></div>
        </div>
        <div className="p-10 flex flex-col justify-center items-center gap-5 bg-[#FFF9E5]">
          <h2>Cart Totals</h2>
          <span className="flex justify-between items-center gap-8 text-[16] font-medium">
            {" "}
            Subtotal{" "}
            <p className="text-[#9F9F9F] text-[16px] font-normal">
              Rs. 2500.00
            </p>
          </span>
          <span className="flex justify-between items-center gap-8 text-[16] font-medium">
            {" "}
            Total{" "}
            <p className="text-[#B88E2F] text-[20px] font-medium">
              Rs. 2500.00
            </p>
          </span>
         <Link href={'/checkout'}> <button className="px-10 py-2 rounded-xl border-2">Check Out</button></Link>
        </div>
      </div>
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
                        <div className="relative left-[4rem] top-[-2.75rem] ">
                            <span className="font-semibold">Warranty Protection</span><br />
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
    </div>
  );
};

export default CartPage;