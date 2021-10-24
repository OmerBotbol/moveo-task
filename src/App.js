import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import UserPage from './components/UserPage';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/" component={UserPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
