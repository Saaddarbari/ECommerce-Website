import ProductDetails from "@/app/components/ProductDetails";

// interface IParams {
//   id: string;
// }

// const ProductDetailsPage = ({ params }: { params: IParams }) => {
//   const { id } = params;

//   return <ProductDetails productId={id} />;
// };

// export default ProductDetailsPage;
// import { NextPageContext } from "next";
// import ProductDetails from "@/app/components/ProductDetails";

// const ProductDetailsPage = ({ params }: { params: { id: string } }) => {
//   const { id } = params;

//   return <ProductDetails productId={id} />;
// };

// // This will type `params` correctly for dynamic routes
// export async function getServerSideProps(context: NextPageContext) {
//   const { id } = context.params as { id: string };

//   return {
//     props: {
//       params: { id },
//     },
//   };
// }

// export default ProductDetailsPage;

interface Iparams {
id: string;
}

export default async function ProductDetailsPage({ params }: { params: Promise<Iparams> }) {
const { id } = await params;
return (
<ProductDetails productId={id} />
);
};