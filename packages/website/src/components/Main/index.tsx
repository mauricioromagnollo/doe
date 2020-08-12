import React from 'react';

import './styles.css';

import Donor from '../Donor';

const Main: React.FC = () => {
  return (
    <main>
      <h2>Últimos <span>Doadores</span></h2>

      <section className="donors">

        {/* Statically added */}
        <Donor bloodType="O+" name="x0n4d0" />
        <Donor bloodType="O+" name="x0n4d0" />
        <Donor bloodType="O+" name="x0n4d0" />
        <Donor bloodType="O+" name="x0n4d0" />
        {/* Get this info from Database */}

      </section>
    </main>
  );
}

export default Main;
