import React from 'react'
import '../styles/CategoryOption.css'

const CatogoryOption = ({ name }) => {
	return (
		<>
		<div className="category-option">
                <p>{name}</p>
            </div>	
		</>
	)
}

export default CatogoryOption