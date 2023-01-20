import React from 'react'
import FiltersContainer from '../components/Filters/FiltersContainer'
import Navigation from '../components/Navigation'
import ProductsList from '../components/Products/ProductsList'

export default function Home() {
  return (
    <div className="home page">
        <Navigation/>
        <div className="main">
        <FiltersContainer />
        <ProductsList />
        </div>
    </div>
  )
}
