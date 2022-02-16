import '@styles/project-featured-list.styl';
import React from 'react';
import projects from '@scripts/projects/data/featured-projects.json';

export const ProjectFeaturedList = () => {
  return (
    <div className="r-project-featured-list-wrapper">
      <div className="r-project-featured-list-container">
        <ul className="r-project-featured-list">
          {projects.map(({ description, days_invested }, index) => (
            <li key={index}>
              <h2>In {days_invested} days</h2>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
