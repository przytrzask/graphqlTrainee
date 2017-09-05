import React, { Component } from 'react';

import App from 'grommet/components/App';
import Title from 'grommet/components/Title';
import LinkList from './components/LinkList';
import CreateLink from './components/CreateLink';
import Header from './components/Header';
import Login from './components/Login';
import { Switch, Route } from 'react-router-dom'


export default class BasicApp extends Component {
  render() {
    return (
      <App>
          <Header />
            <Switch>
              <Route exact path='/' component={LinkList} />
              <Route exact path='/create' component={CreateLink} />
              <Route exact path='/login' component={Login} />

            </Switch>
      </App>
    )
  }
}
