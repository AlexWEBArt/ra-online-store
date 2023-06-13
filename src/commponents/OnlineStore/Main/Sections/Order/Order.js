import { useDispatch, useSelector } from "react-redux"
import { cartOrderRequest, cartReset } from "../../../../../redux/actions/actionCreators/actionCreators";
import { useEffect, useState } from "react";
import Preloader from "../../../../CommonSystem/Preloader/Preloader";
import ErrorMessage from "../../../../CommonSystem/ErrorMessage/ErrorMessage";
import SuccessfulModal from "./SuccessfulModal/SuccessfulModal";

export default function Order() {
    const { loading, error, status } = useSelector(state => state.cart);
    const [checkbox, setCheckBox] = useState(false);
    const [owner, setOwner] = useState({
        phone: '+7',
        address: '',
    });
    const { products } = useSelector(state => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        if (status === 204) {
            dispatch(cartReset())
        }
    }, [dispatch, status])

    const handleSubmitOrder = (e) => {
        e.preventDefault();
        const body = {
            owner,
            items: products.map(item => ({id: item.product.id, price: item.product.price, count: item.counter})),
        };
        if (checkbox) {
            dispatch(cartOrderRequest(body))
        }
        if (!checkbox) {
            console.error('требуеться капля крови')
        }
    }

    const handleChangeOrderInput = (e) => {
        console.log(e)
        const {value, name} = e.target;
        setOwner(prevData => ({...prevData, [name]: value}))
    }

    const handleChangeCheckbox = () => {
        if (checkbox) {
            setCheckBox(false)
        }
        if (!checkbox) {
            setCheckBox(true)
        }
    }

    // const otherComponent = loading ? <Preloader /> : error ? <ErrorMessage message={error}/> : null

    return (
        loading ? <Preloader /> : error ? <ErrorMessage message={error}/> : status ? <SuccessfulModal /> :
        <section className="order">
            <h2 className="text-center">Оформить заказ</h2>
            <div className="card" style={{maxWidth: '30rem', margin: '0 auto'}}>
                <form className="card-body" onSubmit={handleSubmitOrder}>
                    <div className="form-group">
                        <label htmlFor="phone">Телефон</label>
                        <input className="form-control" id="phone" name="phone" placeholder="Ваш телефон" defaultValue={owner.phone} onChange={handleChangeOrderInput}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Адрес доставки</label>
                        <input className="form-control" id="address" name="address" placeholder="Адрес доставки" defaultValue={owner.address} onChange={handleChangeOrderInput}></input>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="agreement" defaultChecked={false} onChange={handleChangeCheckbox}></input>
                        <label className="form-check-label" htmlFor="agreement">Согласен с правилами доставки</label>
                    </div>
                    <button type="submit" className="btn btn-outline-secondary">Оформить</button>
                </form>
            </div>
        </section>
    )
}