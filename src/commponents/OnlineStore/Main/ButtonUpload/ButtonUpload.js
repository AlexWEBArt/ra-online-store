import { useDispatch, useSelector } from "react-redux"
import { catalogCategoryUploadRequest, catalogUploadRequest } from "../../../../redux/actions/actionCreators/actionCreators";

export default function ButtonUpload() {
    const { length } = useSelector(state => state.catalog.items);
    const { choseCategory } = useSelector(state => state.categories)
    const { search } = useSelector(state => state.catalog)
    const dispatch = useDispatch();

    const handleClickUpload = () => {
        // if (choseCategory) {
            dispatch(catalogCategoryUploadRequest(search, choseCategory, length))

            // return
        // }
        // dispatch(catalogUploadRequest(length))
    };

    return (
        <div className="text-center">
            <button className="btn btn-outline-primary" onClick={handleClickUpload}>Загрузить ещё</button>
        </div>
    )
}