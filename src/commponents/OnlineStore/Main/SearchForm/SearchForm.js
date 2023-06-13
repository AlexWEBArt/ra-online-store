import { useDispatch } from "react-redux";
import { changeSearchField } from "../../../../redux/actions/actionCreators/actionCreators";

export default function SearchForm() {
    // const { }
    const dispatch = useDispatch();
    // Обычный Каталог реквест
    // передавать параметры через базовый запрос, пробовать мапить сразу в эпике
    // изменить запрос в баттон аплоад
    const handleSearch = (e) => {
        console.log(e.target.value)
        const { value } = e.target;
        dispatch(changeSearchField(value));
    };

    return (
        <form className="catalog-search-form form-inline">
            <input className="form-control" placeholder="Поиск" onChange={handleSearch}></input>
        </form>
    )
}