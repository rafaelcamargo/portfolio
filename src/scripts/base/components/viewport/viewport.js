import '@styles/viewport.styl';
import React, { Component } from 'react';
import { Footer } from '@scripts/base/components/footer/footer';
import { Meta } from '@scripts/base/components/meta/meta';
import { Sidebar } from '@scripts/base/components/sidebar/sidebar';
import { Topbar } from '@scripts/base/components/topbar/topbar';

export const Viewport = ({
  title,
  description,
  keywords,
  twitterCard,
  image,
  hideMenu,
  showFooterDivider,
  children
}) => {
  return (
    <div className={buildTopbarCssClasses(hideMenu)}>
      <Meta
        title={title}
        description={description}
        keywords={keywords}
        twitterCard={twitterCard}
        image={image}/>
      <header>
        <Sidebar />
        <Topbar hideMenu={hideMenu} />
      </header>
      <main>
        <article className="r-viewport-content">
          {children}
        </article>
      </main>
      <Footer showDivider={showFooterDivider} />
    </div>
  )
}

function buildTopbarCssClasses(hideMenu){
  const baseCssClass = 'r-viewport';
  return hideMenu ? `${baseCssClass} r-viewport-menuless` : baseCssClass;
}
