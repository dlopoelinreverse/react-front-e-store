import Routes from "./Routes";
import { useEffect } from "react";
import { fetchData } from "./utils/fetcher";
import { useDispatch } from "react-redux";
import { initProducts } from "./features/products/productsSlice";
import { initCategoriesFilters } from "./features/filters/filtersSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData("https://fakestoreapi.com/products").then((products) =>
      dispatch(initProducts(products))
    );
    fetchData("https://fakestoreapi.com/products/categories").then(
      (categories) => dispatch(initCategoriesFilters(categories))
    );
  }, []);
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
