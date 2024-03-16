import '../styles/Button.css'
import '../styles/Mode.css'
import {NavLink} from "react-router-dom";
import {allModes, setMode} from "../action/actions";

function Mode(){
    allModes()
    let modes = JSON.parse(sessionStorage.getItem("modes"))
    console.log(modes)
    return (
        <div className="Main">
            <table>
                <div className="Mode">
                    <tr>
                        <th className="ModeElement">
                            <h3>Description</h3>
                        </th>
                        <th className="ModeElement">
                            <h3>Expenses per second</h3>
                        </th>
                        <th className="ModeElement">
                            <h3>Generated energy per second</h3>
                        </th>
                        <th className="ModeElement">
                            <h3>Equipment wear and tear per second</h3>
                        </th>
                        <th className="ModeElement">
                            <h3></h3>
                        </th>
                    </tr>
                </div>
                {modes.map(mode =>
                <div className="Mode">
                    <tr>
                        <th className="ModeElement">
                            <p>{mode.description}</p>
                        </th>
                        <th className="ModeElement">
                            <p>{mode.expenses_per_second}</p>
                        </th>
                        <th className="ModeElement">
                            <p>{mode.generated_energy_per_second}</p>
                        </th>
                        <th className="ModeElement">
                            <p>{mode.equipment_wear_and_tear_per_second}</p>
                        </th>
                        <th className="ModeElement">
                            <button className="Button" onClick={()=>setMode(mode.mode)}><NavLink to="/">Set mode</NavLink></button>
                        </th>
                    </tr>
                </div>
                )}
            </table>
        </div>
    )
}

export default Mode