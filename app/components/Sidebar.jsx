import { MdDashboard } from "react-icons/md";
import { TfiMedallAlt } from "react-icons/tfi";
import { LuFile } from "react-icons/lu";

function Sidebar() {
	return (
		<div className='border-r-slate-200 border-r w-60 hidden md:block'>
			<div className="mt-10 flex flex-col items-center w-full gap-5 pr-5">
				<div className='flex gap-5 items-center w-full cursor-pointer  h-12'>
					<MdDashboard size={25} className="ms-5" />
					<p>Dashboard</p>
				</div>
				<div className='flex gap-5 items-center w-full cursor-pointer h-12 text-blue-700 bg-slate-100 rounded-r-full'>
					<TfiMedallAlt size={25} className="ms-5" />
					<p>Skill Test</p>
				</div>
				<div className='flex gap-5 items-center w-full cursor-pointer h-12'>
					<LuFile size={25} className="ms-5" />
					<p>Internship</p>
				</div>
			</div>
		</div>
	)
}

export default Sidebar