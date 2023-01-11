import React from 'react'
import Select from './Select'

function FilterBar(props) {
	return (
		<div className='filter-bar'>
			<>
				<input className='input filter name-input' value={props.field[1]} onChange={(e) => props.f[1](e.target.value)} placeholder={"Name"}></input>
				<Select key={"Author"} name={"Author"} list={props.authors} field={props.field[2]} f={props.f[2]} />
				<Select key={"Location"} name={"Location"} list={props.locations} field={props.field[3]} f={props.f[3]} />
				<Select key={"Created"} name={"Created"} field={props.field[4]} f={props.f[4]} />

			</>
		</div>
	)
}

export default FilterBar