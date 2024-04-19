// we are creating a template view using react
// rfce <--- reactBoilerplate

import React, { Component } from "react";

export default class Show extends Component {
  render() {
    const vegetable = this.props.vegetable;
    return <>
      <h1>The {vegetable.name} is {vegetable.color}</h1>
        { vegetable.readyToEat ? "It is Ready to Eat" : "ewl,, its not ready Yet"}
    </>;
  }
}