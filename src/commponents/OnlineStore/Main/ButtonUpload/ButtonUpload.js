import { useDispatch, useSelector } from "react-redux"
import { catalogRequest } from "../../../../redux/actions/actionCreators/actionCreators";

export default function ButtonUpload() {
    const { length } = useSelector(state => state.catalog.items);
    const { choseCategory, searchItems } = useSelector(state => state.catalog)
    const dispatch = useDispatch();

    const handleClickUpload = () => {
        dispatch(catalogRequest(searchItems, choseCategory, length))
    };

    return (
        <div className="text-center">
            <button className="btn btn-outline-primary" onClick={handleClickUpload}>Загрузить ещё</button>
        </div>
    )
}