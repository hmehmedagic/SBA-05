// we are creating a template view using react
// rfce <--- reactBoilerplate

import React, { Component } from "react";

export default class Show extends Component {
  render() {
    const cheese = this.props.cheese;
    return <>
      <h1>The {cheese.name} is {cheese.color}</h1>
        { cheese.readyToEat ? "It is Ready to Eat" : "ewl,, its not ready Yet"}
    </>;
  }
}