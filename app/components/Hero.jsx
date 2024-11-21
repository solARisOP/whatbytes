import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PercentileGraph from "./PercentileGraph";
import UpdateModal from "./UpdateModal";
import { useState } from "react";
import { useSelector } from "react-redux";

function Hero() {
    const data = useSelector(state => state.user)
    const [modalOpen, setModalOpen] = useState(0)

    const openModal = () => setModalOpen(1)
    const closeModal = () => setModalOpen(0)

    return (
        <>
        <div className="px-8 flex-1">
            <h3 className="my-5">Skill Test</h3>

            <div className="flex flex-wrap gap-5">

                <div style={{ flex: "1 1 10%" }} className="flex flex-col gap-6 mb-5">

                    <div className="flex justify-between items-center border border-slate-200 rounded-md p-5 gap-3">
                        <img src="./html.svg" alt="" className="h-20" />
                        <div className="flex flex-col justify-between">
                            <h2 className="text-lg font-bold">
                                Hyper Text Markup Language
                            </h2>
                            <p className="font-thin"> Questions: 15 | Duration: 15 mins | Submitted on 5 June 2021 </p>
                        </div>
                        <button className="bg-blue-950 rounded-lg py-2 px-4 text-white" onClick={openModal}>Update</button>
                    </div>

                    <div className="border border-slate-200 rounded-md p-5">
                        <h2 className="text-lg font-bold mb-2">
                            Quick Statistics
                        </h2>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-5 items-center px-3">
                                <div className="h-10 w-10 rounded-full bg-slate-100 flex justify-center items-center">
                                    <img src="./cup.svg" alt="" className="h-6" />
                                </div>
                                <div>
                                    <h1 className="font-bold">{data.rank}</h1>
                                    <p className="font-thin text-sm">YOUR RANK</p>
                                </div>
                            </div>

                            <div className="border-r border-r-slate-200 h-14" />

                            <div className="flex gap-5 items-center px-3">
                                <div className="h-10 w-10 rounded-full bg-slate-100 flex justify-center items-center">
                                    <img src="/calendar.svg" alt="" className="h-6" />
                                </div>
                                <div>
                                    <h1 className="font-bold">{data.percentile}%</h1>
                                    <p className="font-thin text-sm">PERCENTILE</p>
                                </div>
                            </div>

                            <div className="border-r border-r-slate-200 h-14" />

                            <div className="flex gap-5 items-center px-3">
                                <div className="h-10 w-10 rounded-full bg-slate-100 flex justify-center items-center">
                                    <img src="/check.svg" alt="" className="h-6" />
                                </div>
                                <div>
                                    <h1 className="font-bold">{data.score}/15</h1>
                                    <p className="font-thin text-sm">CORRECT ANSWERS</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border border-slate-200 rounded-md p-5 flex flex-col gap-5">
                        <h2 className="text-lg font-bold mb-2">
                            Quick Statistics
                        </h2>

                        <p>
                            <strong>You scored {data.percentile} percentile</strong> which is lower than the average percentile 72% of all the engineers who took this assessment
                        </p>

                        <PercentileGraph />
                    </div>
                </div>

                <div className="flex-1 flex flex-col gap-6 mb-5">

                    <div className="flex flex-col border border-slate-200 rounded-md p-5 gap-3">
                        <h2 className="text-lg font-bold">
                            Syllabus Wise Analysis
                        </h2>

                        <div className="flex flex-col gap-4">
                            <p className="text-lg font-light">HTML Tools, Forms, History</p>
                            <div className="flex gap-5 items-center">
                                <div className="flex flex-1 rounded-full h-2 bg-blue-100">
                                    <div className="w-[80%] bg-blue-500 rounded-full" />
                                </div>
                                <p className="text-blue-500 font-bold">80%</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <p className="text-lg font-light">Tags & References in HTML</p>
                            <div className="flex gap-5 items-center">
                                <div className="flex flex-1 rounded-full h-2 bg-orange-100">
                                    <div className="w-[60%] bg-orange-500 rounded-full" />
                                </div>
                                <p className="text-orange-500 font-bold">60%</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <p className="text-lg font-light">Tables & References in HTML</p>
                            <div className="flex gap-5 items-center">
                                <div className="flex flex-1 rounded-full h-2 bg-red-100">
                                    <div className="w-[24%] bg-red-500 rounded-full" />
                                </div>
                                <p className="text-red-500 font-bold">24%</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <p className="text-lg font-light">Tables & CSS Basics</p>
                            <div className="flex gap-5 items-center">
                                <div className="flex flex-1 rounded-full h-2 bg-green-100">
                                    <div className="w-[96%] bg-green-500 rounded-full" />
                                </div>
                                <p className="text-green-500 font-bold">96%</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col border border-slate-200 rounded-md p-5 gap-3 items-center">
                        <div className="flex justify-between items-center w-full">
                            <h2 className="text-lg font-bold">
                                Question Analysis
                            </h2>
                            <h2 className="text-lg font-bold text-blue-500">{data.score}/15</h2>
                        </div>

                        <p><strong>You scored {data.score} question correct out of 15.</strong> However it still needs some improvements</p>

                        <div className="w-40 h-40 relative">
                            <CircularProgressbar value={data.score / 15 * 100}
                                styles={buildStyles({
                                    rotation: 0.25,
                                    pathColor: "#4285F4",
                                    trailColor: "#D6E3F3",
                                })}
                                strokeWidth={15}
                                counterClockwise
                            />

                            <img
                                src="/bullseye.svg"
                                alt="icon"
                                className="h-8 absolute top-16 left-16"
                            />
                        </div>

                    </div>
                </div>

            </div>
        </div>
        {modalOpen ? <UpdateModal closeModal={closeModal} /> : null}
        </>
    )
}

export default Hero