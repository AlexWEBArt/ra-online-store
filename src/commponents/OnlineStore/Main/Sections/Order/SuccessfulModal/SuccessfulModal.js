import { useDispatch } from "react-redux"
import { closeModal } from "../../../../../../redux/actions/actionCreators/actionCreators";

export default function SuccessfulModal() {
    const dispatch = useDispatch();

    const handleClickCloseModal = () => {
        dispatch(closeModal())
    }
    return (
        <section className="close-modal-container">
            <div className="close-modal">
                <p className="text-center">Ваш заказ успешно оформлен</p>
                <button className="btn btn-outline-primary" style={{display: 'block', maxWidth: '30rem', margin: '0 auto'}} onClick={handleClickCloseModal}>OK</button>
            </div>
        </section>
    )
}