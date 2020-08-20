import React from 'react'
import GifItem from './GifGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

const GifGrid = ({ category }) => {
	const { data: images, loading } = useFetchGifs(category)

	return (
		<>
			<h3 className="gif-title animate__animated animate__bounce">{category}</h3>
			{loading && 'Cargando..'}
			<div className="card-grid animate__animated animate__fadeIn">
				{images.map((img) => (
					<GifItem key={img.id} {...img} />
				))}
			</div>
		</>
	)
}

export default GifGrid
