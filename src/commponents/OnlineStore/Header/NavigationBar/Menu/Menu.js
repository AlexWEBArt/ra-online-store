import { NavLink } from "react-router-dom";

export default function Menu() {
    return (
        <div className="collapse navbar-collapse" id="navbarMain">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/ra-online-store/">Главная</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/ra-online-store/catalog/1">Каталог</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/ra-online-store/about">О магазине</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/ra-online-store/contacts">Контакты</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/ra-online-store/favorites">Отложенные</NavLink>
                </li>
              </ul>
        </div>
    )
}