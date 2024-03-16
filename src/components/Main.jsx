import '../styles/Workshop.css'
import {useState} from "react";
import watch from "../action/actions";
import {allWorkshops} from "../action/actions";
import Model from "../components/Model";

function Main(){
    allWorkshops()
    let data = JSON.parse(sessionStorage.getItem("workshops"))
    console.log(data)
    const [modelActive, setModelActive] = useState(false)
    const [lastRepair, setLastRepair] = useState("")
    const [nextRepair, setNextRepair] = useState("")
    return (
        <div className="Main">
            <table>
                <div className="Workshop">
                    <tr>
                        <th className="WorkshopElement">
                            <h3>Name of Workshop</h3>
                        </th>
                        <th className="WorkshopElement">
                            <h3>Expenses</h3>
                        </th>
                        <th className="WorkshopElement">
                            <h3>Condition</h3>
                        </th>
                        <th className="WorkshopElement">
                            <h3>Operating Mode</h3>
                        </th>
                   </tr>
                </div>
                {data.workshops.map(workshop =>
                <div className="Workshop" onClick={()=>watch(workshop.lastRepair, setLastRepair, workshop.nextRepair, setNextRepair, setModelActive)}>
                    <tr>
                        <th className="WorkshopElement">
                            <p>{workshop.name}</p>
                        </th>
                        <th className="WorkshopElement">
                            <p>{workshop.expenses}</p>
                        </th>
                        <th className="WorkshopElement">
                            <p>{workshop.condition}</p>
                        </th>
                        <th className="WorkshopElement">
                            <p>{workshop.mode}</p>
                        </th>
                    </tr>
                </div>
                )}
            </table>
            <p>{"there are " + data.resources + " tons of fuel left"}</p>
            <p>{"total energy generated: " + data.energy}</p>
            <Model active={modelActive} setActive={setModelActive} lastRepair={lastRepair} nextRepair={nextRepair}/>
        </div>
    )
}

export default Main