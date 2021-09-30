import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      password: null,
    };
  }
submit()
{
    console.warn(this.state)
}
  render() {
    return (
      <div>
        <input type="text" name="user" onChange={(e)=>{this.setState({user:e.target.value})}}/>
        <br />
        <br />
        <input type="password" user="password" onChange={(e)=>{this.setState({password:e.target.value})}}/>
        <br />
        <br />
        <button onClick={()=>this.submit()}>Log in</button>
      </div>
    );
  }
}

export default Form;
