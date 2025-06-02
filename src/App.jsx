import React from "react";
import { useState, useEffect } from "react";

import axios from "axios";

import "./App.css";

import logo from "../src/assets/logo.png";
import compras1 from "../src/assets/compras1.jpg";
import compras2 from "../src/assets/compras2.jpg";
import compras3 from "../src/assets/compras3.jpg";

function App() {
  const [show, setShow] = useState(false);

  const [produtos, setProdutos] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);

  const total = shoppingCart.reduce((acc, produto) => acc + produto.preco, 0);

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

  const removeToCart = (id) => {
    const alreadyInCart = shoppingCart.find((produto) => produto.id === id);
    if (alreadyInCart) {
      const newShoppingCart = shoppingCart.filter(
        (produto) => produto.id !== id
      );
      setShoppingCart(newShoppingCart);
      console.log(`Produto removido do carrinho: ${alreadyInCart.nome}`);
    } else {
      console.log("Produto não encontrado no carrinho.");
    }
  };

  const onShowCart = () => {
    if (show == false) {
      console.log("Carrinho aberto");
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img src={logo} className="logo" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a>
                  <i className="fa-solid fa-heart"></i>
                </a>
              </li>
              <li>
                <a>
                  <i className="fa-solid fa-user-tie"></i>
                </a>
              </li>
              <li>
                <a onClick={onShowCart}>
                  <i className="fa-solid fa-bag-shopping"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {show && (
        <div className="overlay">
          <div className="cart">
            <div className="closeCart">
              <h3>Carrinho de Compras</h3>
              <button
                onClick={onShowCart}
                className="btn-close"
                aria-label="Close"
              ></button>
            </div>

            {shoppingCart.map((produto) => (
              <div className="cartItem" key={produto.id}>
                <div className="cartItemDetails">
                  <img
                    src={produto.imagem}
                    alt={produto.nome}
                    className="cartImage"
                  />
                  <div className="cartItens">
                    <div>
                      <h5>{produto.nome}</h5>
                      <button
                        onClick={() => removeToCart(produto.id)}
                        className="ButtonDelete"
                      >
                        Excluir
                      </button>
                    </div>
                    <div>
                      <span>R${produto.preco}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="cartTotal">
              <h4>Total: R${total.toFixed(2)}</h4>
            </div>

            <button className="finish">Finalizar Compra</button>
          </div>
        </div>
      )}

      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={compras1} className="d-block w-100 carouselImg" />
          </div>
          <div className="carousel-item">
            <img src={compras2} className="d-block w-100 carouselImg" />
          </div>
          <div className="carousel-item">
            <img src={compras3} className="d-block w-100 carouselImg" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

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

export default App;
