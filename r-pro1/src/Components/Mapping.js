import { useContext } from "react"
import { Boss } from "./Puplic"
import MiniMapping from "./MiniMapping"


export default function Mapping() {
  const {joky} = useContext(Boss)
  const {ok} = useContext(Boss)
  return (
    
    <ul className="bg-info p-5 m-5 rounded text-center">
      <h5>{joky.length} Birthdays Today</h5>
      <h2>List Components</h2>
    <MiniMapping />
    <button className="btn bg-primary m-5" onClick={()=>ok()}>Clear All</button>
    </ul>
  )
}

