import CartControl from "./CartControl/CartControl";
import SearchControl from "./SearchControl/SearchControl";

export default function Controls() {
    return (
        <div className="header-controls-pics">
            <SearchControl />
            <CartControl />
        </div>
    )
}