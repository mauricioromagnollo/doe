import React from 'react';
import './App.css';

import Header from './components/Header';
import Form from './components/Form';
import Main from './components/Main';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Form />
      <Main />
      <Footer />
    </>
  );
}

export default App;
