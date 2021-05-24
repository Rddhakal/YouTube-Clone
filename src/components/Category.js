import React from 'react'
import '../styles/Category.css'
import CategoryOption from './CategoryOption'

const Category = () => {
	return (
		<>
            <div className="category-container">
            <CategoryOption name="All" />
            <CategoryOption name="T-Series" />
            <CategoryOption name="Programming" />
            <CategoryOption name="Air Force" />
            <CategoryOption name="War" />
            <CategoryOption name="Carton" />
            <CategoryOption name="Music" />
            <CategoryOption name="WWE" />
            <CategoryOption name="FIFA" />
            <CategoryOption name="IPL" />
           </div>
  
		</>
	)
}

export default Category