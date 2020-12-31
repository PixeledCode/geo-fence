import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import './App.css';
import Menubar from './components/Menubar';
import User1 from './User1';
import User2 from './User2';
import NotFound from './NotFound';

const App = () => (
  <Router>
    <Container>
      <Menubar />
      <Switch>
        <Route exact path="/" component={User1} />
        <Route exact path="/user1" component={User1} />
        <Route exact path="/user2" component={User2} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Container>
  </Router>
);

export default App;
