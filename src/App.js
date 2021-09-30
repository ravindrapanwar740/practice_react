import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Home2 from "./components/Home2";
//import User from "./components/User"

import React, { Component } from 'react'
import Hooks from "./components/Hooks";
import Form from "./components/Form";

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       toggle:true
    }
  }
  
  render() {
    return (
      <div>
        <Form />
        {/* <Hooks /> */}
        {/* {
          this.state.toggle?
          <Home2 />:null
 }
 <button onClick={()=>{this.setState({toggle:!this.state.toggle})}}>Clickkkkkkk</button> */}
      </div>
    )
  }
}

export default App















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
