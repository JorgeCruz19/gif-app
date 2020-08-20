export const getGifs = async (category) => {
	const API_URL = 'QvOWAKK2Tqq2PSpYOdWapfm0V1yOg5vT'
	const limit = 10
	const res = await fetch(`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${limit}&api_key=${API_URL}`)
	const { data } = await res.json()

	const gifs = data.map((img) => {
		return {
			id: img.id,
			title: img.title,
			url: img.images?.downsized_medium.url,
		}
	})

	return gifs
}
