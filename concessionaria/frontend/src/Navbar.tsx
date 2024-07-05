import React from 'react';
import {Link} from 'react-router-dom'
import './Navbar.css';



function Navbar() {
  return (
    <header>
      <nav className="menu">
        <div className="logo">
          <a href="/">Início</a>
        </div>
        <ul className="nav-links">
        <li><Link to="/CadastrarVeiculo">Adicionar carro</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
