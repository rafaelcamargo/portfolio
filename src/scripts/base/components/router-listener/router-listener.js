import '@styles/row.styl';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import routeService from '@scripts/base/services/route/route';

class RRouterListener extends Component {
  constructor(props){
    super(props);
    routeService.init(this.props.history);
  }
  render() {
    return (
      <div>{ this.props.children }</div>
    );
  }
}

export default withRouter(RRouterListener);
