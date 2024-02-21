import { useRef, useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeSearchField } from "../../../../../../redux/actions/actionCreators/actionCreators";

export default function SearchControl() {
    const [clickLink, setClickLink] = useState(null);
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const invisibleSearch = useRef();

    const defaultState = () => {
        invisibleSearch.current.classList.add('invisible');
        setValue('')
        setClickLink(null);
    }

    const handleClickControlSearch = () => {
        invisibleSearch.current.classList.toggle('invisible');
    }

    const handleControlSearch = (e) => {
        const { value } = e.target;
        setValue(value);
    };

    const handleSubmitControlSearch = (e) => {
        e.preventDefault();

        dispatch(changeSearchField(value));
        navigate('/ra-online-store/catalog/1')
        defaultState();
    }

    return (
        <>
            <form data-id="search-form" className="header-controls-search-form form-inline invisible" ref={invisibleSearch} onSubmit={handleSubmitControlSearch}>
                <input className="form-control" placeholder="Поиск" value={value} onChange={handleControlSearch}></input>
            </form>
            <div data-id="search-expander" className="header-controls-pic header-controls-search" onClick={handleClickControlSearch}>{clickLink}</div>
        </>
    )
}