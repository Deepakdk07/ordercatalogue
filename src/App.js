// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js'
import ProductsContainer from './components/ProductsContainer.js'
import { BrowserRouter as Router,  Route } from "react-router-dom"
import Cart from './components/Cart';
// import { Dashboard } from '@material-ui/icons';

import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="app">
       <Router>
       <Navbar />
     
      <Route exact path ='/'>   
      <ProductsContainer />
      </Route>
      <Route exact path ='/cart'>   
      <Cart />
      </Route>
      <Route exact path ='/dashboard'>   
      <Dashboard />
      </Route>
      
      </Router>
    </div>
  );
}

export default App;
