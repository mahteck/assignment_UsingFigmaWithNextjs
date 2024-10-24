import Link from "next/link";
export default function ShopData(){
const getShops = () => {
    return['WOMEN', 'MAN', 'KIDS'];
};
 return(
    <ul >
        {getShops().map((shop) =>(
         <li className="hover:text-black" key={shop}>
         <Link href={`/shop/${shop}`}>
         {shop.charAt(0).toUpperCase() + shop.slice(1)}
         </Link>
         </li>
         
        ))}
    </ul>
 );
}