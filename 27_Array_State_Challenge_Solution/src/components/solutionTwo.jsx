import { useState } from "react";

const initialProducts = [
  {
    id: 0,
    name: "Baklava",
    count: 1,
  },
  {
    id: 1,
    name: "Cheese",
    count: 5,
  },
  {
    id: 2,
    name: "Spaghetti",
    count: 2,
  },
];


export default function SolutionTwo () {
    
    const [products, setProducts] = useState(initialProducts);

    function handleIncreaseClick(productId) {
      setProducts(
        products.map((product) => {
          if (product.id === productId) {
            return {
              ...product,
              count: product.count + 1,
            };
          }
          return product;
        })
      ) ;
    }



    function handleDecreaseClick(productId) {

        setProducts(
          products.map((product)=>{
            if(product.id === productId)
            {
              if (product.count === 1) {
                alert("Count can not be less than 1")
                return product
              }

              return {
                ...product,
                count: product.count - 1 
              }
            }
            return product
          })
        )
    }

    
  return (
   
       <div className="max-w-md mx-auto mt-10 p-4 bg-white-100 shadow-md roundedmd">

      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      <ul className="space-y-5">
        {products.map((product) => (
          <li
            key={product.id}
            className="flex justify-between items-center p-2 border rounded"
          >
          
            <button
              onClick={() => handleDecreaseClick(product.id)}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              -
            </button>
            <span className="text-lg">
              {product.name} (<b>{product.count}</b>)
            </span>
            <button
              onClick={() => handleIncreaseClick(product.id)}
              className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              +
            </button>

          </li>
        ))}
      </ul>


    </div>
   
  );
}