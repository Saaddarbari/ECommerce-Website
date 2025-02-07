"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Product } from "@/types/product";
import { getCartItems } from "../actions/actions";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useCart } from "../Cart/context/CartContext";
import OrderButton from "../components/OrderButton";


const customerSchema = z.object({
  firstName: z
    .string()
    .nonempty("First name is required")
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name cannot exceed 50 characters"),
  lastName: z
    .string()
    .nonempty("Last name is required")
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name cannot exceed 50 characters"),
  streetAddress: z
    .string()
    .nonempty("Street address is required")
    .min(5, "Street address must be at least 5 characters")
    .max(100, "Street address cannot exceed 100 characters"),
  city: z
    .string()
    .nonempty("City is required")
    .min(2, "City must be at least 2 characters")
    .max(50, "City cannot exceed 50 characters"),
  province: z
    .string()
    .nonempty("Province is required")
    .min(2, "Province must be at least 2 characters")
    .max(50, "Province cannot exceed 50 characters"),
  zipCode: z
    .string()
    .nonempty("ZIP code is required")
    .regex(/^\d+$/, "ZIP code must be a number")
    .min(5, "ZIP code must be at least 5 digits")
    .max(10, "ZIP code cannot exceed 10 digits"),
  phone: z
    .string()
    .nonempty("Phone number is required")
    .regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  email: z.string().nonempty("Email is required").email("Invalid email format"),
  // additionalNotes: z
  //   .string()
  //   .min(10, "Additional notes must be at least 10 characters")
  //   .max(200, "Additional notes cannot exceed 200 characters")
  //   .optional(),
});

const Checkout = () => {
  const router = useRouter();
  const [province, setProvince] = useState("");
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const { cart, clearCartAfterPlaceOrder } = useCart();

  useEffect(() => {
    const items = getCartItems();
    setCartItems(Array.isArray(items) ? items : []);
  }, []);

  const calculateTotal = () =>
    cart.reduce(
      (total: number, item: { price: number; quantity: number }) =>
        total + item.price * item.quantity,
      0
    );
  const [customerInfo, setCustomerInfo] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    city: "",
    province: "",
    zipCode: "",
    phone: "",
    email: "",
    additionalNotes: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const provinces = ["USA"];

  const handleProvinceChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setProvince(event.target.value);
    setCustomerInfo((prevState) => ({
      ...prevState,
      province: event.target.value,
    }));
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setCustomerInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const validationResult = customerSchema.safeParse(customerInfo);

    if (!validationResult.success) {
      const fieldErrors: Record<string, string> = {};
      validationResult.error.errors.forEach((error) => {
        if (error.path[0]) {
          fieldErrors[error.path[0]] = error.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});

    const fullName = `${customerInfo.firstName} ${customerInfo.lastName}`;
    const customerData = { ...customerInfo, fullName };

    const shippingData = {
      ship_from: {
        geolocation: "-",
        email: "saaddarbari318@gmail.com",
        name: "Saad darbari",
        address_line1: "123 Sender St.",
        city_locality: "Austin",
        company_name: "adfok",
        state_province: "TX",
        postal_code: "78756",
        country_code: "US",
        phone: "+1 323-456-7890",
      },
      ship_to: {
        name: `${customerInfo.firstName.trim()} ${customerInfo.lastName?.trim()}`,
        address_line1: customerInfo.streetAddress?.trim(),
        email: customerInfo.email?.trim(),
        city_locality: customerInfo.city?.trim(),
        phone: customerInfo.phone?.trim(),
        state_province: "CA",
        postal_code: customerInfo.zipCode?.trim(),
        country_code: "US",
        address_residential_indicator: "no",
      },
      packages: [
        {
          weight: { value: 100, unit: "pound" },
          dimensions: {
            length: 5,
            width: 70,
            height: 5,
            unit: "inch",
          },
        },
      ],
      carrier_id: "se-217142",
      service_code: "fedex_ground",
    };

    try {
      console.log(
        "Shipping Data being sent:",
        JSON.stringify(shippingData, null, 2)
      );

      const response = await fetch("/api/create-shipping", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(shippingData),
      });

      if (!response.ok) {
        const errorDetails = await response.text();
        console.error("Response Error:", errorDetails);
        throw new Error(`Failed to fetch rates. Status: ${response.status}`);
      }

      const shippingResult = await response.json();
      console.log("Shipping Data Response:", shippingResult);

      const customerResponse = await fetch("/api/customers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(customerData),
      });

      if (!customerResponse.ok) {
        const errorDetails = await customerResponse.text();
        console.error("Error creating customer:", errorDetails);
        throw new Error(
          `Failed to create customer. Status: ${customerResponse.status}`
        );
      }

      const CustomerResult = await customerResponse.json();
      console.log("Customer creation result:", CustomerResult);

      const {
        name,
        phone,
        email,
        address_line1,
        city_locality,
        state_province,
        postal_code,
        country_code,
      } = shippingResult.ship_to;

      const orderData = {
        customerId: CustomerResult._id, // Use your customer ID logic
        fullName: `${customerInfo.firstName} ${customerInfo.lastName}`,
        shipTo: {
          name,
          phone,
          email,
          addressLine1: address_line1,
          city: city_locality,
          state: state_province,
          postalCode: postal_code,
          country: country_code,
        },
        trackingNumber: shippingResult.tracking_number,
        shipmentCost: shippingResult.shipment_cost.amount,
        trackingUrl: shippingResult.tracking_url,
        createdAt: shippingResult.created_at,
        labelPrint: shippingResult.label_download.pdf,
        carrierCode: shippingResult.carrier_code,
        AdditionalInfo: customerInfo.additionalNotes,
      };

      const sanityResponse = await fetch("/api/sanity-create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      if (!sanityResponse.ok) {
        throw new Error("Error saving order to Sanity.");
      }

      const sanityResult = await sanityResponse.json();
      console.log("Order Saved to Sanity:", sanityResult);
      // Navigate to Order Confirmation Page
      router.push(`/order-confirmation/order?orderId=${sanityResult._id}`);
    } catch (error) {
      console.error("Error during submission:", error);
      alert("An error occurred while submitting the form.");
    }
  };


  return (
    <main>
      <section className="m-auto flex w-full lg:w-[90%] xl:w-[1300px] md:max-w-[1280px] overflow-hidden">
        <div>
          <Image
            alt="Saaddarbari"
            width={1440} // ✅ Use numbers instead of strings for width & height
            height={416}
            src="/Rectangle 1.png"
            className="opacity-50 blur-[2px] h-full"
          />
          <span className="relative bottom-[14rem] left-[35.7rem] text-[3rem] font-semibold text-black max-sm:bottom-[6rem] max-sm:left-[7rem] max-sm:text-[2rem]">
            Checkout
          </span>
          <span className="relative top-[-12rem] right-[-23.3rem] text-[1.5rem] font-semibold text-black max-sm:top-[-4rem] max-sm:right-[1.2rem] max-sm:text-[1rem]">
            Home &gt; <span className="font-light">Checkout</span>
          </span>
        </div>
      </section>

      <section className="m-auto flex w-full lg:w-[90%] xl:w-[1300px] md:max-w-[1280px] overflow-hidden">
        {/* <RouteHero prop="Checkout" /> */}
        <div className="h-auto flex flex-col lg:grid lg:grid-cols-2 w-full px-4 md:px-10 lg:px-20 gap-10 lg:gap-20">
          {/* Billing Form */}
          <div className="flex justify-center md:items-start">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 w-full max-w-[600px] py-10"
            >
              <h1 className="text-[24px] lg:text-[36px] font-semibold">
                Billing Details
              </h1>

              {/* First Name */}
              <div className="flex flex-wrap gap-4">
                <div className="flex flex-col gap-2 w-full md:w-[48%]">
                  <label className="text-sm md:text-base">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={customerInfo.firstName}
                    onChange={handleChange}
                    className="border-[#9F9F9F] border rounded-md px-4 py-2"
                  />
                  {errors.firstName && (
                    <span className="text-red-500 text-sm">
                      {errors.firstName}
                    </span>
                  )}
                </div>

                {/* Last Name */}
                <div className="flex flex-col gap-2 w-full md:w-[48%]">
                  <label className="text-sm md:text-base ">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={customerInfo.lastName}
                    onChange={handleChange}
                    className="border-[#9F9F9F] border rounded-md px-4 py-2"
                  />
                  {errors.lastName && (
                    <span className="text-red-500 text-sm">
                      {errors.lastName}
                    </span>
                  )}
                </div>
              </div>

              {/* Street Address */}
              <div className="flex flex-col gap-2">
                <label className="text-sm md:text-base">Street Address</label>
                <input
                  type="text"
                  name="streetAddress"
                  value={customerInfo.streetAddress}
                  onChange={handleChange}
                  className="border-[#9F9F9F] border rounded-md px-4 py-2"
                />
                {errors.streetAddress && (
                  <span className="text-red-500 text-sm">
                    {errors.streetAddress}
                  </span>
                )}
              </div>

              {/* Town/City */}
              <div className="flex flex-col gap-2">
                <label className="text-sm md:text-base">Town / City</label>
                <input
                  type="text"
                  name="city"
                  value={customerInfo.city}
                  onChange={handleChange}
                  className="border-[#9F9F9F] border rounded-md px-4 py-2"
                />
                {errors.city && (
                  <span className="text-red-500 text-sm">{errors.city}</span>
                )}
              </div>

              {/* Province Selector */}
              <div className="flex flex-col gap-2">
                <label className="text-sm md:text-base">Province</label>
                <select
                  value={province}
                  name="province"
                  onChange={handleProvinceChange}
                  className="border-[#9F9F9F] border rounded-md px-4 py-2 bg-white"
                >
                  <option value="" disabled>
                    Select Province
                  </option>
                  {provinces.map((prov, index) => (
                    <option key={index} value={prov}>
                      {prov}
                    </option>
                  ))}
                </select>
                {errors.province && (
                  <span className="text-red-500 text-sm">{errors.province}</span>
                )}
              </div>

              {/* ZIP Code */}
              <div className="flex flex-col gap-2">
                <label className="text-sm md:text-base">ZIP Code</label>
                <input
                  type="text"
                  name="zipCode"
                  value={customerInfo.zipCode}
                  onChange={handleChange}
                  className="border-[#9F9F9F] border rounded-md px-4 py-2"
                />
                {errors.zipCode && (
                  <span className="text-red-500 text-sm">{errors.zipCode}</span>
                )}
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label className="text-sm md:text-base">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={customerInfo.phone}
                  onChange={handleChange}
                  className="border-[#9F9F9F] border rounded-md px-4 py-2"
                />
                {errors.phone && (
                  <span className="text-red-500 text-sm">{errors.phone}</span>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-sm md:text-base">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={customerInfo.email}
                  onChange={handleChange}
                  className="border-[#9F9F9F] border rounded-md px-4 py-2"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">{errors.email}</span>
                )}
              </div>

              {/* Additional Notes */}
              <div className="flex flex-col gap-2">
                <label className="text-sm md:text-base">Additional Notes</label>
                <textarea
                  rows={2}
                  name="additionalNotes"
                  value={customerInfo.additionalNotes}
                  onChange={handleChange}
                  className="border-[#9F9F9F] border rounded-md px-4 py-2"
                />
                {errors.additionalNotes && (
                  <span className="text-red-500 text-sm">
                    {errors.additionalNotes}
                  </span>
                )}
              </div>


            </form>
          </div>
          {/* Billing Details */}
          {/* <div className="flex justify-center">
          <BilllingDetails
            handleCustomers={handleSubmit}
            isProcessing={isProcessing}
          />
        </div> */}

          <div className="p-10 flex flex-col justify-center  gap-5 h-[80%] ">
            <div className="flex justify-between  gap-52 max-sm:gap-2">
              <h2 className="text-[24px] font-medium">Product</h2>
              <h2 className="text-[24px] font-medium">Subtotal</h2>
            </div>
            {cart.map((item) => (
              <ul key={item.id} className="flex justify-between items-center  w-full">
                <li className="text-[#9F9F9F]">{item.heading}</li>
                <li>Rs. {item.price.toFixed(2)}</li>
              </ul>
            ))}

            <span className="flex justify-between  gap-52 text-[16] font-normal max-sm:gap-2">
              Subtotal <p className="text-[#9F9F9F] text-[16px] font-normal">Rs. {calculateTotal().toFixed(2)}</p>
            </span>
            <span className="flex justify-between  gap-52 text-[16] font-normal mb-10 max-sm:gap-2">
              Total <p className="text-[#B88E2F] text-[25px] font-bold">Rs. {calculateTotal().toFixed(2)}</p>
            </span>

            <hr />
            {cart.map((item) => (
              <button onClick={() => clearCartAfterPlaceOrder(item.id)}>
                <OrderButton cartItems={cartItems} setCartItems={setCartItems} />
              </button>))}
          </div>

        </div>
        {/* <Services /> */}



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
              <span className="font-semibold ">Warranty Protection</span><br />
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
};

export default Checkout;