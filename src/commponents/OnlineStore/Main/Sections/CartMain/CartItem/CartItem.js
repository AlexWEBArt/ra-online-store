import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../../../../../redux/actions/actionCreators/actionCreators";
import { Link } from "react-router-dom";

export default function CartItem(props) {
    const { id, title, price } = props.item.product;
    const { counter, size } = props.item
    const dispatch = useDispatch()

    const handleClickRemoveCartItem = (e) => {
        dispatch(removeFromCart({id, price, counter}))
    }

    return (
        <tr>
            <td scope="row">{props.index + 1}</td>
            <td><Link to={`/ra-online-store/product/${id}`}>{title}</Link></td>
            <td>{size}</td>
            <td>{counter}</td>
            <td>{price}</td>
            <td>{price * counter}</td>
            <td><button className="btn btn-outline-danger btn-sm" onClick={handleClickRemoveCartItem}>Удалить</button></td>
        </tr>
    )
}