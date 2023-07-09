import userStorage from "../../userStorage/userStorage";
import { FAVORITE_SELECT } from "../actions/actionTypes/actionTypes";

userStorage.initialStorage();
const prevStorage = userStorage.loadStorage();

const initialStore = {
    favorites: prevStorage.favorites,
}

export default function favoritesReducer(state = initialStore, action) {
    switch(action.type) {
        case FAVORITE_SELECT:
            if (state.favorites.some(favorite => action.payload.item.id === favorite.id)) {
                state.favorites = state.favorites.filter(favorite => action.payload.item.id !== favorite.id);
            } else {
                state.favorites.push(action.payload.item);
            }

            userStorage.addFavorites(state.favorites);
            return {...state};
        default:
            return state;
    }
}