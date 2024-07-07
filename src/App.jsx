import { useLoaderData } from "react-router-dom";
import "./App.css";
import ProductCurd from "./components/ProductCurd";

function App() {
  const lodedProducts = useLoaderData();
  const [products, setProducts] = lodedProducts;
  return (
    <div>
      <h1 className="text-5xl font-bold">Products store:{products.length}</h1>
      <div className="grid grid-cols-2 gap-6">
        {lodedProducts.map((product) => (
          <ProductCurd key={product._id} products={products} setProducts={setProducts} product={product}></ProductCurd>
        ))}
      </div>
    </div>
  );
}

export default App;
