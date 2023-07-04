import { useDispatch, useSelector } from "react-redux";
import { favoriteSelect } from "../../../../../../redux/actions/actionCreators/actionCreators";

export default function IconFavorite(props) {
    const { favorites } = useSelector(state => state.favorites);
    const dispatch = useDispatch();

    const toggleHeartClass = (element) => {
        if (element.classList.contains('bi-heart')) {
            element.classList.replace('bi-heart', 'bi-heart-fill');
        } else {
            element.classList.replace('bi-heart-fill', 'bi-heart');
        }
    }

    const handleHoverFavorites = (e) => {
        toggleHeartClass(e.target);
    }

    const handleClickFavorite = (e) => {
        toggleHeartClass(e.target);
        
        dispatch(favoriteSelect(props.item))
    }

    let classFavorite;
    const favorite = favorites.filter(favorite => favorite.id === props.item.id);
    
    if (favorite[0]) {
        classFavorite = 'bi-heart-fill';
    } else {
        classFavorite = 'bi-heart';
    }

    return (
        <i className={`bi favorite-psition ${classFavorite}`} onMouseOver={handleHoverFavorites} onMouseOut={handleHoverFavorites} onClick={handleClickFavorite}></i>
    )
}