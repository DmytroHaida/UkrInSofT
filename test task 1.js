let pizzaItems = {
    cap: {
        dough: 1,
        tomato_sauce: 1,
        onion: 2,
        sausage: 2,
        mashroom: 3,
        cheese: 1,
    },
    onions: {
        dough: 1,
        tomato_sauce: 1,
        onion: 2,
        meat: 1,
        cheese: 1,
    },
    king_one: {
        dough: 1,
        tomato_sauce: 1,
        onion: 2,
        mayo: 1,
        mashroom: 3,
        tomato: 2,
        cheese: 3,
        dill: 2,
        parsley: 2
    },
    gavay: {
        dough: 1,
        tomato_sauce: 1,
        onion: 2,
        ananas: 1,
        cheese: 2,
    },
    tonno: {
        dough: 1,
        tomato_sauce: 1,
        tuna: 2,
        kappers: 1,
        cheese: 1,
    },
    vegeterian: {
        dough: 1,
        tomato_sauce: 1,
        tomato: 2,
        kappers: 1,
        cucumber: 2,
        onion: 2,
        cheese: 1,
    }
}
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

let d = getPizzaInfo(['cap','cap','onions','gavay','cap', 'tonno','vegeterian', 'king_one'])