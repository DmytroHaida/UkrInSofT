import { useSelector } from "react-redux";


function Statistics() {
    const pizzaItems = useSelector(state => state.pizzaItems.pizzaItems)

    function getPizzaInfo(lastPizzas) {
        let popularObject = {}
        let ingridientsObject = {}
        lastPizzas.forEach(pizzaName => {
            popularObject[pizzaName] = popularObject[pizzaName] + 1 || 1
        }
        );
        let popular = Object.keys(popularObject).sort(function (a, b) {
            return popularObject[b] - popularObject[a]
        }).slice(0, 5)

        popular.forEach(pizzaName => {
            let pizzaItem = pizzaItems[pizzaName]
            Object.keys(pizzaItem).forEach(ingridient => {
                let value = pizzaItem[ingridient] * popularObject[pizzaName]
                ingridientsObject[ingridient] = ingridientsObject[ingridient] + value || value
            })
        })

        let ingridients = Object.keys(ingridientsObject).sort(function (a, b) {
            return ingridientsObject[b] - ingridientsObject[a]
        })

        return { popular, ingridients }
    }
    let popularPizza = getPizzaInfo(['cap', 'cap', 'onions', 'gavay', 'cap', 'tonno', 'vegeterian', 'vegeterian', 'king_one'])
    let [a, b] = Object.entries(popularPizza)
    return (
        <div className="popular-bottom">
            Топ популярних піц:{a[1].map(e => <span className="pizza-block__tittle"> {e} </span>
        )}
            <div className="spendet-ingridients">
                витрачені інгредієнти:{b[1].map(e => <span> {e} </span>)}
            </div>

        </div>

    )
}
export default Statistics;