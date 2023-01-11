import axios from 'axios'
import React, { useEffect, useState } from 'react'
import FilterBar from '../components/FilterBar'
import Header from '../components/Header'
import Pagination from '../components/Pagination'


function Main() {
	const [Page, setPage] = useState(1)
	const [Q, setQ] = useState("")
	const [Author, setAuthor] = useState("")
	const [Location, setLocation] = useState("")
	const [Created, setCreated] = useState({ _gte: "", _lte: "" })
	const [paintings, setPaintings] = useState([])
	const [authors, setAuthors] = useState([])
	const [locations, setLocations] = useState([])
	const [pages, setPages] = useState(1)
	useEffect(() => {
		if (authors.length === 0) {
			axios.get("https://test-front.framework.team/authors").then((res) => {
				setAuthors(res.data)
			})
		}
		if (locations.length === 0) {
			axios.get("https://test-front.framework.team/locations").then((res) => {
				setLocations(res.data)
			})
		}
	}, [authors, locations])
	useEffect(() => {

		let options = {
			_page: Page,
			q: Q,
			authorId: Author,
			locationId: Location,
			created_gte: Created._gte,
			created_lte: Created._lte,
			_limit: 12
		}
		if (Author === "") {
			delete options.authorId
		}
		if (Location === "") {
			delete options.locationId
		}
		if (Q === "") {
			delete options.q
		}
		if (Created._gte === "") {
			delete options.created_lte
		}
		if (Created._lte === "") {
			delete options.created_lte
		}
		axios.get("https://test-front.framework.team/paintings/", {
			params: options
		}).then((res) => {
			if (res.data.length > 0) {
				setPaintings(res.data)
				if ((res.headers["x-total-count"] - res.headers["x-total-count"] / 12) > 0) {
					setPages(parseInt((res.headers["x-total-count"] / 12) + 1))
				} else {
					setPages(parseInt((res.headers["x-total-count"] / 12)))
				}
			} else {
				setPage(1)
			}
		})
	}, [Page, Q, Author, Location, Created])

	return (
		<div className='container'>
			<Header />
			<FilterBar authors={authors} locations={locations} field={[Page, Q, Author, Location, Created]} f={[setPage, setQ, setAuthor, setLocation, setCreated]} />

			<div className='pictures'>
				{
					paintings.map((el => {
						if (el) {
							return (
								<React.Fragment key={el.id}>
									<div className='picture'>
										<img className='img' src={"https://test-front.framework.team" + el.imageUrl} alt=""></img>
										<div className='picture-info'>
											<span className='picture-name'>{el.name}</span>
											<div className='picture-stat'> <span className='stat-name author'>{"Author:"}</span><span className='data'>{authors[el.authorId - 1].name || "unknow"}</span></div>
											<div className='picture-stat'><span className='stat-name'>{"Location:"}</span> <span className='data'>{locations[el.locationId - 1].location || "unknow"}</span></div>
											<div className='picture-stat'><span className='stat-name'>{"Created:"}</span> <span className='data'>{el.created || "unknow"}</span></div>
										</div>
									</div>
								</React.Fragment>)
						}
						else {
							return null
						}

					}))
				}
			</div>
			<Pagination field={Page} func={setPage} pageCount={pages} />
		</div>
	)
}

export default Main