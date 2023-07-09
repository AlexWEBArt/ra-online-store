import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { favoriteSelect } from "../../../../../../redux/actions/actionCreators/actionCreators";

export default function CartItem(props) {
    const { id, title, price } = props.item;
    const dispatch = useDispatch();
    
    const handleClickRemoveCartItem = () => {
        dispatch(favoriteSelect({id}));
    }

    return (
        <tr>
            <td>{props.index + 1}</td>
            <td><Link to={`/ra-online-store/product/${id}`}>{title}</Link></td>
            <td>{price}</td>
            <td><button className="btn btn-outline-danger btn-sm" onClick={handleClickRemoveCartItem}>Убрать</button></td>
        </tr>
    )
}