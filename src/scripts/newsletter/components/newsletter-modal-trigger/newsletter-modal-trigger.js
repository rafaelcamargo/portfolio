import React, { Component } from 'react';
import { dialog } from '@glorious/taslonic/react';
import { Button } from '@scripts/base/components/button/button';
import { NewsletterForm } from '@scripts/newsletter/components/newsletter-form/newsletter-form';

export class NewsletterModalTrigger extends Component {
  openNewsletterModal = () => {
    dialog.open({
      title: 'Newsletter',
      content: <NewsletterForm lang={ this.props.lang } />,
      width: '350px'
    });
  };

  render(){
    return (
      <span className="r-newsletter-modal-trigger">
        <Button theme="link" onClick={ this.openNewsletterModal }>
          { this.props.children }
        </Button>
      </span>
    );
  }
}
