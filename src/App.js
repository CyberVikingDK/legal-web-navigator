import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Hero from './components/Hero';
import './i18n';

function App() {
  const { t } = useTranslation();

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Hero} />
          {/* ...other routes... */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
