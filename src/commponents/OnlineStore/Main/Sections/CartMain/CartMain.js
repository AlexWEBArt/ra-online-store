import { useSelector } from "react-redux"
import CartItem from "./CartItem/CartItem";

export default function CartMain() {
    const { products, totalCost } = useSelector(state => state.cart);
    // console.log(products)
    // console.log(totalCost)
    return (
        <section className="cart">
            <h2 className="text-center">Корзина</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Название</th>
                        <th scope="col">Размер</th>
                        <th scope="col">Кол-во</th>
                        <th scope="col">Стоимость</th>
                        <th scope="col">Итого</th>
                        <th scope="col">Действия</th>
                    </tr>
                </thead>
                <tbody>

                    {products.map((item, index) => <CartItem key={item.product.id} item={item} index={index} />)}

                    <tr>
                        <td colSpan="5" className="text-right">Общая стоимость</td>
                        <td>{totalCost + ' руб.'}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}