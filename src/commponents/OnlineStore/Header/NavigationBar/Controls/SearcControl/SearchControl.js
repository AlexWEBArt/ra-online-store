export default function SearchControl() {
    return (
        <>
            <form data-id="search-form" className="header-controls-search-form form-inline invisible">
                <input className="form-control" placeholder="Поиск"></input>
            </form>
            <div data-id="search-expander" className="header-controls-pic header-controls-search"></div>
        </>
    )
}