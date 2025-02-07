"use client";
import Image from "next/image";
import { useCart } from "./context/CartContext";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation"; // Correct import
import { faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const router = useRouter(); // ✅ Ensure correct useRouter hook

  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleProceed = () => {
    Swal.fire({
      title: `Processing your order`,
      text: "Please wait a moment",
      icon: "success",
      timer: 1500,
      showConfirmButton: false,
    }).then(() => {
      router.prefetch("/checkout"); // ✅ Prefetch the checkout page
      router.push("/checkout"); // ✅ Ensure navigation happens
    });
  };

  return (
    <div className="w-full md:max-w-[1440px] mx-auto overflow-hidden lg:pl-0">
      <div className="max-w-[1250px] flex flex-wrap justify-center items-center gap-6 p-10 h-96 max-sm:h-full">
        {cart.length === 0 ? (
          <div>
          <p className="font-semibold text-[3rem]">Your Cart is Empty</p>
 
          <div className="p-5 flex justify-center items-center gap-4">
            <button
              onClick={() => router.push("/order-receipt")}
              className="px-10 py-2 mt-5 bg-[#B88E2F] text-white rounded-xl"
            >
              Track Your Order
            </button>
          </div>
      </div>
        ) : (
          <>
            <div className="max-w-[817px] flex flex-col gap-10 w-full ">
              <ul className="max-sm:hidden flex flex-wrap justify-evenly items-center pl-0 md:pl-24 bg-[#FFF9E5] w-full h-[55px] font-bold">
                <li>Product</li>
                <li>Price</li>
                <li>Quantity</li>
                <li>Subtotal</li>
              </ul>
              {cart.map((item) => (
                <ul key={item.id} className="max-sm:hidden flex justify-between items-center h-[55px] w-full max-sm:h-[100px] max-sm:bg-[#FFF9E5]">
                  <li className="bg-[#FFF9E5] md:block">
                    <Image
                      src={urlFor(item.image)?.url() || "/fallback-image.jpg"}
                      height={90}
                      width={90}
                      alt={item.heading || "Product Image"}
                    />
                  </li>

                  <li>{item.heading}</li>
                  <li>Rs. {item.price.toFixed(2)}</li>

                  <li className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-1 border rounded hover:bg-gray-200 disabled:opacity-50"
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="text-lg font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1 border rounded hover:bg-gray-200"
                    >
                      +
                    </button>
                  </li>

                  
                  <li className="max-sm:hidden">Rs. {(item.price * item.quantity).toFixed(2)}</li>
                  <li>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className=" max-sm:hidden px-4 py-2 bg-[#FFF9E5] text-black rounded hover:bg-red-600"
                    >
                       <FontAwesomeIcon icon={faTrash} />

                    </button>
                  </li>
                </ul>
              ))}

              {cart.map((item) => (
                <ul key={item.id} className="xl:hidden flex justify-between items-center h-[55px] w-full max-sm:h-[150px] max-sm:bg-[#FFF9E5]">
                  <li className="bg-[#FFF9E5] md:block pl-3">
                    <Image
                      src={urlFor(item.image)?.url() || "/fallback-image.jpg"}
                      height={90}
                      width={90}
                      alt={item.heading || "Product Image"}
                    />
                  </li>
                  <div>
                  <li className="font-bold text-[20px]">{item.heading}</li>
                  <li className="text-[15px]">Rs. {item.price.toFixed(2)}</li>

                  <li className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-1 border rounded hover:bg-gray-200 disabled:opacity-50"
                      disabled={item.quantity <= 1}
                    >
                 <FontAwesomeIcon icon={faTrash} />
                    </button>
                    <span className="text-lg font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1 border rounded hover:bg-gray-200"
                    >
                      +
                    </button>
                  </li>

                  </div>
                  <li className="max-sm:hidden">Rs. {(item.price * item.quantity).toFixed(2)}</li>
                  <li>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="px-3 py-1 mb-20 border rounded hover:bg-gray-200 disabled:opacity-50"
                    >
                   <FontAwesomeIcon icon={faTimes} />

                    </ button>
                  </li>
                </ul>
              ))}
            </div>

            <div className="p-10 flex flex-col justify-center items-center gap-5 bg-[#FFF9E5]">
              <h2>Cart Totals</h2>
              <span className="flex justify-between items-center gap-8 text-[16] font-medium">
                Subtotal <p className="text-[#9F9F9F] text-[16px] font-normal">Rs. {calculateTotal().toFixed(2)}</p>
              </span>
              <span className="flex justify-between items-center gap-8 text-[16] font-medium">
                Total <p className="text-[#B88E2F] text-[20px] font-medium">Rs. {calculateTotal().toFixed(2)}</p>
              </span>

              <button 
                onClick={handleProceed}
                className="px-10 py-2 rounded-xl border-2"
              >
                Check Out
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
