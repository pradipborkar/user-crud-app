import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NotFound from './components/pages/NotFound';
import AddUser from './components/pages/users/AddUser';
import EditUser from './components/pages/users/EditUser';
import User from './components/pages/users/User'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/About" component={About}/>
          <Route exact path="/Contact" component={Contact}/>
          <Route exact path="/users/add" component={AddUser}/>
          <Route exact path="/users/edit/:id" component={EditUser}/>
          <Route exact path="/user/:id" component={User}/>
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
