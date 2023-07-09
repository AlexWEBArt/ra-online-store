import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router"
import { addToCart, productCounterDecrement, productCounterIncrement, productRequest } from "../../../../../redux/actions/actionCreators/actionCreators";
import Preloader from "../../../../CommonSystem/Preloader/Preloader";
import ErrorMessage from "../../../../CommonSystem/ErrorMessage/ErrorMessage";
import Sizes from "./Sizes/Sizes";
import { Link } from "react-router-dom";
import ButtonFavorite from "./ButtonFavorite/ButtonFavorite"

export default function Product() {
    const { id } = useParams('id');
    const { product, counter, size, loading, error } = useSelector(state => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productRequest(id))
    }, [dispatch, id])

    const handleClickCounter = (e) => {
        if (e.target.classList.contains('increment')) {
            dispatch(productCounterIncrement())
        }
        if (e.target.classList.contains('decrement')) {
            dispatch(productCounterDecrement())
        }
    }

    const handleClickAddCartItem = () => {
        dispatch(addToCart({product, counter, size}))
    }

    return (
        <section className="catalog-item">
            {loading && <Preloader />}
            {error && <ErrorMessage />}
            {
                product
                &&
                <>
                    <h2 className="text-center">{product.title}</h2>
                    <div className="row">
                        <div className="col-5">
                            <img src={product.images[0]}
                                className="img-fluid" alt={product.title}></img>
                        </div>
                        <div className="col-7">
                            <table className="table table-bordered">
                                <tbody>
                                    <tr>
                                        <td>Артикул</td>
                                        <td>{product.sku}</td>
                                    </tr>
                                    <tr>
                                        <td>Производитель</td>
                                        <td>{product.manufacturer}</td>
                                    </tr>
                                    <tr>
                                        <td>Цвет</td>
                                        <td>{product.color}</td>
                                    </tr>
                                    <tr>
                                        <td>Материалы</td>
                                        <td>{product.material}</td>
                                    </tr>
                                    <tr>
                                        <td>Сезон</td>
                                        <td>{product.season}</td>
                                    </tr>
                                    <tr>
                                        <td>Повод</td>
                                        <td>{product.reason}</td>
                                    </tr>
                                    <tr>
                                        <td>Цена</td>
                                        <td>{product.price}</td>
                                    </tr>
                                    <tr>
                                        <td>Избранное</td>
                                        <td><ButtonFavorite item={{id: Number(id), title: product.title, price: product.price}}/></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="text-center">
                                <Sizes sizes={product.sizes} />
                                {
                                    size 
                                    && 
                                    <>
                                        <p>Количество: <span className="btn-group btn-group-sm pl-2">
                                            <button className="btn btn-secondary decrement" onClick={handleClickCounter}>-</button>
                                            <span className="btn btn-outline-primary">{counter}</span>
                                            <button className="btn btn-secondary increment" onClick={handleClickCounter}>+</button>
                                        </span>
                                        </p>
                                        <Link to={'/ra-online-store/cart'} className="btn btn-danger btn-block btn-lg" onClick={handleClickAddCartItem}>В корзину</Link>
                                    </>
                                }
                            </div>
                            
                        </div>
                    </div>
                </>
            }
        </section>
    )
}