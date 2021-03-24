import { Redirect, Route } from 'react-router-dom';
import CartContainer from './cart/CartContainer'
import PizzaListContainer from './goods/PizzaListContainer';
import Statistics from './Statistics';
function Content() {
    return (
        <div className="container">
            <Route path="/La_Pizza" render={() => <PizzaListContainer />} />
            <Route path="/shopping_cart" render={() => <CartContainer className="content" />} />
            <Redirect from='/' to='/La_Pizza' />
            <Statistics/>
        </div>
    )
}
export default Content;