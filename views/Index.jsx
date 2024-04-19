import React, { Component } from "react";
export default class Index extends Component {
  render() {
    return (
      <>
        <div>
          <h1>Index Page</h1>
          <ul> 
                <li><a href={'/fruits'}>Fruits</a></li>
                <li><a href={'/vegetables'}>Vegetables</a></li>
                <li><a href={'/cheeses'}>Cheeses</a></li>
            
            </ul>
        </div>
      </>
    );
  }
}