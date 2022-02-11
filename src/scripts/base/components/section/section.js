import '@styles/section.styl';
import React, { Component } from 'react';
import { Container } from '@glorious/taslonic/react';

const BASE_CLASS_NAME = 'r-section';

export const Section = ({ theme, size, containerSize, children }) => {
  return (
    <section className={buildClassName(theme, size)}>
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  )
}

function buildClassName(theme, size){
  return `${BASE_CLASS_NAME} ${buildThemeCssClass(theme)} ${buildSizeCssClass(size)}`.trim();
}

function buildThemeCssClass(theme){
  return theme == 'primary' ? `${BASE_CLASS_NAME}-theme-primary` : '';
}

function buildSizeCssClass(size){
  const prefix = `${BASE_CLASS_NAME}-size`;
  switch (size) {
    case 'small':
      return `${prefix}-small`;
    case 'large':
      return `${prefix}-large`;
    default:
      return ''
  }
}
