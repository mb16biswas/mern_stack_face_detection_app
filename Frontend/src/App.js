import React , {Component} from 'react';
// import Navbar from "./Navbar"
import Sign from "./Components/Sign/Sign"
import Admin from "./Components/Admin/Admin"
import {
  
  Switch,
  Route,
 
  BrowserRouter
} from "react-router-dom";
class App extends Component{
  render(){

    return(
      <BrowserRouter>
     

      <Switch>
        <Route exact path ="/" component={Sign} />
        <Route exact path ="/admin" component={Admin} />
 

      

        
      </Switch>

   

   </BrowserRouter>
     
  
    )
  }
}
export default App