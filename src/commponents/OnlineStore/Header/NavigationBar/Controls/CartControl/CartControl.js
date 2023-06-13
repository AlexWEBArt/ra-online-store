import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function CartControl() {
    const { productsCounter } = useSelector(state => state.cart)
    return (
        <Link to='/ra-online-store/cart'>
            <div className="header-controls-pic header-controls-cart">
                { productsCounter > 0 && <div className="header-controls-cart-full">{productsCounter}</div>}
                <div className="header-controls-cart-menu"></div>
            </div>
        </Link>
    )
}