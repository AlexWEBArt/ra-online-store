import { useDispatch, useSelector } from "react-redux";
import { changeSearchField } from "../../../../redux/actions/actionCreators/actionCreators";

export default function SearchForm() {
    const { searchItems } = useSelector(state => state.catalog);
    const dispatch = useDispatch();

    const handleSubmitSearch = (e) => {
        e.preventDefault()
    }

    const handleSearch = (e) => {
        const { value } = e.target;
        dispatch(changeSearchField(value));
    };

    return (
        <form className="catalog-search-form form-inline" onSubmit={handleSubmitSearch}>
            <input className="form-control" placeholder="Поиск" defaultValue={searchItems} onChange={handleSearch}></input>
        </form>
    )
}