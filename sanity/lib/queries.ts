import { groq } from "next-sanity";

export const allProducts = groq`*[_type == "product"]`;
export const allProd = groq`*[_type == "product"][0..15]`;
export const eight = groq`*[_type == "product"][0..7]`;
export const four = groq`*[_type == "product"][0..3]`;
