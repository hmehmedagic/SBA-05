import React, { Component } from "react";
export default class Index extends Component {
  render() {
    return (
      <>
      <html>
        <head>
          <title>Index Page</title>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Kenia"></link>
          <link rel="stylesheet" type="text/css" href="/style.css" />
        </head>
        <body className="home_body">
        <div>
          <div className="main_container">
            <img src="https://static.wikia.nocookie.net/armoredcore/images/3/39/Emblem_ACVI_C4-621_Raven.png" alt="picture of a raven" />
            <h1 className="main_title">Raven's Nest</h1>
          </div>
          {/* <h2 className="main_title" id="sub_text">Let's See How Far They Can Fly… On Borrowed Wings</h2> */}
          <div className="sub_text_container">
            <h2 className="sub_text">L</h2>
            <h2 className="sub_text">e</h2>
            <h2 className="sub_text">t</h2>
            <h2 className="sub_text">'</h2>
            <h2 className="sub_text">s</h2>
            <h2 className="sub_text">&nbsp;</h2>
            <h2 className="sub_text">S</h2>
            <h2 className="sub_text">e</h2>
            <h2 className="sub_text">e</h2>
            <h2 className="sub_text">&nbsp;</h2>
            <h2 className="sub_text">H</h2>
            <h2 className="sub_text">o</h2>
            <h2 className="sub_text">w</h2>
            <h2 className="sub_text">&nbsp;</h2>
            <h2 className="sub_text">F</h2>
            <h2 className="sub_text">a</h2>
            <h2 className="sub_text">r</h2>
            <h2 className="sub_text">&nbsp;</h2>
            <h2 className="sub_text">T</h2>
            <h2 className="sub_text">h</h2>
            <h2 className="sub_text">e</h2>
            <h2 className="sub_text">y</h2>
            <h2 className="sub_text">&nbsp;</h2>
            <h2 className="sub_text">C</h2>
            <h2 className="sub_text">a</h2>
            <h2 className="sub_text">n</h2>
            <h2 className="sub_text">&nbsp;</h2>
            <h2 className="sub_text">F</h2>
            <h2 className="sub_text">l</h2>
            <h2 className="sub_text">y</h2>
            <h2 className="sub_text">.</h2>
            <h2 className="sub_text">.</h2>
            <h2 className="sub_text">.</h2>
            <h2 className="sub_text">&nbsp;</h2>
            <h2 className="sub_text">O</h2>
            <h2 className="sub_text">n</h2>
            <h2 className="sub_text">&nbsp;</h2>
            <h2 className="sub_text">B</h2>
            <h2 className="sub_text">o</h2>
            <h2 className="sub_text">r</h2>
            <h2 className="sub_text">r</h2>
            <h2 className="sub_text">o</h2>
            <h2 className="sub_text">w</h2>
            <h2 className="sub_text">e</h2>
            <h2 className="sub_text">d</h2>
            <h2 className="sub_text">&nbsp;</h2>
            <h2 className="sub_text">W</h2>
            <h2 className="sub_text">i</h2>
            <h2 className="sub_text">n</h2>
            <h2 className="sub_text">g</h2>
            <h2 className="sub_text">s</h2>
          </div>
          <ul> 
              <li className="list_item"><a href={'/heads'}>Head</a></li>
              <li className="list_item"><a href={'/cores'}>Core</a></li>
              <li className="list_item"><a href={'/legs'}>Legs</a></li>  
          </ul>
        </div>
        </body>
        <script src="app.js"></script>
        </html>
      </>
    );
  }
}