import React, { useState } from 'react';

import './styles.css';

const Form: React.FC = () => {

  const [isHelpButtonClicked, setIsHelpButtonClicked] = useState(false);

  function handleHelpButtonClick() {
    setIsHelpButtonClicked(!isHelpButtonClicked);
  }

  return (
    <>
      <button 
        className="help"
        onClick={handleHelpButtonClick}
      >Quero Ajudar</button>
      
      <section className={isHelpButtonClicked ? "form" : "form hide"}>
        <h2>Entre na Lista de Doadores</h2>
        <form action="/" method="POST" autoComplete="off">
          <input 
            type="text" 
            name="name"
            placeholder="Nome Completo"
          />
          <input 
            type="text" 
            name="email"
            placeholder="Email"
          />
          <input 
            type="text" 
            name="blood"
            placeholder="Tipo Sanguíneo"
          />
          <button>Quero Ajudar</button>
        </form>
      </section>    
    </>
  );
}

export default Form;
