import React, { Component } from 'react';

import App from 'grommet/components/App';
import Title from 'grommet/components/Title';
import LinkList from './components/LinkList';
import CreateLink from './components/CreateLink';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom'


export default class BasicApp extends Component {
  render() {
    return (
      <App>
      <div className='center w85'>
        <Header />
        <div className='ph3 pv1 background-gray'>
          <Switch>
            <Route exact path='/' component={LinkList} />
            <Route exact path='/create' component={CreateLink} />
          </Switch>
        </div>
      </div>
      </App>
    )
  }
}
