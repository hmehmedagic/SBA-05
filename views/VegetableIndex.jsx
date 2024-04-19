import React, { Component } from "react";
export default class Index extends Component {
render() {
    const { vegetables } = this.props;
    console.log(vegetables);
    return (
      <>
        <div>
          <h1>Vegetables Index Page</h1>
          <ul>
            {vegetables.map((vegetable, i) => {
              return (
                <li key={i}>
                  The <a href={`/vegetables/${vegetable.name}`}>{vegetable.name}</a> is {vegetable.color}{" "}
                  <br></br>
                  {vegetable.readyToEat
                    ? `It is ready to eat`
                    : `It is not ready to eat`}
                  <br />
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}