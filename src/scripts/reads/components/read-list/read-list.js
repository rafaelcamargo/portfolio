import '@styles/read-list.styl';
import React from 'react';
import readService from '@scripts/reads/services/read/read';
import dateService from '@scripts/base/services/date/date';

export const ReadList = () => {
  const reads = convertToDescendingOrderedList(groupReadsByMonth(readService.get()));
  return (
    <ul className="r-read-list">
      {reads.map(({ group_key, books }) => (
        <li key={group_key} className="r-read-list-group" data-read-group>
          <h2>{buildGroupTitle(group_key)}</h2>
          <ul>
            {books.map(({ title, author }, index) => (
              <li key={index}>
                <h3>{title}</h3>
                <p>{author}</p>
              </li>
            ))}
          </ul>
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

function convertToDescendingOrderedList(groupsObject){
  return orderListAsDescending(
    convertToList(groupsObject).map(group => ({ ...group, books: orderListAsDescending(group.books, 'read_on') })),
    'group_key'
  );
}

function convertToList(groupsObject){
  return Object.entries(groupsObject).map(([group_key, books]) => ({ group_key, books }))
}

function orderListAsDescending(list, attrName){
  return list.sort((a, b) => a[attrName] < b[attrName] ? 1 : -1);
}
