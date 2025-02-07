"use client";
import { createContext, useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

// Cart Item interface
interface CartItem {
  id: string;
  heading: string;
  price: number;
  image: string;
  quantity: number;
}

// Cart context interface
interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
  clearCartAfterPlaceOrder:(id:string)=> void;
}

// Creating CartContext with default value
const CartContext = createContext<CartContextType | undefined>(undefined);

// CartProvider component
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart from local storage when component mounts
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to local storage whenever it updates
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Function to add items to the cart
  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      return [...prevCart, { ...item, quantity: 1 }];
    });

    Swal.fire({
      title: `${item.heading} Added!`,
      text: "The product has been added to your cart successfully.",
      icon: "success",
      timer: 1500,
      showConfirmButton: false,
    });
  };

  // Function to update quantity of an item in the cart
  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === id ? { ...cartItem, quantity } : cartItem
      )
    );
  };

  // Function to remove item from the cart
  const removeFromCart = (id: string) => {
    const removedItem = cart.find((cartItem) => cartItem.id === id);
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== id));

    if (removedItem) {
      Swal.fire({
        title: `${removedItem.heading} Removed!`,
        text: "The product has been removed from your cart successfully.",
        icon: "error",
        timer: 1500,
        showConfirmButton: false,
      });
    }
  };
// Function to clear the entire cart after placing an order
const clearCartAfterPlaceOrder = () => {
  setCart([]); // Clear the cart state
  Swal.fire({
    title: "Order Placed Successfully!",
    text: "Your order has been placed successfully.",
    icon: "success",
    timer: 1500,
    showConfirmButton: false,
  });
};

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart ,clearCartAfterPlaceOrder }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use Cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
