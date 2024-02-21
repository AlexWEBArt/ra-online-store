import { Link } from "react-router-dom";
import Menu from "./Menu/Menu";
import Controls from "./Controls";
import logo from "../../../../img/header-logo.png"

export default function NavigationBar() {

    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <Link className="header-logo-link" to='/ra-online-store'>
                <img src={logo} alt="Bosa Noga"></img>
            </Link>
            {/* <div className="collapse navbar-collapse"> */}
                <Menu />
            {/* </div> */}
            <div>
                <Controls />
            </div>
        </nav>
    )
}