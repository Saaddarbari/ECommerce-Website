"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { Product } from "@/types/product";

interface Props {
  cartItems: Product[];
  setCartItems: (items: Product[]) => void;
}

const OrderButton = ({ cartItems, setCartItems }: Props) => {
  const router = useRouter();

  const handleProceed = () => {
    if (cartItems.length === 0) {
      Swal.fire({
        title: "Cart is Empty!",
        text: "Please add items before placing an order.",
        icon: "warning",
      });
      return;
    }

    const orderDetails = {
      orderId: Math.floor(Math.random() * 1000000),
      items: cartItems,
      totalAmount: cartItems.reduce((sum, item) => sum + item.price * (item.inventory ?? 1), 0),
      date: new Date().toLocaleString(),
    };

    // Save order receipt in localStorage
    localStorage.setItem("orderReceipt", JSON.stringify(orderDetails));

    // Show success message
    Swal.fire({
      title: "Order Placed Successfully!",
      text: "Your receipt has been generated.",
      icon: "success",
      timer: 1500,
      showConfirmButton: false,
    }).then(() => {
      // Clear the cart from state
      setCartItems([]);

      // Remove cart from localStorage
      localStorage.removeItem("cartItems");

      // Redirect to order receipt page
      router.push("/order-receipt");
    });
  };

  return (
    <button
      onClick={handleProceed}
      className="w-full bg-[#B88E2F] text-white py-2 rounded-md font-semibold hover:bg-yellow-700 transition"
    >
      Proceed to Order
    </button>
  );
};

export default OrderButton;
