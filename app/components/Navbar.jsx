function Navbar() {
	return (
		<>
			<nav className='flex p-5 justify-between items-center'>
				<div className='flex items-center gap-3'>
					<img src='./logo.svg' alt="logo" className='h-10' />
					<h1 className='text-2xl font-bold '> Whatbytes </h1>
				</div>

				<div className='border rounded-xl p-2 flex items-center gap-3'>
					<img src='./profilePic.jpg' alt="" className="h-7 rounded-full" />
					<h2 className="text-lg">Nitish Rao</h2>
				</div>
			</nav>
			<hr />
		</>
	)
}

export default Navbar