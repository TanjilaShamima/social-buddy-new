import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Post from './components/Post/Post';
import NotFound from './components/NotFound/NotFound';
import SinglePost from './components/SinglePost/SinglePost';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route  path="/home">
              <Home></Home>
            </Route>
            <Route  path="/post">
              <Home></Home>
            </Route>
            <Route path="/posts/:id">
              <SinglePost></SinglePost>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
      </Router>
      
    </div>
  );
}

export default App;
