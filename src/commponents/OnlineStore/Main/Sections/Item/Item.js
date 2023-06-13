import { Link } from "react-router-dom"

export default function Item(props) {
    const { id, category, title, price, images } = props.item;

    return (
        <div className="col-4">
            <div className={`card catalog-item-card`} data-id={id}>
                <img src={images[0] || images}
                    className="card-img-top img-fluid" alt={title}></img>
                <div className="card-body">
                    <p className="card-text">{title}</p>
                    <p className="card-text">{price} руб.</p>
                    <Link to={`/ra-online-store/product/${id}`} className="btn btn-outline-primary">Заказать</Link>
                </div>
            </div>
        </div>
    )
}