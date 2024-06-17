import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useState } from 'react';

import Navbar from './components/Navbar';
import Catalog from './components/Catalog';
import Cart from './components/Cart';
import ThankYouPage from './components/ThankYouPage';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';

import 'animate.css';
import About from './components/About';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddCart = (product, quantity) => {
    setCartItems((prevItems) => {
      // Se não existir => adiciono o item
      // Se não existir => Incremento a quantidade

      const itemExists = prevItems.find((item) => item.id === product.id);

      if(itemExists) {
        toast.info(`Quantidade do item ${product.name} atualizada!`);
        return prevItems.map((item) => item.id === product.id ? {...item, quantity: item.quantity + quantity } : item)
      } else {
        toast.success(`${product.name} adicionado ao carrinho`);
        return [...prevItems, {...product, quantity }];
      }

    })
  }

  const handleUpdateCart = (product, quantity) => {
    setCartItems((prevItems) => {
      toast.info(`Quantidade do item ${product.name} atualizada!`);
      return prevItems.map((item) => item.id === product.id ? {...item, quantity: +quantity} : item);
    });
  }

  const handleRemoveFromCart = (product) => {
    toast.warning(`${product.name} foi removido com sucesso!`)
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== product.id))
  }

  return (
    <BrowserRouter  >
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={ <Catalog onAddToCart={handleAddCart} /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/cart' element={ 
            <Cart 
            onAddToCart={handleAddCart}
            cartItems={cartItems} 
            onUpdateCart={handleUpdateCart} 
            onRemoveFromCart={handleRemoveFromCart}
            setCartItems={setCartItems}
            onCheckout={() => {
              if(cartItems.length > 0) {
                toast.success("Compra Finalizada com sucesso");
                setCartItems([]);
              } else {
                toast.error("Seu carrinho esta vazio!");
              }
            }}
            /> } />
          <Route path='/thank-you' element={ <ThankYouPage /> } />
        </Routes>
      </div>
      <ToastContainer 
        position='top-center'
        autoClose={2000}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      />
      <Footer />
    </BrowserRouter>
  )
}

export default App
