import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setPriceRange } from '../../../../features/filters/filtersSlice';
import { findMaxPrice, findMinPrice } from '../../../../utils/utils';

export default function Prices() {
    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch()
    const minPrice = useRef()
    const maxPrice = useRef()

    // console.log(products.filter(product => product.price > 20 && product.price < 50))

    const handlePriceChange = () => {
        const priceRange = {
            minPrice: minPrice.current.value*1,
            maxPrice: maxPrice.current.value*1
        }
        dispatch(setPriceRange(priceRange))
    }

 
  return (
    <div className='prices-container'>
        <div className="min-container">
            <label htmlFor="minPrice">Minimum</label>
            <br />
            <input type="number" name='minPrice' id='minPrice' ref={minPrice} defaultValue={findMinPrice(products)} min={findMinPrice(products)} max={findMaxPrice(products)} onChange={handlePriceChange}/>
        </div>
        <div className="max-container">
            <label htmlFor="maxPrice">Maximum</label>
            <br />
            <input type="number" name='maxPrice' id='maxPrice' ref={maxPrice} defaultValue={findMaxPrice(products)} min={findMinPrice(products)} max={findMaxPrice(products)} onChange={handlePriceChange}  />
        </div>       
    </div>
  )
}
