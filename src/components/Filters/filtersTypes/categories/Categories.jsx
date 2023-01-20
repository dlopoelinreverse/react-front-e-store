import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addSelectedCategories } from '../../../../features/filters/filtersSlice';
import SelectedCategories from './SelectedCategories';

export default function Categories() {
  const categories = useSelector(state => state.filters.filters.categories);
  const selectedCategories = useSelector(state => state.filters.filters.categories.categoriesSelected);
  const dispatch = useDispatch();

  const handleSelect = (e) => {
    const {value} = e.target;
    if (!selectedCategories.includes(value)) dispatch(addSelectedCategories(value))
  };
  return (
    <div className="categories-container">
      <SelectedCategories selectedCategories={selectedCategories} />
      <select onChange={handleSelect} defaultValue="">
        <option value="" disabled>Trouvez votre catégorie</option>
        {categories.categories.map((category, id) => (
          <option key={id} value={category} disabled={selectedCategories.includes(category)}>{category}</option>
        ))}
      </select>
    </div>
  )
}
