import '@styles/influences-list.styl';
import React from 'react';
import books from '@scripts/influences/data/books.json';
import influences from '@scripts/influences/data/influences.json';

export const InfluencesList = () => {
  return (
    <ul className="r-influences-list">
      {filterInfluencingBooks().map(({ title, author }, index) => (
        <li key={index}>
          <p className="r-influences-list-item-title" data-title>{title}</p>
          <p className="r-influences-list-item-author">{author}</p>
        </li>
      ))}
    </ul>
  );
}

function filterInfluencingBooks(){
  return influences.books.map(bookId => books[bookId]);
}
