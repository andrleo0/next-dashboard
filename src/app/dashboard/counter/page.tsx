import { CartCounter } from "@/shopping-cart";

//snippet mr 
export const metadata = {
 title: 'Counter Page',
 description: 'Un simple contador',
};

export default function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      
      <span className="text-3xl">Productos en el carrito</span>
      <CartCounter
      //  value={ 20 }
       />

    </div>
  );
}