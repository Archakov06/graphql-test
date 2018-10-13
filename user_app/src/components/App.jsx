import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { UserPage, HomePage } from 'pages';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/user/:id" component={UserPage} />
    </Switch>
  );
};

export default App;
