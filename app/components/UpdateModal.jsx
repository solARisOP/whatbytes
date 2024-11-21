import { useEffect, useState } from "react"
import Modal from "./Modal"
import { useDispatch, useSelector } from "react-redux"
import { setStats } from "../store/slice"

function UpdateModal({closeModal}) {
    const dispatch = useDispatch()
    const data = useSelector(state=>state.user)
    const [formData, setFormData] = useState(data)

    useEffect(() => {
        setFormData(data)
    }, [data])
    
    const updateRank = (e) => {
        setFormData(res=>{
            const obj = {...res, rank: e.target.value}
            return obj
        })
    }

    const updatePercentile = (e) => {
        setFormData(res=>{
            const obj = {...res, percentile: e.target.value}
            return obj
        })
    }

    const updateScore = (e) => {
        setFormData(res=>{
            const obj = {...res, score: e.target.value}
            return obj
        })
    }

    const updateStat = (e) =>{
        e.preventDefault()
        dispatch(setStats(formData))
        window.localStorage.setItem("stats", JSON.stringify(formData))
        closeModal()
    } 

    return (
        <Modal>
            <form className="min-h-fit w-3/4 md:w-3/5 xl:w-2/5 h-10 rounded-md bg-white z-10 flex flex-col p-5 gap-4" onSubmit={updateStat}>

                <div className="flex justify-between items-center">
                    <h1 className="font-bold text-lg">Update scores</h1>
                    <img src="/html.svg" alt="logo" className="h-10" />
                </div>

                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="rounded-full h-6 w-6 bg-blue-950 text-white text-center">1</div>
                        <p>Update your <strong>Rank</strong></p>
                    </div>
                    <input type="number" min={1} max={15} required className="w-1/3 p-2 border border-blue-600 rounded-lg outline-none" value={formData.rank} onChange={updateRank} />
                </div>
                
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="rounded-full h-6 w-6 bg-blue-950 text-white text-center">2</div>
                        <p>Update your <strong>Percentile</strong></p>
                    </div>
                    <input type="number" min={1} max={100} step={0.01} required className="w-1/3 p-2 border border-blue-600 rounded-lg outline-none" value={formData.percentile} onChange={updatePercentile} />
                </div>

                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="rounded-full h-6 w-6 bg-blue-950 text-white text-center">3</div>
                        <p>Update your <strong>Current Score (out of 15)</strong></p>
                    </div>
                    <input type="number" min={0} max={15} required className="w-1/3 p-2 border border-blue-600 rounded-lg outline-none" value={formData.score} onChange={updateScore} />
                </div>

                <div className="flex items-center justify-end gap-5">
                    <button onClick={closeModal} className="border border-blue-950 rounded-lg py-2 px-4 text-bg-blue-950">cancel</button>
                    <button type="submit" className="bg-blue-950 rounded-lg py-2 px-8 text-white"> {`save ->`}</button>
                </div>

            </form>
        </Modal>
    )
}

export default UpdateModal