import React, { Component } from "react";


class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      List: [
        { name: "Ram", email: "ram@test.com", contact: "123" },
        { name: "Shyam", email: "shyam@test.com", contact: "234" },
        { name: "Mohan", email: "mohan@test.com", contact: "345" },
      ],
    };
  }

  render() {
    return (
      <div>
        {this.state.List.map((item) => (
          <div>
            <span> Name:{item.name}</span>
            <span> Email: {item.email}</span>
            <span> Contact:{item.contact}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default List;
