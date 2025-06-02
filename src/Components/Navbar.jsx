import React from "react";
import { useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [show, setShow] = useState(false);

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
        <div className="cart">
          <div className="closeCart">
            <h3>Carrinho de Compras</h3>
            <button
              onClick={onShowCart}
              className="btn-close"
              aria-label="Close"
            ></button>
          </div>

          <p>Seu carrinho está vazio.</p>
        </div>
      )}
    </>
  );
}

export default Navbar;
