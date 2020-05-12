import React, { Component } from "react";
import axios from 'axios';
import Form from "./Form";
import Button from "react-bootstrap/Button";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Activity from '/Activity';


class FetchDataActivity extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            activity: [],
            columnDefs: [{
                headerName: "Aktivitet", field: "make"
            }, {
                headerName: "Tid", field: "model"
            }]
            //rowData: [{
            //    make: "Toyota", model: "Celica", price: 35000
            //}, {
            //    make: "Ford", model: "Mondeo", price: 32000
            //}, {
            //    make: "Porsche", model: "Boxter", price: 72000
            //}],

        }
    }

    //componentDidMount() {
    //    return fetch('https://localhost:44383/api/activities')
    //        .then((response) => response.json())
    //        .then((responseJson) => {
    //            this.setState(
    //                {
    //                    isLoading: false,
    //                    activity: responseJson,
    //                },
    //            );
    //        })

    //}


    async componentDidMount() {
        const url = "https://localhost:44383/api/activities";

        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({ activity: data });
    }


    //};
    //async componentDidMount() {
    //           const url = "https://localhost:44383/api/activities";

    //    const response = await fetch(url);
    //    const data = await response.json();
    //    fetch(data)
    //    const result = await result.json();
    //     rowData 
    //        this.setState({ rowData });
    //}


    //Iterating & Rendering with Loops in React components


    render() {
        var activityList = this.state.activity.map((activity, id) => {
            return <li key={id}>{activity.name}</li>;
        });
        var idList = this.state.activity.map((activity, id) => {
            return <li key={id}>{activity.id}</li>;
        });
        var forEachFunction =
            this.state.activity.forEach(function (activity, id) {
                console.log(activity, id);

            });

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
                        <div>
                            <p>{this.props.activity.name}</p>
                            <p>{this.props.activity.id}</p>
                        </div>
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
                            <th scope="row">
                                {activityList}
                            </th>
                            <td>
                                {
                                    this.state.activity.map((activity, key) =>
                                        <Activity activity={activity} key={activity.id} />
                                    )
                                }
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                {forEachFunction}
                                <p>Hey</p>
                            </th>
                            <td>3 h</td>
                        </tr>
                    </table>
                    <Button variant="primary">Spara och skicka till historik</Button>{" "}
                </div>
                <p>Här:</p>
                <div
                    className="ag-theme-alpine"
                    style={{
                        height: '250px',
                        width: '600px'
                    }}
                >
                    <AgGridReact
                        columnDefs={this.state.columnDefs}
                        rowData={activityList}>
                    </AgGridReact>
                </div>
            </div>


        );
    }
}



export default FetchDataActivity;

//{
//    this.state.activity.map((activity, id) => {
//        return <li key={id}>{activity.name}</li>;
//    })
//}

//<p>Här:</p>
//    <div
//        className="ag-theme-alpine"
//        style={{
//            height: '250px',
//            width: '600px'
//        }}
//    >
//        <AgGridReact
//            columnDefs={this.state.columnDefs}
//            rowData={
//                this.state.activity.map((activity, id) => {
//                    return <li key={id}>{activity.name}</li>;
//                })
//            }

//        >

//        </AgGridReact>
//    </div>