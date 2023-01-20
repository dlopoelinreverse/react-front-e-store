import { createSelector } from '@reduxjs/toolkit';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetFilterStatus, setFilteredProducts, showFilters } from '../../features/filters/filtersSlice';
import FiltersSelection from './FiltersSelection';

const filterProductsByCategory = createSelector(
  (state) => state.products.products,
  (_, categories) => categories,
  (products, categories) => products.filter((product) => categories.includes(product.category)),
)
const filterProductsByPrice = createSelector(
  (state) => state.products.products,
  (_, priceRange) => priceRange,
  (products, priceRange) => products.filter((product) => product.price > priceRange.minPrice && product.price < priceRange.maxPrice),
)

export default function FiltersContainer() {
  const filtersStatus = useSelector(state => state.filters.status);
  const filters = useSelector(state => state.filters.filters);
  const products = useSelector(state => state.products.products);
  
  const dispatch = useDispatch();

 
  const filtredProductsByCategory = useSelector(state => filterProductsByCategory(state, filters.categories.categoriesSelected))
  const filtredProductsByPrice = useSelector(state => filterProductsByPrice(state, filters.price.range))


  
  useEffect(() => {
    if (filtersStatus.filtering) {      
      // switch(filtersStatus.filterTypes){
      //   case ["categories"]: 
        // console.log("cat");        
          dispatch(setFilteredProducts(filtredProductsByCategory))
      //     break;
      //     case "price":
      //       dispatch(setFilteredProducts(filtredProductsByPrice))
      //       break
      //     default:
      //       dispatch(resetFilterStatus())

      // }
      
    } else {
      dispatch(resetFilterStatus())
    }

  }, [filtredProductsByCategory, filtredProductsByPrice, filtersStatus])

 
  return (
    <div className='filters-container'>
      
      {filtersStatus.isOpen ? (
        <>
          <button onClick={() => dispatch(showFilters())}>X</button>
          <FiltersSelection /> 
        </>
      )
      : 
      <button onClick={() => dispatch(showFilters())}>filtrer</button>}
    </div>
  )
}
