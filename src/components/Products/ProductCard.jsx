import React from 'react'

export default function ProductCard({...props}) {
    const {product} = props;
    const {title, price, description, image, rating} = product
  return (
    <li className='product-card'>
      <h3>{title}</h3>
      <img src={image} alt={title} />
    </li>
  )
}
