import  { Component } from "react";
import NavBar from "./component/NavBar";
import {BrowserRouter, Route} from "react-router-dom";
import fact1 from './component/fact1';
import fact2 from './component/fact2';
import fact3 from './component/fact3';




class App extends Component {
  render() {
    return (
     <BrowserRouter>
       <div className="App">
        <NavBar />
    <Route path='/fact1' component={fact1}/>
    <Route path='/fact2' component={fact2}/>
    <Route path='/fact3' component={fact3}/>
      </div>
      </BrowserRouter>
    )
  }
}


export default App;