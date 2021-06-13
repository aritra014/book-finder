import axios from 'axios';
import BookSearchModule from './BookSearchModule';
import {Card,Navbar,NavbarBrand,NavbarText,Container, NavItem} from 'reactstrap';
import MadeWithLove from 'react-made-with-love';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


import './App.css';

function App() {



  return (
    <Router>
    <div className="App">
    
     <Switch>

    <Route path="/">
    <BookSearchModule></BookSearchModule>
          </Route>
    
    </Switch>
      
      <BookSearchModule></BookSearchModule>

      <div className="fixed-bottom">  
               
                <Card body  color="light" className="text-center">
                    <MadeWithLove
  by="Aritra"
  emoji
/>
</Card >
                    
              
        </div>


</div>
 
 </Router>
 
 );
}

export default App;
