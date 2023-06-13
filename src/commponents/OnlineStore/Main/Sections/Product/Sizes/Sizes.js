import { useDispatch, useSelector } from "react-redux";
import { productSizeSelected } from "../../../../../../redux/actions/actionCreators/actionCreators";

export default function Sizes(props) {
    const { sizes } = props;
    const { size } = useSelector(state => state.product)
    const dispatch = useDispatch();

    const handleClickSize = (e) => {
        // let selected;
 
        // if (size) {
        //     selected = Array.from(e.target.children).filter(item => {
        //         console.log(item)
        //         return item.innerText === size
        //     })

        // }
        
        // if(e.target.classList.contains('catalog-item-size')) {

            
            if (size) {
                console.log(size)
                dispatch(productSizeSelected(null))
            } else {
                dispatch(productSizeSelected(e.target.innerText))
            }
            e.target.classList.toggle('selected')
        // }
    }
    return (
        <p>
            Размеры в наличии:
            {sizes.map(item => {
                if (!item.available) {return null}
                return <span key={item.size} className="catalog-item-size" onClick={handleClickSize}>{item.size}</span>
            })}
            {/* <span className="catalog-item-size">18 US</span> <span className="catalog-item-size">20 US</span> */}
        </p>
    )
}