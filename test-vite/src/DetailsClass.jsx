import React from "react";

export class DetailsClass extends React.Component {
  render() {
    return (
      <>
        <h1>My Name is {this.props.name}.</h1>
        <h2>I am {this.props.age} Years Old.</h2>
        {this.props.children}
      </>
    );
  }
}
