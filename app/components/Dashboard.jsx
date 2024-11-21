import React from 'react'
import Sidebar from './Sidebar'
import Hero from './Hero'

function Dashboard() {
	return (
		<div className='flex flex-1'>
			<Sidebar />
			<Hero />
		</div>
	)
}

export default Dashboard