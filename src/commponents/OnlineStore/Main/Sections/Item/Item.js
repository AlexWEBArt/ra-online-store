import { Link } from "react-router-dom";
import ButtonFavorite from "./IconFavorite/IconFavorite";

export default function Item(props) {
    const { id, title, price, images } = props.item;

    return (
        <div className="col-4 d-flex" >
            <div className={`card catalog-item-card`} style={{width: '100%'}} data-id={id}>
                <ButtonFavorite item={{id, title, price}}/>
                <div className="image-container">
                <img src={images[0] || images}
                    className="card-img img-fluid" alt={title}></img>
                </div>
                <div className="card-body" style={{display: 'flex', flexDirection: "column", justifyContent: 'flex-end'}}>
                    <p className="card-text">{title}</p>
                    <p className="card-text">{price} руб.</p>
                    <Link to={`/ra-online-store/product/${id}`} className="btn btn-outline-primary">Заказать</Link>
                </div>
            </div>
        </div>
    )
}