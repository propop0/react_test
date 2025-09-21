// App.jsx
import './App.css'

import ProductCard from './components/ProductCard';

function App() {
   const products = [
    { id: 1, name: "Книга", price: 350, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGigqPEkM_3r9UydjfJxEWnCuUfCHi3MGMHA&s"},
    { id: 2, name: "Ноутбук", price: 15000, imageUrl: "https://lh6.googleusercontent.com/6w14yWXR5N9NkZyaT6mCwK0TGexXNFazvUztvrCEv7hM4JXWt6CsN2xeowBLON8k1Hkc6sT91mJDyYHVN_1okxLoMZ116i_qvmQl-IcYrEBwApB5pgvHd2pCqgXxmPL2FhWQ5JcL"},
  ];
  return (
    <div className="container"> 
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