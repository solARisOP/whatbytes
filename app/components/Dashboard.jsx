import React from 'react'
import Sidebar from './Sidebar'
import Hero from './Hero'

function Dashboard() {
	return (
		<div className='flex h-full w-full'>
			<Sidebar />
			<Hero />
		</div>
	)
}

export default Dashboard