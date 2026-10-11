"use client"

import { useEffect, useState } from "react"

export default function ProductList() {
  const [productData, setProductData] = useState(null)

  useEffect(() => {
    fetch("/api/product")
      .then((res) => res.json())
      .then((data) => setProductData(data))
  }, []) // 👈 এখানে [] যোগ করা বাধ্যতামূলক (Infinite loop আটকানোর জন্য)

  // API রেসপন্সের key 'product' অনুযায়ী চেক করা হলো
  const products = productData?.success && Array.isArray(productData?.product) 
    ? productData.product 
    : [];

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Product List</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((item) => (
          <div key={item._id} className="border p-4 rounded-lg bg-white shadow-sm">
            {item.image && (
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-48 object-cover rounded-md mb-2" 
              />
            )}
            <h3 className="font-bold text-lg">{item.name}</h3>
            <p className="text-gray-600 whitespace-pre-line text-sm mt-1">{item.biboron}</p>
            <p className="text-green-600 font-bold mt-2">৳ {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}