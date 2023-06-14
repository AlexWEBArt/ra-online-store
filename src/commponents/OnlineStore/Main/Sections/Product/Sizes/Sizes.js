import { useDispatch } from "react-redux";
import { productSizeSelected } from "../../../../../../redux/actions/actionCreators/actionCreators";
import { useRef } from "react";

export default function Sizes(props) {
    const { sizes } = props;
    const sizesContainer = useRef()
    const dispatch = useDispatch();

    const handleClickSize = (e) => {
        const { target } = e;

        const arrayElementSizes = Array.from(sizesContainer.current.children).filter(item => item.classList.contains('catalog-item-size'));
        const selectionCheck = arrayElementSizes.filter(item => item.classList.contains('selected'));

        if (selectionCheck[0] && target.classList.contains('catalog-item-size')) {
            selectionCheck[0].classList.remove('selected');
            target.classList.add('selected');
            dispatch(productSizeSelected(target.innerText));
        }

        if (target.classList.contains('selected')) {
            target.classList.remove('selected');
            dispatch(productSizeSelected(null));
        }

        if (!selectionCheck[0] && target.classList.contains('catalog-item-size')) {
            target.classList.add('selected');
            dispatch(productSizeSelected(target.innerText));
        }
    }

    return (
        <p ref={sizesContainer} onClick={handleClickSize}>
            Размеры в наличии:
            {sizes.map(item => {
                if (!item.available) {return null}
                return <span key={item.size} className="catalog-item-size">{item.size}</span>
            })}
        </p>
    )
}