import { BsTrash } from "react-icons/bs";

const CartItem = ({ item, onUpdateCart, onRemoveFromCart}) => {
  return (
    <div className='cart-item'>
        <div className="cart-tems">
          <h3>{item.name}</h3>
          <img src={item.image} alt={item.name} />
          <p>R${item.price}</p>
          <div className="cart-buttons">
              <input type="text" value={item.quantity} onChange={(e) => onUpdateCart(item, parseInt(e.target.value))} />
              <button className="btn-remove" onClick={(e) => onRemoveFromCart(item)}>Remover &nbsp; <BsTrash /> </button>
          </div>
        </div>
    </div>
  )
}

export default CartItem;