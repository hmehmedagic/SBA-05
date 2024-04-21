    import React, { Component } from "react";

    class PartsIndexTemplate extends Component {
    render() {
        const { items, classification } = this.props;

        return (
            <>
        <html>
            <head>
            <title>{classification} Index Page</title>
            <link rel="stylesheet" type="text/css" href="part_style.css" />
            </head>
            <body>
            <div>
                <h1 className="index_name">{classification} Index Page</h1>
                <ul>
                {items.map((item, i) => (
                    <li key={i}>
                    <button className="parts_info">
                        <h3>{item.name}</h3>
                        <hr />
                        <img src={item.url} alt={item.name} />
                    </button>
                    <div className="info_container">
                        <h4>Manufacturer: {item.manufacturer}</h4>
                        <h5>Part Info:</h5>
                        <p>{item.part_info}</p>
                    </div>
                    </li>
                ))}
                </ul>
            </div>
            </body>
            <script src="app.js"></script>
        </html>
        </>
        );
    }
    }

    export default PartsIndexTemplate;