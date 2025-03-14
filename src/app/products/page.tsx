"use client"; // Enables Client Component behavior

import { useEffect, useState } from "react";
import Layout from "@/components/Layout"; // Ensure correct import path

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

const fetchProducts = async (): Promise<Product[]> => {
  try {
    const res = await fetch("https://dummyjson.com/products", { cache: "no-store" }); // Ensures fresh data on every request
    if (!res.ok) throw new Error("Failed to fetch products");
    const data = await res.json();
    return data.products || [];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

const Card = ({ product }: { product: Product }) => {
  return (
    <div className="w-full max-w-xs p-4 bg-white/20 backdrop-blur-md rounded-xl shadow-md border border-white/20 hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
      <img src={product.thumbnail} alt={product.title} className="w-full h-32 object-cover rounded-lg mb-4" />
      <h2 className="text-lg font-bold text-white truncate">{product.title}</h2>
      <p className="text-xs text-white/80 mt-1 line-clamp-2">{product.description}</p>
      <div className="mt-2 flex justify-between items-center">
        <span className="text-base font-semibold text-blue-200">₱{product.price.toFixed(2)}</span>
        <span className="text-xs bg-red-200/20 text-red-200 px-2 py-1 rounded-full">-{product.discountPercentage}%</span>
      </div>
      <div className="mt-2 flex justify-between items-center text-xs">
        <span className="text-yellow-200 bg-yellow-200/20 px-2 py-1 rounded-full">⭐ {product.rating.toFixed(1)}</span>
        <span className={`font-semibold ${product.stock > 0 ? "text-green-200 bg-green-200/20" : "text-red-200 bg-red-200/20"} px-2 py-1 rounded-full`}>
          {product.stock > 0 ? `In Stock: ${product.stock}` : "Out of Stock"}
        </span>
      </div>
      <p className="mt-2 text-white/60 text-xxs">Brand: {product.brand} | Category: {product.category}</p>
    </div>
  );
};

const Page = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  return (
    <Layout>
      <div className="background-image min-h-screen py-8">
        <div className="bg-black/0 backdrop-blur-none py-8">
        <center>
        <h1 className="text-center text-4xl font-bold text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-3 inline-block shadow-lg mb-6">
        Product List</h1>      
        </center>
         {loading ? (
            <div className="flex justify-center items-center min-h-[40vh]">
              <p className="text-base font-semibold text-white">Loading products...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
              {products.length > 0 ? (
                products.map((p) => <Card key={p.id} product={p} />)
              ) : (
                <p className="text-center text-base font-semibold text-red-200 col-span-full">No products found.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Page;