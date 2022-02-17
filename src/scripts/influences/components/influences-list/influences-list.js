import '@styles/influences-list.styl';
import React from 'react';
import reads from '@scripts/reads/data/reads.json';
import influences from '@scripts/influences/data/influences.json';

export const InfluencesList = () => {
  return (
    <ul className="r-influences-list">
      {filterInfluencingBooks().map(({ title, author }, index) => (
        <li key={index}>
          <h3 className="r-influences-list-item-title" data-title>{title}</h3>
          <p className="r-influences-list-item-author">{author}</p>
        </li>
      ))}
    </ul>
  );
}

function filterInfluencingBooks(){
  return influences.books.map(bookId => reads[bookId]);
}
