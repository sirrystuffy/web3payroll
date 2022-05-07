import { Link } from "react-router-dom";
import "./Navbar.css"
import logo from "./GPLogo.png"

function Navbar(){

    return (

        <div>
            <nav>
                <ul>
                    <img className="Logo" src={logo} alt="GlobalPay (Home)"></img>
                    <div className="Links">
                        <li><a href="Home">Home</a></li>
                        <li><a href="Account">Account</a></li>
                        <li><a href="Timecards">Timecards</a></li>
                    </div>
                </ul>

            </nav>
        </div>

    )
}

export default Navbar;