import { useDispatch, useSelector } from "react-redux";
import { favoriteSelect } from "../../../../../../redux/actions/actionCreators/actionCreators";
import { useState, useEffect } from "react";

export default function IconFavorite(props) {
    const [favoritesIcon, setFavoritesIcon] = useState(false);
    const { favorites } = useSelector(state => state.favorites);
    const dispatch = useDispatch();

    useEffect(() => {
        const favorite = favorites.filter(favorite => favorite.id === props.item.id);
        if (favorite[0]) {
            setFavoritesIcon(true)
        }
    }, [favorites, props.item])

    let classFavorite;
    
    if (favoritesIcon) {
        classFavorite = 'bi-heart-fill';
    } else {
        classFavorite = 'bi-heart';
    }

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

    return (
        <i className={`bi favorite-psition ${classFavorite}`} onMouseOver={handleHoverFavorites} onMouseOut={handleHoverFavorites} onClick={handleClickFavorite}></i>
    )
}