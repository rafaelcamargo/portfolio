import '@styles/read-list.styl';
import React from 'react';
import readService from '@scripts/reads/services/read/read';
import dateService from '@scripts/base/services/date/date';

export const ReadList = () => {
  const reads = groupReadsByMonth(readService.get());
  return (
    <ul className="r-read-list">
      {Object.keys(reads).map(monthString => (
        <li key={monthString} className="r-read-list-group" data-read-group>
          <ul>
            {reads[monthString].map(({ title, author }, index) => (
              <li key={index}>
                <h3>{title}</h3>
                <p>{author}</p>
              </li>
            ))}
          </ul>
          <h2>{buildGroupTitle(monthString)}</h2>
        </li>
      ))}
    </ul>
  );
};

function groupReadsByMonth(reads){
  const groups = {};
  Object.keys(reads).forEach(bookId => {
    const book = reads[bookId];
    if(book.read_on) getGroupByKey(groups, buildBookGroupKey(book)).push(book);
  });
  return groups;
}

function buildBookGroupKey(book){
  const [year, month] = book.read_on.split('-');
  return `${year}-${month}`
}

function getGroupByKey(groups, key){
  if(!groups[key]) groups[key] = [];
  return groups[key];
}

function buildGroupTitle(monthString){
  return dateService.formatMonthDescriptively(monthString);
}
