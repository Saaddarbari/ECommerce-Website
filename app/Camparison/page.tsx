import Link from "next/link";

export default function Comparison() {
    return (
      <main>
        <section className="m-auto flex w-full lg:w-[90%] xl:w-[1300px] md:max-w-[1280px] overflow-hidden">
       <div className="w-screen flex justify-center">
        <div className="w-[80%]">
            <section className="container w-full grid md:grid-cols-4 gap-5 h-fit pt-10 pb-16">
                <div className="flex w-full flex-col gap-1 md:col-span-4 lg:col-span-1">
                    <p className="text-xl font-medium">Go to Product page for more Products</p>
                    <Link className="inline-flex items-center justify-center whitespace-nowrap rounded-md ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 underline-offset-4 hover:underline dark:text-slate-50 h-10 px-4 py-2 text-sm text-[#727272] font-medium underline w-fit bg-transparent hover:bg-transparent pl-0" href="/Shop">View more</Link>
                 </div>
                    <div className="flex items-center justify-center border border-dashed border-[#afafaf] h-[200px] rounded-[10px]">
                        <p className="text-myBlack text-sm">Select a product</p>
                        </div>
                        <div className="flex w-full flex-col gap-1">
                            <p className="text-xl font-medium">Add a product</p>
                            <button type="button" id="radix-:r0:" aria-haspopup="menu" aria-expanded="false" data-state="closed" className="w-full bg-myOrange text-sm text-white font-medium h-10 flex items-center justify-start px-3 rounded-[7px]">Choose a product</button>
                            </div>
            </section>
            <div className="container mx-auto p-4">
                <div className="overflow-x-auto">
                    <div className="mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">General</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="font-semibold">Feature</div>
                            <div className="font-semibold">Product 1</div>
                            <div className="font-semibold">Product 2</div>
                            <div className="font-medium capitalize">package</div>
                            <div>1 sectional sofa</div>
                            <div>1 Three Seater, 2 Single Seater</div>
                            <div className="font-medium capitalize">model number</div>
                            <div>TFCBUGRBL65RHS</div>
                            <div>DTUBUGRBL568</div>
                            <div className="font-medium capitalize">secondary material</div>
                            <div>Solid Wood</div>
                            <div>Solid Wood</div>
                            <div className="font-medium capitalize">configuration</div>
                            <div>L-shaped</div>
                            <div>L-shaped</div>
                            <div className="font-medium capitalize">upholstery material</div>
                            <div>Fabric + Cotton</div>
                            <div>Fabric + Cotton</div>
                            <div className="font-medium capitalize">upholstery color</div>
                            <div>Bright Grey &amp; Lion</div>
                            <div>Bright Grey &amp; Lion</div>
                            </div>
                        </div>
                        <div className="mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">Product</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="font-semibold">Feature</div>
                                <div className="font-semibold">Product 1</div>
                                <div className="font-semibold">Product 2</div>
                                <div className="font-medium capitalize">filling material</div>
                                <div>Foam</div>
                                <div>Matte</div>
                                <div className="font-medium capitalize">finish type</div>
                                <div>Bright Grey &amp; Lion</div>
                                <div>Bright Grey &amp; Lion</div>
                                <div className="font-medium capitalize">headrest</div>
                                <div>No</div>
                                <div>Yes</div>
                                <div className="font-medium capitalize">max load capacity</div>
                                <div>280</div>
                                <div>300</div>
                                <div className="font-medium capitalize">origin</div>
                                <div>India</div>
                                <div>India</div>
                                </div>
                                </div>
                                <div className="mb-8">
                                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Dimension</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div className="font-semibold">Feature</div>
                                        <div className="font-semibold">Product 1</div>
                                        <div className="font-semibold">Product 2</div>
                                        <div className="font-medium capitalize">width</div>
                                        <div>265.32 cm</div>
                                        <div>265.32 cm</div>
                                        <div className="font-medium capitalize">height</div>
                                        <div>76 cm</div>
                                        <div>76 cm</div>
                                        <div className="font-medium capitalize">depth</div>
                                        <div>167.76 cm</div>
                                        <div>167.76 cm</div>
                                        <div className="font-medium capitalize">weight</div>
                                        <div>45 KG</div>
                                        <div>65 KG</div>
                                        <div className="font-medium capitalize">seat height</div>
                                        <div>41.52 cm</div>
                                        <div>41.52 cm</div>
                                        <div className="font-medium capitalize">leg height</div>
                                        <div>5.46 cm</div>
                                        <div>5.46 cm</div>
                                        </div>
                                        </div>
                                        <div className="mb-8">
                                            <h2 className="text-2xl md:text-3xl font-bold mb-4">Warranty</h2>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                <div className="font-semibold">Feature</div>
                                                <div className="font-semibold">Product 1</div>
                                                <div className="font-semibold">Product 2</div>
                                                <div className="font-medium capitalize">summary</div>
                                                <div>1 Year Manufacturing Warranty</div>
                                                <div>1.2 Year Manufacturing Warranty</div>
                                                <div className="font-medium capitalize">service type</div>
                                                <div>For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com</div>
                                                <div>For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com</div>
                                                <div className="font-medium capitalize">covered</div>
                                                <div>Warranty Against Manufacturing Defect</div>
                                                <div>Warranty of the product is limited to manufacturing defects only.</div>
                                                <div className="font-medium capitalize">not covered</div>
                                                <div>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear &amp; Tear In The Natural Course Of Product Usage.</div>
                                                <div>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear &amp; Tear In The Natural Course Of Product Usage.</div>
                                                <div className="font-medium capitalize">domestic</div>
                                                <div>1 Year</div>
                                                <div>3 Months</div>
                                                </div>
                                                </div>
                                                </div>
              </div>
           </div>
          </div>
       </section>
       </main>
  );
}
 