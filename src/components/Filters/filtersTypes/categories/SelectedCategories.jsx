import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { removeSelectedCategories, resetFilterStatus } from '../../../../features/filters/filtersSlice'

export default function SelectedCategories({selectedCategories}) {
    const dispatch = useDispatch()
    
    useEffect(() => {
        selectedCategories.length === 0 && dispatch(resetFilterStatus())
    }, [selectedCategories])
  return (
    <ul className='slected-categories-container'>
        {selectedCategories.map((categorie) => <li key={categorie} className="categorie-badge">
        {categorie}<span onClick={() => dispatch(removeSelectedCategories(categorie))}>X</span>
        </li>)}
    </ul>
  )
}
