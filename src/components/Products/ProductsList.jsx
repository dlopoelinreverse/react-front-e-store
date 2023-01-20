import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'

export default function ProductsList() {
  const [productsList, setProductsList] = useState([])
  const products = useSelector(state => state.products.products)
  // const filters = useSelector(state => state.filters.filters)
  const filteredProducts = useSelector(state => state.filters.filteredProducts)
    
  useEffect(() => {
      // filters.filteredData ? setProductsList(filters.filteredData) : setProductsList(products);

      filteredProducts ? setProductsList(filteredProducts) : setProductsList(products);
  }, [filteredProducts, products])
  return (
    <ul className="products-list">
        {productsList.map(product =>  <ProductCard key={product.id} product={product}/> )}
    </ul>
  )
}
