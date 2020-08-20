import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

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
