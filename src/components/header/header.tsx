import React from 'react';

function Header():JSX.Element {
  return (
    <header className="header">
      <h1 className="header__logo logo">Cinemaddict</h1>

      <section className="header__profile profile">
        <p className="profile__rating">Movie Buff</p>
        <img className="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35"/>
      </section>
    </header>
  );
}

export default Header;
