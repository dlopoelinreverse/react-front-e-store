import React from 'react'
import Categories from './filtersTypes/categories/Categories'
import Prices from './filtersTypes/prices/Prices'

export default function FiltersSelection() {
    // const filters = useSelector(state => state.filters.filters)
  return (
    <div className='filters-selection-container'>
        <Categories />
        <Prices />
    </div>
  )
}
