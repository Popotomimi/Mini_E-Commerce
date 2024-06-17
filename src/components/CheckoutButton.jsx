import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const CheckoutButton = ({ cartItems, setCartItems }) => {

    const navigate = useNavigate();

    const handleCheckout = () => {
        if(cartItems.length > 0) {
            toast.success("Compra Finalizada com sucesso");
            navigate("/thank-you", { state: {cartItems} })
            setCartItems([]);
          } else {
            toast.error("Seu carrinho esta vazio!");
          }
    }

  return (
    <button className='btn-total' onClick={handleCheckout}>Finalizar Compra</button>
  )
}

export default CheckoutButton