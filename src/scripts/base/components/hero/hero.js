import '@styles/hero.styl';
import React from 'react';
import { Col } from '@scripts/base/components/col/col';
import { Row } from '@scripts/base/components/row/row';
import { Section } from '@scripts/base/components/section/section';

export const Hero = ({ size, title, sectionTheme, containerSize, children }) => {
  return (
    <div className="r-hero">
      <Section theme={sectionTheme} size={size} containerSize={containerSize}>
        {buildCustomContent(title, children)}
      </Section>
    </div>
  )
}

function buildCustomContent(title, children){
  return title ? <h1>{ title }</h1>: children;
}
