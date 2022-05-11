import React from 'react';
import Header from '../header/header';
import MainNavigation from '../main-navigation/main-navigation';
import Sort from '../sort/sort';
import Footer from '../footer/footer';

function EmptyMainPage():JSX.Element {
  return (
    <>
      <Header />
      <main className="main">
        <MainNavigation />
        <Sort />
        <section className="films">
          <section className="films-list">
            <h2 className="films-list__title">There are no movies in our database</h2>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default EmptyMainPage;
