// import React from 'react'
// function Home(props)
//  {
//    console.log(props.items.name)
//     // const data={items} ;
//     //console.log(props.items.name)
//     // const data=items.map(()=>
//     // {
//     //     console.log(data)
//     // })

//     return (
//         <div>
//         <h1>{props.items.name}</h1>
//     </div>
//     )
// }
// export default Home

// import React, { Component } from 'react'

// class Home extends Component {
//     render() {
//         return (
//             <div>
//                 {/* <h1>{this.props.items}</h1>  */}
//                 <h1>{this.props.data}</h1>
//             </div>
//         )
//     }
// }

// export default Home

import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //  name: "Ram",
      //  city: "Indore",
      count: 1,
      // show: true
    };
  }
  //    updateName()
  //    {
  //        this.setState({
  //          name:'Shyam',
  //          //count:this.state.count+1
  //        })
  //    }

  countNumber() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  dcountNumber() {
    this.setState({
      count: this.state.count - 1,
    });
  }


  render() {
    return (
      <div>
        {/* <h1>{this.state.count}</h1>
                <h1>{this.state.city}</h1>
                {/* <button onClick={()=>{this.updateName()}}>Update name</button> 
//                 <button onClick={()=>{this.countNumber()}}>Count</button> */}
        {/*
// this.state.show?
// <h1>Hello</h1>:null

// */}

        {/* <button onClick={()=>{this.state({show:false})}}>Click!!</button> */}

        <h1>Hello</h1>
        <h1>{this.state.count}</h1>
        <button
          onClick={() => {
            this.countNumber();
          }}
        >
          Counter
        </button>
        <button
          onClick={() => {
            this.dcountNumber();
          }}
        >
          DCounter
        </button>

        {/* <button onClick={()=>{this.detail()}}>Detail</button> */}
Details<select>
<option></option>
  <option>One</option>
  <option>Two</option>
  <option>Three</option>
  <option>Four</option>
  <option>Five</option>
</select>

      </div>
    );
  }
}

export default Home;
