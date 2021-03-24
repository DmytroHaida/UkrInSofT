
const SET_SHOPPING_CART_ITEMS = "SET_SHOPPING_CART_ITEMS"
const SET_SHOPPING_CART_ITEMS_COUNT = "SET_SHOPPING_CART_ITEMS_COUNT"
const SET_SHOPPING_CART_ITEMS_DECREMENT_COUNT = "SET_SHOPPING_CART_ITEMS_DECREMENT_COUNT"
const SET_SHOPPING_CART_ITEMS_DELETER = "SET_SHOPPING_CART_ITEMS_DELETER"
const SET_CLEAR_SHOPPING_CART_ITEMS = "SET_CLEAR_SHOPPING_CART_ITEMS"
let initialState = {
    pizzaItems: {
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
    },
    shoppingCart: []
}

const PizzaReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SHOPPING_CART_ITEMS:
            return {
                ...state,
                shoppingCart: [action.payloads, ...state.shoppingCart]
            }
        case SET_SHOPPING_CART_ITEMS_COUNT:
            return {
                ...state,
                shoppingCart: state.shoppingCart.map(item => {
                    if (item.name === action.payloads.name) {
                        let addCount = item
                        addCount.count++
                        return item
                    } else return item
                })
            }
        case SET_SHOPPING_CART_ITEMS_DECREMENT_COUNT:
            return {
                ...state,
                shoppingCart: state.shoppingCart.map(item => {
                    if (item.name === action.payloads.name) {
                        let addCount = item
                        addCount.count--
                        return item
                    } else return item

                })
            }
        case SET_SHOPPING_CART_ITEMS_DELETER:
            state.shoppingCart.splice(action.payloads, 1)
            return {
                ...state,
                shoppingCart: [...state.shoppingCart]
            }
        case SET_CLEAR_SHOPPING_CART_ITEMS:
            return {
                ...state,
                shoppingCart: []
            }
        default:
            return state
    }
}

export const setShoppingCartItems = (payloads) => ({ type: SET_SHOPPING_CART_ITEMS, payloads })
export const setShoppingCartItemsCount = (payloads) => ({ type: SET_SHOPPING_CART_ITEMS_COUNT, payloads })
export const setShoppingCartItemsDecrementCount = (payloads) => ({ type: SET_SHOPPING_CART_ITEMS_DECREMENT_COUNT, payloads })
export const setShoppingCartItemsDeleter = (payloads) => ({ type: SET_SHOPPING_CART_ITEMS_DELETER, payloads })
export const setClearShoppingCartItems = (payloads) => ({ type: SET_CLEAR_SHOPPING_CART_ITEMS, payloads })

export const ShoppingCartItems = (item) => (dispatch, getState) => {
    const stateShoppingCart = getState().pizzaItems.shoppingCart

    if (stateShoppingCart.some(i => i.name === item.name)) {
        dispatch(setShoppingCartItemsCount(item))
    } else dispatch(setShoppingCartItems(item))
}
export const ShoppingCartItemsIncrement = (item) => (dispatch) => {
    dispatch(setShoppingCartItemsCount(item))
}
export const ShoppingCartItemsDecrement = (item) => (dispatch) => {
    dispatch(setShoppingCartItemsDecrementCount(item))
}
export const ShoppingCartItemsDeleter = (index) => (dispatch) => {
    dispatch(setShoppingCartItemsDeleter(index))
}
export const ClearShoppingCartItems = () => (dispatch) => {
    dispatch(setClearShoppingCartItems())
}

export default PizzaReducer;