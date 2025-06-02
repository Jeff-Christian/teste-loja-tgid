import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function Products() {
  const [produtos, setProdutos] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    await axios
      .get("http://localhost:3000/produtos")
      .then((response) => {
        console.log(response.data);
        setProdutos(response.data);
      })
      .catch((error) => {
        console.error("Os produtos não foram encontrados!", error);
      });
  };

  const addToCart = (id) => {
    const produto = produtos.find((produto) => produto.id === id);

    console.log(produto);
    console.log(`Produto adicionado ao carrinho: ${produto.nome}`);

    const newShoppingCart = [...shoppingCart, produto];
    setShoppingCart(newShoppingCart);

    console.log(shoppingCart);
  };

  return (
    <>
      <div className="container mt-5">
        {produtos.map((produto) => (
          <div className="card" key={produto.id}>
            <img src={produto.imagem} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">{produto.nome}</h5>
              <p className="card-text">{produto.descricao}</p>
              <h1 className="card-text">R${produto.preco}</h1>
              <button onClick={() => addToCart(produto.id)} className="button">
                Comprar
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
