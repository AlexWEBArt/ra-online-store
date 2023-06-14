import { useRef, useState } from "react"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { changeSearchField } from "../../../../../../redux/actions/actionCreators/actionCreators";

export default function SearchControl() {
    const [clickCounter, setClickCounter] = useState(0);
    const [clickLink, setClickLink] = useState(null);
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const invisibleSearch = useRef();

    const defaultState = () => {
        invisibleSearch.current.classList.add('invisible');
        setValue('')
        setClickLink(null);
        setClickCounter(0);
    }

    const handleClickControlSearch = () => {
        if (clickCounter === 0) {
            invisibleSearch.current.classList.remove('invisible');
            setClickLink(<Link className="click-link" to={'/ra-online-store/catalog'}/>);
            setClickCounter(1);
        }
        if (clickCounter === 1 && value[0]) {
            dispatch(changeSearchField(value));
            defaultState();
        }
        if (clickCounter === 1 && !value[0]) {
            defaultState();
        }
    }

    const handleControlSearch = (e) => {
        const { value } = e.target;
        setValue(value);
    };

    const handleSubmitControlSearch = (e) => {
        e.preventDefault();

        dispatch(changeSearchField(value));
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