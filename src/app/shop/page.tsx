import ShopData from '../components/ShopData';

export default function Shop() {
  // const Shops = ['women', 'man', 'kids','accessories'];

  return (
    <div > 
      <h1 className="flex justify-center items-center text-center text-2xl font-bold text-black">Shop by Genders</h1>

      <h1 className="flex justify-center items-center font-bold"> <ShopData/></h1>
    </div>
  );
}