import React, { Component } from "react";
export default class Index extends Component {
  render() {
    const { cheeses } = this.props;
    console.log(cheeses);
    return (
      <>
        <div>
          <h1>Cheeses Index Page</h1>
          <ul>
            {cheeses.map((cheese, i) => {
              return (
                <li key={i}>
                  The <a href={`/cheeses/${cheese.name}`}>{cheese.name}</a> is {cheese.color}{" "}
                  <br></br>
                  {cheese.readyToEat
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