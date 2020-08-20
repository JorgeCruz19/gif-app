import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({ setCategories }) => {
	const [inputValue, setinputValue] = useState('')

	const handleInputValue = (e) => {
		setinputValue(e.target.value)
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		if (inputValue.trim().length > 2) {
			setCategories((cats) => [inputValue, ...cats])
			setinputValue('')
		}
	}
	return (
		<form className="form" onSubmit={handleSubmit}>
			<input className="form-control" type="text" placeholder="Search Gif..." value={inputValue} onChange={handleInputValue} />
		</form>
	)
}
AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired,
}

export default AddCategory
