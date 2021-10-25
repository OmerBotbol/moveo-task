import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import UserPage from './components/UserPage';

function App() {
  const [user, setUser] = useState();

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <MainPage setUser={setUser} />
          </Route>
          <Route path="/:username">
            <UserPage user={user} setUser={setUser} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
