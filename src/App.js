import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './styles/App.scss';
import HomeDetails from './components/HomeDetails/HomeDetails';
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/homedetails">
            <HomeDetails></HomeDetails>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
