import React from 'react';

function Loader():JSX.Element {
  return (
    <section className="films">
      <section className="films-list">
        <div className="lds-dual-ring"/>
        <h2 className="films-list__title">Loading...</h2>
      </section>
    </section>
  );
}

export default Loader;
