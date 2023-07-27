import { Link } from "react-router-dom"

const CartEmpty = () => {
  return (
    <div className="cart cart--empty">
            <h2>Кошик порожній<icon>😕</icon></h2>
            <p>
              Найімовірніше, ви не замовляли ще піцу.<br />
              Щоб замовити піцу, перейдіть на головну сторінку.
            </p>
            <img src="img/empty-cart.png" alt="Empty cart" />
            <Link to="/pizza-shop" className="button button--black">
              <span>Повернутися на головну</span>
            </Link>
      </div>
  )
}

export default CartEmpty;