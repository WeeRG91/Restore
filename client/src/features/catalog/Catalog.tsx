import { useFetchProductsQuery } from "./catalog-api";
import ProductList from "./ProductList";

function Catalog() {
  const { data: products, isLoading } = useFetchProductsQuery();

  if (isLoading || !products) return <div>Loading...</div>;

  return <ProductList products={products} />;
}

export default Catalog;
