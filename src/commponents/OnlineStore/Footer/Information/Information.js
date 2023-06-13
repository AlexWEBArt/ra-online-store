import { Link } from "react-router-dom";

export default function Information() {
    return (
        <section>
            <h5>Информация</h5>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link to="/ra-online-store/about" className="nav-link">О магазине</Link>
                </li>
                <li className="nav-item">
                    <Link to="/ra-online-store/catalog" className="nav-link">Каталог</Link>
                </li>
                <li className="nav-item">
                    <Link to="/ra-online-store/contacts" className="nav-link">Контакты</Link>
                </li>
            </ul>
        </section>
    )
}