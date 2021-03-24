const CartContent = (props) => {
    const { name, count, ingridients, decreaseGoodsCount, addGoodsCount, index, image, cartItemDeleter } = props
    let item = {
        name: name,
        count: count,
    }

    function deleteItem() {
        let confirm = window.confirm("Ви впевненні що хочите видалити")
        if (confirm) {
            cartItemDeleter(index)
        }
    }
    return (
        <div className="shopping--cart__item">
            <img src={image} width="80px" alt="pizzaImage" />
            <div className="shopping--cart__item-info">
                <h4>{name}</h4>
                <div>{ingridients.map(ingridient =>
                    <span>{ingridient[0]} ,</span>)}
                </div>
            </div>
            <div className="shopping--cart__item-counter">
                <button onClick={() => count > 1 ? decreaseGoodsCount(item) : deleteItem()}>
                    <span>-</span>
                </button>
                <b>{count}</b>
                <button onClick={() => addGoodsCount(item)}>
                    <span>+</span>
                </button>
            </div>
            <div>
                <div onClick={() => deleteItem()} className="shopping--cart__item-remove"></div>
            </div>
        </div>
    );
}
export default CartContent;