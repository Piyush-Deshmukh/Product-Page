import { useState } from "react";
import Data from "./utils/Data";
import Cards from "./components/Cards";
import Buttons from "./components/Buttons";
import SortProducts from "./components/SortProducts";
import { Container } from "react-bootstrap";

const App = () => {
  const [products, SetProducts] = useState(Data);
  const productCategories = [ ...new Set(Data.map(item => item.category))];

  const filterItems = (cat) => {
    const newProducts = Data.filter(item => item.category === cat);
    SetProducts(newProducts);
  }

  return (
    <div style={{ backgroundColor: 'blueviolet' }}>
      <h1 className="text-center pt-2">Products Page</h1>
      <Container className="main-section pt-5">
        <Buttons 
          productCategories={productCategories}
          filterItems={filterItems}
          SetProducts={SetProducts}
        />
        <SortProducts products={products} SetProducts={SetProducts} />
        <Cards products={products} />
      </Container>
    </div>
  )
}
export default App