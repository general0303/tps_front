import '../styles/Menu.css'
import {NavLink} from "react-router-dom";

function Menu() {
    return (
        <div className="Menu">
            <div className="Menu-Content">
                <ul>
                    <li><NavLink to="/">Current condition</NavLink></li>
                    <li><NavLink to="/modes">Operating modes</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Menu;