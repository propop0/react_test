import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ProductCard from './components/ProductCard';

function App() {
   const products = [
    { id: 1, name: "Книга", price: 350, imageUrl: "https://via.placeholder.com/150/0000FF/FFFFFF?text=Book"},
    { id: 2, name: "Ноутбук", price: 15000, imageUrl: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Laptop"},
  ];
  return (
     <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {products.map(product => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  )
}
export default App
