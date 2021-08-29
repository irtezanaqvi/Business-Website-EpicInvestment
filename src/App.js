import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import Services from "./Services";
import Work from "./Work";
import Navbar from "./Navbar";
import {Switch} from "react-router-dom";
import {Route,Redirect} from "react-router-dom";




function App() {
  
  return(
    <>
    <Navbar />
   <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/services" component={Services} />
     <Route exact path="/work" component={Work} />
     <Redirect to ="/" />
   </Switch>
   
   

   </>
  )
  
}


export default App;
