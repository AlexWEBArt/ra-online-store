import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { topSalesRequest } from "../../../../../redux/actions/actionCreators/actionCreators";
import Item from "../Item/Item";
import Preloader from "../../../../CommonSystem/Preloader/Preloader";
import ErrorMessage from "../../../../CommonSystem/ErrorMessage/ErrorMessage";

export default function TopSales() {
    const { items, loading, error } = useSelector(state => state.topSales)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(topSalesRequest())
    }, [dispatch])

    return (
        <section className="top-sales">
            <h2 className="text-center">Хиты продаж!</h2>
            {error && <ErrorMessage message={error}/>}
            <div className="row">
                {items && items.map(item => <Item key={item.id} item={item}/>)}
            </div>
            {
                loading
                &&
                <Preloader />
            }
        </section>
    )
}