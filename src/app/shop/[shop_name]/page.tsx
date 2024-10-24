import Link from "next/link";
import React from "react";

const ShopData: any= {
 
  women: { name: 'WOMEN', Category: 'Lawn', Type: 'Stitched' },
  man: { name: 'MAN', Category: 'washing', Type: 'Stitched' },
  kids: { name: 'KIDS', Category: 'Ready', Type: 'Stitched' },
}


export default function ShopDetails({ params }:{params :{shop_name:string}}) {
  const { shop_name } = params;

  const list = ShopData[shop_name.toLowerCase()];

  if (!list) {
    // Handle if country not found
    return (<div><h1 className="flex justify-center items-center m-2"><b>Shops Not Found</b></h1>
     <div className="flex justify-center items-center">
      <button className="bg-black border-yellow-300 border-2 p-1 m-5 rounded-md ">
      <Link className="hover:text-red-500" href="/shop">Back to Shop</Link></button>
     </div>
    </div>
  );
  }

  return (
    <div >
      <h1 className="flex justify-center items-center font-bold">Shop Category: {list.name}</h1>
      <p className="flex justify-center items-center font-bold">Product Category: {list.Category}</p>
      <p className="flex justify-center items-center font-bold">Type: {list.Type}</p>
     <div className="flex justify-center items-center font-bold">
      <button className="bg-black border-yellow-300 border-2 p-1 m-2 rounded-md">
      <Link className="hover:text-red-500 font-bold" href="/shop">Back to Shop</Link></button>
     </div>
    </div>
  );
}