import React from 'react';

function EmptyMainPage(): JSX.Element {
  return (
    <section className="films">
      <section className="films-list">
        <h2 className="films-list__title">There are no movies in our database</h2>
      </section>
    </section>
  );
}

export default React.memo(EmptyMainPage);
