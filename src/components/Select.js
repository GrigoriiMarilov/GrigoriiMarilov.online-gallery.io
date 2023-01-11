import React, { useState } from 'react'

function Select(props) {
	const [value, setValue] = useState(props.name)
	const [display, setDisplay] = useState(false)
	const list = props.list || []


	const show = () => {
		if (display) {
			setDisplay(false)
		} else {
			setDisplay(true)
		}
	}
	const close = () => {
		setValue(props.name)
		props.f("")
	}
	const change = (e) => {
		setValue(e.target.innerText || e.target.firstChild.innerText)
		props.f(e.target.id)
		setDisplay(false)
	}
	return (
		<div className={display ? 'select select-active ' + props.name + " active-" + props.name : "select " + props.name} >
			<div className={display ? 'select-head select-head-active' : "select-head"} > <span className='input-name'>{value}</span>
				<svg onClick={close} style={value !== props.name ? { display: "block" } : { display: "none" }} className='cross' width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M2.36474 1.21893C2.07355 0.924339 1.60144 0.924339 1.31025 1.21893C1.01906 1.51351 1.01906 1.99113 1.31025 2.28572L3.94492 4.95114L1.21644 7.71146C0.92525 8.00604 0.92525 8.48366 1.21644 8.77825C1.50763 9.07284 1.97974 9.07284 2.27093 8.77825L4.99941 6.01793L7.72779 8.77815C8.01898 9.07274 8.49109 9.07274 8.78228 8.77815C9.07347 8.48356 9.07347 8.00594 8.78228 7.71136L6.0539 4.95114L8.68848 2.28582C8.97966 1.99124 8.97967 1.51361 8.68848 1.21903C8.39729 0.92444 7.92517 0.924441 7.63399 1.21903L4.99941 3.88434L2.36474 1.21893Z" fill="#555555" />
				</svg>

				{
					display ?
						<svg onClick={show} className="svg-arrow" style={{ transform: "rotate(180deg)" }} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path className='arrow' d="M9.67861 1.8337L5.77064 5.68539C5.34503 6.10487 4.65497 6.10487 4.22936 5.68539L0.321394 1.8337C-0.365172 1.15702 0.121082 -8.3659e-08 1.09203 0L8.90797 6.73452e-07C9.87892 7.57113e-07 10.3652 1.15702 9.67861 1.8337Z" fill={localStorage.getItem("theme") === "dark" ? "white" : "black"} fillOpacity="0.3" />
						</svg>
						:
						<svg onClick={show} className="svg-arrow" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path className='arrow' d="M9.67861 1.8337L5.77064 5.68539C5.34503 6.10487 4.65497 6.10487 4.22936 5.68539L0.321394 1.8337C-0.365172 1.15702 0.121082 -8.3659e-08 1.09203 0L8.90797 6.73452e-07C9.87892 7.57113e-07 10.3652 1.15702 9.67861 1.8337Z" fill={localStorage.getItem("theme") === "dark" ? "white" : "black"} fillOpacity="0.3" />
						</svg>

				}
			</div>
			<div className='options' style={Object.assign(display ? { display: "block" } : { display: "none" }, props.name === "Created" ? { margin: "0 0 0 0" } : { margin: "0 8px 0 0" })}>
				{
					props.name === "Created" ?
						<><div className='time-inputs'>
							<input maxLength="4" type={"year"} placeholder="from" className='time-select' value={props.field._gte} onChange={(e) => props.f(prev => ({ ...prev, _gte: e.target.value }))}></input>
							<span className='whiteline'></span>
							<input maxLength="4" type={"year"} placeholder="before" className='time-select' value={props.field._lte} onChange={(e) => props.f(prev => ({ ...prev, _lte: e.target.value }))}></input>
						</div>
						</>
						:
						list.map((elem) => {
							return (
								<div onClick={change} className='opt' key={elem.id + props.name} id={elem.id}><span className='opt-span'>{elem.name || elem.location}</span></div>
							)
						}
						)

				}
			</div>
		</div >
	)
}

export default Select