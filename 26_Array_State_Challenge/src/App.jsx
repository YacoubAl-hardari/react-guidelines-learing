import { useState } from 'react';

const initialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Cheese',
  count: 5,
}, {
  id: 2,
  name: 'Spaghetti',
  count: 2,
}];

export default function ShoppingCart() {
  const [products,setProducts ] = useState(initialProducts)

  function handleIncreaseClick(productId) {

  }

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      <ul className="space-y-2">
        {products.map(product => (
          <li key={product.id} className="flex justify-between items-center p-2 border rounded">
            <span className="text-lg">{product.name} (<b>{product.count}</b>)</span>
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
