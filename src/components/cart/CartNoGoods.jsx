import emptyCart from '../../assets/image/emptyCart.png'
import { NavLink } from 'react-router-dom';
const CartNoGoods = () => {
    return (
        <div className="shopping--cart__empty">
            <h2>Корзина пуста</h2>
            <p>Ваша корзина змовлення пуста.<br />Cкоріш за все ви забули зробити замовлення,
                для того, щоб зробити замовлення, перейдіть на <NavLink to="La_Pizza"> головну сторінку.</NavLink>
            </p>
            <img src={emptyCart} width="500px" alt="emptyCart" />
        </div>
    )
}
export default CartNoGoods;