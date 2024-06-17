import { useLocation, useNavigate } from 'react-router-dom';

import thankyou from "../img/thank-you.jfif";

const ThankYouPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const items = location.state.cartItems;

    const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className='thank-you-page'>
      <img src={thankyou} alt="Imagem de muito obrigado" />
      <h1>Nota fiscal: </h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name} - {item.quantity} X R${item.price}</li>
        ))}
      </ul>
      <p>Total: R${totalPrice.toFixed(2)}</p>
      <button onClick={() => navigate("/")}>Voltar ao Catálogo</button>
    </div>
  )
}

export default ThankYouPage;