import React, { Component } from "react";
import Form from "./Form";
import Button from "react-bootstrap/Button";

function HomePage() {
    return (
        <div id="HomePageCSS">
            <div class="container">
                <div class="row">
                    <div class="col-sm-4"></div>
                    <h1>Hej Malin</h1>
                </div>
                <br />
                <div class="row">
                    <div class="col-sm-4"></div>
                    <p>
                        <Form />
                    </p>
                </div>
                <br />
                <br />
                <br />
                <h4>Idag:</h4>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Aktivitet</th>
                            <th scope="col">Tid</th>
                        </tr>
                    </thead>

                    <tr>
                        <th scope="row">Support</th>
                        <td>1,30 h</td>
                    </tr>
                    <tr>
                        <th scope="row">Möte</th>
                        <td>3 h</td>
                    </tr>
                </table>
                <Button variant="primary">Spara och skicka till historik</Button>{" "}
            </div>
        </div>
    );
}

export default HomePage;

// class homePageWelands extends Component {
//   render() {
//     return

//     <h1>Hej</h1>

//   }
// }

// export default homePageWelands;

//Dynamiskt -namnet på användaren
