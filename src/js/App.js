import React, { Component } from 'react';

import App from 'grommet/components/App';
import Title from 'grommet/components/Title';
import LinkList from './components/LinkList';

export default class BasicApp extends Component {
  render() {
    return (
      <App>
        <LinkList />
      </App>
    );
  }
}
