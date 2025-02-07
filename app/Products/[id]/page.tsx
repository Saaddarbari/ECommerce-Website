import ProductDetails from "@/app/components/ProductDetails";

interface IParams {
  id: string;
}

export default function ProductDetailsPage({ params }: { params: IParams }) {
  const { id } = params; // Extract dynamic ID from the route

  return <ProductDetails productId={id} />; // Pass the ID to a reusable component
  
}
