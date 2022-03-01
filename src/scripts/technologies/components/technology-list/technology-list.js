import '@styles/technology-list.styl';
import React from 'react';
import { Tag } from '@glorious/taslonic/react';
import categories from '@scripts/technologies/data/categories'
import technologyService from '@scripts/technologies/services/technology/technology';

export const TechnologyList = () => {
  const groups = technologyService.get();
  return (
    <ul className="r-technology-list">
      {groups.map(({ categoryName, technologies }) => (
        <li key={categoryName} className="r-technology-list-group" data-tech-group>
          <h2>{categoryName}</h2>
          <ul>
            {technologies.map(({ name, experience, usage, first_adopted }) => (
              <li key={name} className="r-technology-list-group-item">
                <h3>{name}</h3>
                <ul>
                  {buildDetailElements({ experience, usage, first_adopted }).map(({ label, value }, index) => (
                    <li key={index}>
                      <div className="r-technology-list-group-detail-label" data-detail-label>
                        {label}
                      </div>
                      <div className="r-technology-list-group-detail-value" data-detail-value>
                        {value}
                      </div>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

function buildDetailElements({ experience, usage, first_adopted }){
  return [
    { label: 'Experience', value: experience },
    { label: 'Usage', value: usage },
    { label: 'First Adopted', value: first_adopted }
  ];
}
