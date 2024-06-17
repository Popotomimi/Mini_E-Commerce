import React from 'react'
import CartItem from './CartItem';
import CheckoutButton from './CheckoutButton';
import Product from './Product';

import productsData from "../data/products_mock.json";

import { BsCart4 } from "react-icons/bs";

const Cart = ({ onAddToCart, cartItems, onUpdateCart, onRemoveFromCart, setCartItems }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className='cart-style'>
      <div className="cart-background">
      <h1>Carrinho <br /> <BsCart4 /> </h1>
        {cartItems.length === 0 ? ( <p>Não há itens no carrinho.</p> ) : (
          <div>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} onUpdateCart={onUpdateCart} onRemoveFromCart={onRemoveFromCart} />
            ))}
            <div className="total">
              <p>Total: R${totalPrice.toFixed(2)}</p>
              <CheckoutButton cartItems={cartItems} setCartItems={setCartItems} />
            </div>
          </div>
        )}
      </div>
      <h2>Esqueceu algo? Peça aqui!</h2>
        <div className="products-container container">
            {productsData.map((product) => (
                <Product key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
        </div>
    </div>
  )
}

export default Cart;