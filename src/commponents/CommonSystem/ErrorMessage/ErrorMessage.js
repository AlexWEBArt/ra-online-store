import { useDispatch, useSelector } from "react-redux";
import { cartOrderRequest, catalogRequest, productRequest, topSalesRequest } from "../../../redux/actions/actionCreators/actionCreators";
import { useParams } from "react-router";

export default function ErrorMessage(props) {
    const cartError = useSelector(state => state.cart.error);
    const catalogError = useSelector(state => state.catalog.error);
    const productError = useSelector(state => state.product.error);
    const topSalesError = useSelector(state => state.topSales.error);

    const { items, searchItems, choseCategory } = useSelector(state => state.catalog);
    const { id } = useParams('id');

    const message = cartError ? cartError : catalogError ? catalogError : productError ? productError : topSalesError;
    const source = cartError ? 'корзины' : catalogError ? 'каталога' : productError ? 'товара' : 'лучшего предложения';
    const dispatch = useDispatch();

    const handleClickRetry = () => {
        if (cartError) {
            dispatch(cartOrderRequest(props.body))
        }
        if (catalogError) {
            dispatch(catalogRequest(searchItems, choseCategory, items.length))
        }
        if (productError) {
            dispatch(productRequest(id))
        }
        if (topSalesError) {
            console.log('top')
            dispatch(topSalesRequest())
        }
    }

    return (
        <div className="error-message">
            <p className="error-text">Произошла ошибка при загрузке {source}: {message}</p>
            <button className="btn-retry" onClick={handleClickRetry}>Попробуйте повторить загрузку</button>
        </div>
    )
}