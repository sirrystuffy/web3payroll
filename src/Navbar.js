import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar(){

    return(

        <div>
            <h2 className="Navheader">PayrollEth</h2>

            <nav className="Navbar">
            <Link to="/home">Home</Link>
            <Link to="/account">Account</Link>
            <Link to="/timecards">Timecards</Link>


            </nav>
        </div>


    )


}

export default Navbar;