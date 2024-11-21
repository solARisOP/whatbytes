import { useEffect } from "react"
import Dashboard from "./Dashboard"
import Navbar from "./Navbar"
import { useDispatch } from "react-redux"
import { setStats } from "../store/slice"

function All() {
	const dispatch = useDispatch()

	useEffect(() => {
		const data = JSON.parse(window.localStorage.getItem("stats"))
		if (!data) {
			window.localStorage.setItem("stats", JSON.stringify({ rank: 4, percentile: 70, score: 8 }))
			dispatch(setStats({ rank: 4, percentile: 70, score: 8 }))
		}
		else dispatch(setStats(data))
	}, [])

	return (
		<div className="flex flex-col w-screen h-screen overflow-auto">
			<Navbar />
			<Dashboard />
		</div>
	)
}

export default All
