"use client";

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons'; 
import { Product } from "@/types/product";
import { four } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Swal from 'sweetalert2'
import { useCart } from "../Cart/context/CartContext";


interface IProducts {
  _id: string;
  title: string;
  description: string;
  price: number;
  productImage: {
    asset: {
      url: string;
    };
  };
  isNew: boolean;
  tags: string[];
  discountPercentage: number;
  inventory:number;
}

const ProductDetails = ({ productId }: { productId: string }) => {
  const [result, setResult] = useState<IProducts | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [product,setProduct] = useState<Product[]>([])
  const { addToCart } = useCart();

  useEffect(() => {
    async function FetchProduct() {
          const fetchData:Product[] = await client.fetch(four)
          setProduct(fetchData) 
        }
        FetchProduct()
    const fetchProductDetails = async () => {
      try {
        setLoading(true);
        const query = `*[_type == "product" && _id == $productId]{
          _id,
          title,
          description,
          price,
          productImage {
            asset -> {
              url
            }
          },
          isNew,
          tags,
          discountPercentage,
        }`;
        const data = await client.fetch(query, { productId });
        setResult(data[0] || null);
      } catch (error) {
        console.error("Failed to fetch product details", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]);

  const handleAddToCart = (e: React.MouseEvent, products: Product[]) => {
    e.preventDefault();
    Swal.fire({
      title: `${result?.title} added to cart`,
      text: "Added suceesfully",
      icon: "success"
    });
  
  };
  
  if (loading) {
    return <p className="flex justify-center items-center min-h-screen"><div
     className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
     aria-label="Loading…"
    ></div></p>;
  }
  if (!result) {
    return (
    <p
    className={"flex justify-center items-center text-3xl font-semibold text-gray-800 h-[30rem]"}
    >
    Product not found
    </p>
    );
    }

  const imageUrl = result.productImage?.asset?.url || "/placeholder.jpg";

  function updateQuantity(id: any, arg1: number): void {
    throw new Error("Function not implemented.");
  }

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
              <div className="font-semibold">{result.title}</div>
      </section>

       <section className="m-auto mb-10 flex w-full lg:w-[90%] xl:w-[1300px] md:max-w-[1280px] overflow-hidden flex-col border-b pb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-20">
                    <div className="flex gap-8 ">
                        <div className="hidden md:inline-flex flex-col gap-8">
                            <div className="bg-primary-light h-[80px] rounded-[8px] inline-flex items-center px-2">
                                <Image
                                    width="80"
                                    height="80"
                                    src={imageUrl}
                                     alt={result.title}
                                />               
                             </div>
                            <div className="bg-primary-light h-[80px] rounded-[8px] inline-flex items-center px-2">
                                <Image
                                    width="80"
                                    height="80"
                                    src={imageUrl}
                                     alt={result.title}
                                />               
                             </div>
                            <div className="bg-primary-light h-[80px] rounded-[8px] inline-flex items-center px-2">
                                <Image
                                    width="80"
                                    height="80"
                                    src={imageUrl}
                                     alt={result.title}
                                />               
                             </div>
                            <div className="bg-primary-light h-[80px] rounded-[8px] inline-flex items-center px-2">
                                <Image
                                    width="80"
                                    height="80"
                                    src={imageUrl}
                                     alt={result.title}
                                />               
                             </div>
                           
                        </div>
                        <div className=" flex flex-col max-sm:w-[20rem] max-sm:mx-5 bg-primary-light  rounded-[8px] h-[650px] max-sm:h-[20rem] justify-center items-center">
                            <Image
                                width="600"
                                height="600"
                                src={imageUrl}
                                alt={result.title}
                            />            
                        </div>
                    </div>
                    <div className="px-10">
                        <p className="text-[42px]">{result.title}</p>
                        <p className="text-[24px] font-medium text-[#9F9F9F]">Rs {result.price}</p>
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
                        <p className="mt-4">{result.description}</p>
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
                        <div className="flex gap-[18px] items-center mt-[3rem] max-sm:mx-0 max-sm:my-5">
                            {/* <div className="inline-flex h-[64px] px-[15px] gap-[35px] items-center border border-customGray2 rounded-[10px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    className="lucide lucide-minus cursor-pointer">
                                    <path d="M5 12h14"></path>
                                </svg>
                                <p className="font-semibold text-normal select-none">1</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-plus cursor-pointer">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5v14"></path>
                                </svg>
                            </div> */}
                            <div className="flex items-center space-x-4">
                <button
                  onClick={() => updateQuantity(result._id, result.inventory - 1)}
                  className="px-3 py-1 border rounded hover:bg-gray-200 disabled:opacity-50"
                  disabled={result.inventory <= 1}
                >
                  -
                </button>
                <span className="text-lg font-medium">{result.inventory }</span>
                <button
                  onClick={() => updateQuantity(result._id, result.inventory  + 1)}
                  className="px-3 py-1 border rounded hover:bg-gray-200"
                >
                  +
                </button>
              </div>                            
                            <div className="flex gap-4 max-sm:flex-col">
                            <div>
                                <button className=" bg-white text-black hover:bg-[#B88E2F] border border-black rounded-[10px]
                                 px-10 py-4  max-sm:px-9" type="button"  onClick={() =>
                                addToCart({
                                   id: result._id, 
                                   heading: result.title, 
                                   price: result.price, 
                                   image: urlFor(result.productImage).url(), 
                                   quantity: result.inventory,
                                   })} >Add to Cart</button>
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
                                <div className="text-customGray">{result.tags}</div>
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
                        <p className="text-[#9F9F9F] text-normal px-20">{result.description}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full mt-[37px]">
                            <div className=" flex flex-col  rounded-[8px] justify-center items-center">
                                <Image 
                                alt={result.title}
                                width="150" 
                                height="150"
                                src={imageUrl}
                                className="w-[50%] object-cover" />  
                                 </div>
                                 <div className=" flex flex-col rounded-[8px] justify-center items-center">
                                 <Image 
                                alt={result.title}
                                width="150" 
                                height="150"
                                src={imageUrl}
                                className="w-[50%] object-cover" /> 
                                    </div>
                                </div>
        </section>
      
       <section className="m-auto mb-10 flex w-full lg:w-[90%] xl:w-[1300px] md:max-w-[1280px] overflow-hidden flex-col">
        <div className="flex justify-center items-center">
          <h1 className="max-sm:ml-4 text-[32px] font-bold mt-5">Related Products</h1>
        </div>

       <div className="grid grid-rows-1 gap-y-[1rem] max-sm:gap-y-[4rem]	mr-10 ml-8 max-sm:mx-5 grid-cols-4  max-sm:gap-2 items-center justify-center mt-10 max-sm:grid-rows-4 max-sm:grid-cols-2 px-[7.5rem] max-sm:px-0 w-full ">
       {product.map((product) =>(
       <div key={product._id}>   
       <Link href={`/Products/${product._id}`}>
            <div className="sm:w-60 xl:h-[20rem] xs:w-52 xs:h-44 w-36 max-sm:h-40 bg-[#F5F5F5] relative group">
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


        <div className="w-full flex justify-center">
        <Link href="/Shop"> <button className="px-4 py-[0.5rem] mx-10 mt-9 bg-none border border-[#B88E2F] text-[#B88E2F] w-[12rem] h-3rem rounded text-[15px]">
            Show more
          </button></Link>
        </div>
      </section>
    </main>

  );
};

export default ProductDetails;
