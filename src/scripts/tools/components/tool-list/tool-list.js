import '@styles/tool-list.styl';
import React from 'react';
import { Tag } from '@glorious/taslonic/react';
import categories from '@scripts/tools/data/categories'
import toolService from '@scripts/tools/services/tool/tool';

export const ToolList = () => {
  const groups = toolService.get();
  return (
    <ul className="r-tool-list">
      {groups.map(({ categoryName, tools }) => (
        <li key={categoryName} className="r-tool-list-group" data-tech-group>
          <h2>{categoryName}</h2>
          <ul>
            {tools.map(({ name, experience, usage, first_adopted }) => (
              <li key={name} className="r-tool-list-group-item">
                <h3>{name}</h3>
                <ul>
                  {buildDetailElements({ experience, usage, first_adopted }).map(({ label, value }, index) => (
                    <li key={index}>
                      <div className="r-tool-list-group-detail-label" data-detail-label>
                        {label}
                      </div>
                      <div className="r-tool-list-group-detail-value" data-detail-value>
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
    { label: 'First Adopted', value: first_adopted }
  ];
}
