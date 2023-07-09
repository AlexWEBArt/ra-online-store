import { useSelector } from "react-redux";
import FavoriteItem from "./FavoriteItem/FavoriteItem";
import { useEffect } from "react";

export default function Favorites() {
    const { favorites } = useSelector(state => state.favorites);
    
    useEffect(() => {
        console.log(favorites)
    }, [favorites])
    
    return (
        <section className="favorites">
            <h2 className="text-center">Отложенные</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Название</th>
                        <th scope="col">Стоимость</th>
                        <th scope="col">Избранное</th>
                    </tr>
                </thead>
                <tbody>

                    {favorites.map((item, index) => <FavoriteItem key={item.id} item={item} index={index} />)}

                </tbody>
            </table>
        </section>
    )
}