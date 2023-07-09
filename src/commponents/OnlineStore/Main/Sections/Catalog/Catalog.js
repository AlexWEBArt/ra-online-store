import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { catalogRequest, categoriesRequest } from "../../../../../redux/actions/actionCreators/actionCreators";
import Item from "../Item/Item";
import Preloader from "../../../../CommonSystem/Preloader/Preloader";
import ErrorMessage from "../../../../CommonSystem/ErrorMessage/ErrorMessage";
import Categories from "../../Categories/Categories";
import ButtonUpload from "../../ButtonUpload/ButtonUpload";

export default function Catalog(props) {
    const { items, stopOffset, loading, error } = useSelector(state => state.catalog);
    const { searchItems, choseCategory } = useSelector(state => state.catalog)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(categoriesRequest());
    }, [dispatch])

    useEffect(() => {
        dispatch(catalogRequest(searchItems, choseCategory));
    }, [dispatch, searchItems, choseCategory])

    return (
        <section className="catalog">
            <h2 className="text-center">Каталог</h2>
            {
                props.children
            }
            {
                error 
                && 
                <ErrorMessage message={error}/>
            }
            <Categories />
            <div className="row">
                {items && items.map(item => <Item key={item.id} item={item}/>)}
            </div>
            {
                loading
                &&
                <Preloader />
            }
            {
                !stopOffset 
                && 
                <ButtonUpload />
            }
        </section>
    )
}