import PizzaList from "./PizzaList"
import { useSelector, useDispatch } from 'react-redux'
import { ShoppingCartItems } from '../../redux/reducers/PizzaReducer'
const PizzaListContainer = () => {
    const pizzaItemsState = useSelector(state => state.pizzaItems.pizzaItems)
    const shoppingCart = useSelector(state => state.pizzaItems.shoppingCart)
    const dispatch = useDispatch()
    const pizzaItems = Object.entries(pizzaItemsState)

    function addToCart(item) {
        dispatch(ShoppingCartItems(item))
    }

    return (
        <div className="content">
            {pizzaItems.map(pizza =>
                <PizzaList
                    key={pizza[0]}
                    pizzaName={pizza[0]}
                    ingridients={Object.entries(pizza[1])}
                    addToCart={addToCart}
                    shoppingCart={shoppingCart}
                />
            )}
        </div>
    )
}

export default PizzaListContainer;