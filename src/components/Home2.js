import React, { Component } from 'react'

class Home2 extends Component {
  
      // constructor(props) {
    //     super(props)
    // console.log("constructor")
    //     this.state = {
    //        active:null,
    //        name:null 
    //     }
  
    // componentDidMount()
    // {
    //     this.setState=({
    //         data:"Updated"
    //     })
    //     console.log("ComponentDid Mount")
    // }


// componentDidUpdate(){
//     console.log("componentDidUpdate")
// if(this.state.name==null)
// {
//    this.setState=({
//        name:"Ram"
//    })
// }
   
componentWillUnmount()
{
 alert("Data is deleted")
}


    render() {
        console.log("render")
        return (
<div>
<ul>
    <li>Name:Ram</li>
    <li>Email:ram@test.com</li>
</ul>

</div>


            // <div>
            //     <h1>{this.state.name}</h1>
            //   <button onClick={()=>this.setState({active:"yes"})}>Active</button>  
            // </div>
        )
    }
}

export default Home2
