"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface OrderDetails {
  orderId: number;
  items: OrderItem[];
  totalAmount: number;
  date: string;
}

const OrderReceipt = () => {
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Get order data from localStorage
    const storedOrder = localStorage.getItem("orderReceipt");
    if (storedOrder) {
      setOrderDetails(JSON.parse(storedOrder));
    } else {
      // Redirect to home if no order data found
      router.push("/");
    }
  }, [router]);

  if (!orderDetails) {
    return <p className="text-center text-gray-600">Loading...</p>;
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
        <h1 className="text-2xl font-semibold text-center text-gray-800">
          Order Receipt
        </h1>
        <p className="text-center text-gray-600 mb-4">Order ID: {orderDetails.orderId}</p>
        
        <div className="border-t border-gray-300 my-4"></div>

        <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
        <ul className="divide-y divide-gray-200">
          {orderDetails.items.map((item) => (
            <li key={item.id} className="flex justify-between py-2">
              <span>{item.name} (x{item.quantity})</span>
              <span>Rs. {(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>

        <div className="border-t border-gray-300 my-4"></div>

        <div className="flex justify-between font-semibold text-lg">
          <span>Total Amount:</span>
          {orderDetails.items.map((item) => (
           <span>Rs. {(item.price * item.quantity).toFixed(2)}</span>
        ))}
        </div>

        <p className="text-gray-500 mt-4 text-sm">Order Date: {orderDetails.date}</p>

        <button
          onClick={() => router.push("/")}
          className="mt-6 w-full bg-[#B88E2F] text-white py-2 rounded-md font-semibold hover:bg-yellow-700 transition"
        >
          Back to Home
        </button>
      </div>
    </main>
  );
};

export default OrderReceipt;
