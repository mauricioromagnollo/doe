import React from 'react';

import './styles.css';

import logo from '../../assets/logo.png';

const Header: React.FC = () => {
  return (
    <header>
      <img
        className="logo" 
        src={logo} 
        alt="Imagem da Logo DOE"
      />
      <h2>A sua doação importa</h2>
      <p>Salve até 3 vidas com 1 doação</p>
      <p>Mais de 38.000 doações são necessárias todos os dias</p>
      <p>Apenas 1,9% da população brasileira, doa sangue.</p>
    </header>
  );
}

export default Header;
