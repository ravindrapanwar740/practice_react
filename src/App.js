import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Home2 from "./components/Home2";
import User from "./components/User"

import React, { Component } from "react";
import Hooks from "./components/Hooks";
import Form from "./components/Form";
import List from "./components/List";
import List2 from "./components/List2";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import About from "./components/About";
import Home3 from "./components/Home3";

class App extends Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //      toggle:true
  //   }
  // }

  render() {
    return (
      <div>
        <Router>
<Link to="">Home  </Link>
<Link to="/list">List  </Link>
<Link to="/about">About  </Link>

<Route exact path="/" component={Home3}/>
<Route path="/list" component={List2}/>
<Route path="/about" component={About}/>
     </Router>
       
      </div>
    );
  }
}

export default App;
















{
  /* <Form /> */
}
{
  /* <Hooks /> */
}
{
  /* {
          this.state.toggle?
          <Home2 />:null
 }
 <button onClick={()=>{this.setState({toggle:!this.state.toggle})}}>Clickkkkkkk</button> */
}

// function App() {

// const item=[{
//   id:1,
//   name:'Ram',
//   age:26
// },
// {
//   id:2,
// name:'Shyam',
// age:27
// },
// {
//   id:3,
// name:'Mohan',
// age:29
// }
// ]

//   return (
//     <div className="App">
//     <h1>App</h1>
//  <Home2 />

// {/* <User /> */}

//     {/* <Home items={{Name:'ram'}} data="Indore"/> */}

//     {/* <Home items={item} data="Indore"/> */}
// {/* <Home text="Function component"/> */}

//     </div>
//   );
// }

//export default App;
