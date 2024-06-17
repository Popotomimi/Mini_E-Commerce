import productsData from "../data/products_mock.json";
import Product from "./Product";

import namorados from "../img/namorados.jfif";
import namoradosTwo from "../img/namoradosTwo.jfif";

const Catalog = ({ onAddToCart, onUpdateCart }) => {


  return (
    <div className="catalog-style container">
        <h1>Promoção da semana dos Namorados!</h1>
        <div className="banner-home animate__animated animate__tada">
          <img src={namorados} alt="Imagem do dia dos namorados!" />
          <img src={namoradosTwo} alt="Imagem do dia dos namorados!" />
        </div>
        <h2>Catálogo de Produtos</h2>
        <div className="products-container">
            {productsData.map((product) => (
                <Product key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
        </div>
    </div>
  )
}

export default Catalog;