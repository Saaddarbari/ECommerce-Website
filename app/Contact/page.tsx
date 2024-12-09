import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
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
                    <span className="relative bottom-[14rem] left-[35.7rem] text-[3rem] font-semibold text-black max-sm:bottom-[6rem] max-sm:left-[8rem] max-sm:text-[2rem]">Contact</span>
                    <span className="relative top-[-12rem] right-[-25.3rem] text-[1.5rem] font-semibold text-black max-sm:top-[-4rem] max-sm:right-[-1rem] max-sm:text-[1rem]">Home &gt;<span className="font-light">Contact</span></span>

                </div>
            </section>

            <section className="m-auto w-full h-[800px] lg:w-[90%] xl:w-[1300px] md:max-w-[1280px] overflow-hidden">
                <div className=" w-full">
                    <div className="flex justify-center items-center">
                        <h1 className="max-sm:ml-4 text-[32px] font-bold mt-10">Get In Touch With Us</h1>
                    </div>
                    <p className="text-center text-[#9F9F9F]">For More Information About Our Product & Services. Please Feel Free To Drop Us <br />An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>

                </div>

                <div className="grid grid-cols-2 grid-rows-1">
                    <div className="flex-col mr-36  ml-[16rem] my-14 max-sm:hidden">
                        <div className="w-[12rem] h-[8rem] flex gap-3">
                            <div>
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </div>
                            <div>
                                <h1 className="font-semibold text-[1.5rem]">Address</h1>
                                <p className="font-normal text-[0.9rem]">236 5th SE Avenue, New York NY10000, United States</p>
                            </div>
                        </div>
                        <div className="w-[12rem] h-[8rem] flex gap-3">
                            <div>
                                <FontAwesomeIcon icon={faMobileAlt} />
                            </div>
                            <div>
                                <h1 className="font-semibold text-[1.5rem]">Phone</h1>
                                <p className="font-normal text-[0.9rem]">Mobile: +(84) 546-6789 <br />
                                    Hotline: +(84) 456-6789</p>
                            </div>
                        </div>
                        <div className="w-[12rem] h-[8rem] flex gap-3">
                            <div>
                                <FontAwesomeIcon icon={faClock} />
                            </div>
                            <div>
                                <h1 className="font-semibold text-[1.5rem]">Working Time</h1>
                                <p className="font-normal text-[0.9rem]">Monday-Friday: 9:00 - 22:00
                                    Saturday-Sunday: 9:00 - 21:00</p>
                            </div>
                        </div>
                    </div>

                    <div className="pr-24 py-11 max-sm:pr-0 max-sm:py-0 max-sm:mx-2">
                        <h1 className="font-medium">Your Name</h1>

                        <input type="text" placeholder="Abc" className="pl-3 pr-44 py-3 border rounded-lg my-5 border-[#9F9F9F] max-sm:pr-24" />
                        <h1 className="font-medium">Email address</h1>

                        <input type="text" placeholder="Abc@def.com" className="pl-3 pr-44 py-3 border rounded-lg my-5 border-[#9F9F9F] max-sm:pr-24" />
                        <h1 className="font-medium">Subject</h1>

                        <input type="text" placeholder="This is an optional" className="pl-3 pr-44 py-3 border rounded-lg my-5 border-[#9F9F9F] max-sm:pr-24" />
                        <h1 className="font-medium">Message</h1>

                        <textarea placeholder="Hi! id like to ask about" rows={3} className="pl-3 pr-48 py-3 border rounded-lg my-5 border-[#9F9F9F] max-sm:pr-32"></textarea>
                        <div className="w-full">
                            <button className="px-16 py-[0.5rem] mt-5 bg-[#B88E2F] border border-none text-white  rounded text-[15px]">
                               Submit
                            </button>
                        </div>
                    </div>
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
        </main>
    );
}


