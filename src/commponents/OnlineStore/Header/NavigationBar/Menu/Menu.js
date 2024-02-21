import { NavLink } from "react-router-dom";

export default function Menu() {
  const width = window.innerWidth
  console.log(width)
  const handleClickMenu = (e) => {
    const menu = e.target.closest('.dropdown').querySelector('.navbar-nav')
    menu.classList.toggle('dropdown-menu')
    menu.classList.toggle('show')
  }

  const handleCloseMenu = (e) => {
    e.target.closest('.dropdown').querySelector('.navbar-nav').classList.remove('dropdown-menu')
    e.target.closest('.dropdown').querySelector('.navbar-nav').classList.remove('show')
  }
  return (
    <div className="collapse navbar-collapse show" id="navbarMain">
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" onClick={handleClickMenu}>
            Меню
          </button>
          <ul className="navbar-nav mr-auto" aria-labelledby="dropdownMenuButton1">
            <li className="nav-item" onClick={handleCloseMenu}>
              <NavLink className="nav-link" to="/ra-online-store/">Главная</NavLink>
            </li>
            <li className="nav-item" onClick={handleCloseMenu}>
              <NavLink className="nav-link" to="/ra-online-store/catalog/1">Каталог</NavLink>
            </li>
            <li className="nav-item" onClick={handleCloseMenu}>
              <NavLink className="nav-link" to="/ra-online-store/about">О магазине</NavLink>
            </li>
            <li className="nav-item" onClick={handleCloseMenu}>
              <NavLink className="nav-link" to="/ra-online-store/contacts">Контакты</NavLink>
            </li>
            <li className="nav-item" onClick={handleCloseMenu}>
              <NavLink className="nav-link" to="/ra-online-store/favorites">Отложенные</NavLink>
            </li>
          </ul>
        </div>
    </div>
  )
}