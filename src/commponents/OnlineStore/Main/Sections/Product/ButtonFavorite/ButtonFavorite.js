import { useDispatch, useSelector } from "react-redux"
import { favoriteSelect } from "../../../../../../redux/actions/actionCreators/actionCreators";

export default function ButtonFavorite(props) {
    const { favorites } = useSelector(state => state.favorites);
    const dispatch = useDispatch();

    const handleClickProductFavorite = () => {
        dispatch(favoriteSelect(props.item))
    }

    const button = favorites.some(favorite => favorite.id === props.item.id)
        ?
        (<button className="btn btn-outline-danger btn-sm" onClick={handleClickProductFavorite}>Убрать</button>)
        : 
        (<button className="btn btn-outline-primary btn-sm" onClick={handleClickProductFavorite}>Добавить</button>);
    
    return (
        button
    )
}