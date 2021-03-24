import image from '../../assets/image/pizza/pizza.jpg'

const PizzaList = (props) => {
    const { pizzaName, shoppingCart, ingridients, addToCart } = props;
    const arrForSumCount = shoppingCart.filter(i => i.name === pizzaName)
    let count = 0
    const addItem = () => {
        let item = {
            name: pizzaName,
            count: 1,
            ingridients: ingridients
        }
        addToCart(item)
    }
    arrForSumCount.forEach(element => {
        count += element.count
    });
    return (
        <div className="pizza-block">
            <img src={image} width="250px" alt={pizzaName} />
            <h4 className="pizza-block__tittle">{pizzaName}</h4>
            <div className="pizza-block__ingridients">
                {ingridients.map(ingridient => 
                    <span key={ingridient[0]}>{ingridient[0]} </span>)}
            </div>
            <div className="pizza-block__bottom">
                <button className="my-button" onClick={() => addItem()}>
                    +  Додати
                        {shoppingCart.some(item => item.name === pizzaName) === true ? <span>{count}</span> : null}
                </button>
            </div>
        </div>
    )
}
export default PizzaList;