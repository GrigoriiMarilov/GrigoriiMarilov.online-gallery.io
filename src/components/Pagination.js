import React, { useEffect, useState } from 'react'

function Pagination(props) {
	//props.field props.func props.pageCount
	const [pages, setPages] = useState([])


	const doublearrow = (name) => {
		return (
			<>
				<svg className={name} width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path className={"arrow-p"} d="M2.71401 6.49988L7.80231 1.62545C8.16797 1.275 8.16797 0.706895 7.80231 0.356587C7.43665 0.00613754 6.84368 0.00613754 6.47787 0.356587L0.727266 5.86567C0.544436 6.04091 0.453125 6.27034 0.453125 6.49988C0.453125 6.72951 0.544614 6.9591 0.727266 7.13426L6.47787 12.6433C6.84368 12.9939 7.43668 12.9939 7.80231 12.6433C8.16797 12.293 8.16797 11.7248 7.80231 11.3745L2.71401 6.49988ZM13.632 11.3745C13.9977 11.7248 13.9977 12.293 13.632 12.6433C13.2663 12.9939 12.6735 12.9939 12.3075 12.6433L6.55693 7.13428C6.3741 6.95913 6.28293 6.72953 6.28293 6.49991C6.28293 6.27037 6.37427 6.04077 6.55693 5.8657L12.3075 0.356587C12.6735 0.00613754 13.2663 0.00613754 13.632 0.356587C13.9977 0.706895 13.9977 1.27498 13.632 1.62545L8.54358 6.49988L13.632 11.3745Z" />
				</svg>
			</>)
	}
	const arrow = (name) => {
		return (
			<>
				<svg className={name} width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path className='arrow-p' d="M0.932837 7.13428L6.73159 12.6433C7.10046 12.9939 7.69852 12.9939 8.06721 12.6433C8.43593 12.293 8.43593 11.7248 8.06721 11.3745L2.93621 6.49991L8.06706 1.62545C8.43578 1.275 8.43578 0.706895 8.06706 0.356587C7.69834 0.00613754 7.10031 0.00613754 6.73144 0.356587L0.932687 5.86567C0.748326 6.04091 0.65625 6.27034 0.65625 6.49988C0.65625 6.72953 0.748506 6.95913 0.932837 7.13428Z" />
				</svg>

			</>)
	}
	function run(count) {
		let arr = []
		for (let i = 1; i <= count; i++) {
			arr.push(i)
		}
		return setPages(arr)
	}
	useEffect(() => {
		run(props.pageCount)
	}, [props.pageCount])
	return (
		<div className='pagination-block'>
			<button className='cell switch' onClick={() => props.func(pages[0])} disabled={props.field === 1 ? true : false}>{doublearrow("left")}	</button>
			<button className='cell switch' onClick={() => props.func(prev => prev - 1)} disabled={props.field === 1 ? true : false}>{arrow("left")}</button>
			<div className=' page-controller'>
				{
					pages.map((el, index) => {
						return (
							<span onClick={() => props.func(el)} key={el} className={props.field === el ? "cell active-cell" : "cell"} style={{ display: "inline-block" }}><span className={props.field === el ? "page-number active-n" : "page-number"}>{el}</span></span>
						)
					})
				}
			</div>
			<button className='cell switch'
				onClick={
					() => props.func(prev => prev + 1)
				}
				disabled={props.field === pages[pages.length - 1] ? true : false}>{arrow("right")}</button>
			<button className='cell switch' onClick={() => props.func(pages[pages.length - 1])} disabled={props.field === pages[pages.length - 1] ? true : false}>{doublearrow("right")}</button>
		</div>
	)
}

export default Pagination