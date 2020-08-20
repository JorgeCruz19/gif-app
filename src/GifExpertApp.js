import React, { useState } from 'react'
import AddCategory from './Components/AddCategory'
import GifGrid from './Components/GifGrid'

const GifExpertApp = () => {
	const [categories, setCategories] = useState([])

	return (
		<>
			<div className="container">
				<h1 className="title">GifExpertApp</h1>
				<AddCategory setCategories={setCategories} />
				{categories.map((category) => (
					<GifGrid key={category} category={category} />
				))}
			</div>
		</>
	)
}

export default GifExpertApp
