import React from 'react';

import { Link } from 'react-router-dom';

import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav>
        <Link to="/">Catálogo</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/cart">Carrinho <BsCart3 /> </Link>
    </nav>
  )
}

export default Navbar