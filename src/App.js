import "./App.css";

import Header from "./components/header";
import ProductListPage from "./components/productListPage";
import ProductCard from "./components/productCard";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="pageName">
        <h1>Products</h1>
      </div>

      <ProductListPage>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductListPage>
    </div>
  );
}

export default App;
