import React, { Component } from "react";
import axios from 'axios';
import Form from "./Form";
import Button from "react-bootstrap/Button";

class FetchDataActivity extends React.Component {
    state = {
        loading: true,
        activity: [],
        person: null
    };

    async componentDidMount() {
        const url = "https://localhost:44383/api/activities";

        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({ activity: data, loading: false });



    }
    render() {
        return (


            //<div>
            //    {this.state.loading || !this.state.activity ? (
            //        <div>loading...</div>
            //    ) : (
            //            <div>
            //                <div>{this.state.activity.id}</div>
            //                <div>{this.state.activity.name}</div>
            //            </div>

            //        )}
            

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
                                <th scope="row">{this.state.activity.name}</th>
                            <td>1,30 h</td>
                        </tr>
                        <tr>
                            <th scope="row">    
                                {this.state.activity.map((activity, id) => {
                                    return <li key={id}>{activity.name}</li>;
                                })}
                              
                                    </th>
                                <td>3 h</td>
                        </tr>
                    </table>
                    <Button variant="primary">Spara och skicka till historik</Button>{" "}
                </div>
                </div>
            

        );
    }
}



export default FetchDataActivity;

