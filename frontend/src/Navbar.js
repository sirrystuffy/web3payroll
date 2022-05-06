import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar(){

    return (

        <div>
            <nav>
                <ul>
                    <div className="Logo"><a href="Home"><h2>GlobalPay</h2></a>
                    </div>
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