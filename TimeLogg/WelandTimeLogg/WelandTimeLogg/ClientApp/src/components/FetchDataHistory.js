import React, { Component } from "react";
import axios from 'axios';
import Form from './FetchDataActivityLogEntries'
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


class FetchDataHistory extends React.Component {
    state = {
        loading: true,
        activityLogEntries: [],
        person: null

    };

    async componentDidMount() {
        const url = "https://localhost:44325/api/activityLogEntries";

        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({ activityLogEntries: data, loading: false });
    }

    ListOfNames = () => {

        this.state.activityLogEntries.map((form, id) => {
            return <li>{form.name}</li>;
        })

    }

    render() {
        return (
            <Container>
                <h2>Historik</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Aktivitet</th>
                            <th>Timmar</th>
                            <th>Datum</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> <div> {this.state.activityLogEntries.map((form, id) => {
                                return <p>{form.id}</p>

                            })}
                            </div></td>
                            <td> <div>{this.state.activityLogEntries.map((form, id) => {
                                return <p>{form.name}</p>

                            })}
                            </div></td>
                            <td> <div>{this.state.activityLogEntries.map((form, id) => {
                                return <p>{form.hours}h</p>

                            })}
                            </div></td>
                            <td> <div>{this.state.activityLogEntries.map((form, id) => {
                                return <p>{form.createdDate}h</p>

                            })}
                            </div></td>
                        </tr>

                    </tbody>
                    </Table>
                <button type="submit" class="btn btn-info">Skriv ut som Excel</button>
                
                    
               
            </Container >
        );
    }
}


export default FetchDataHistory;






////<div>
//                //{this.state.activityLogEntries.map((test, index) => {
                //    return <h1>{test.name}</h1>
                //})}
                //    </div>

//class FetchDataHistory extends React.Component {
//    state = {
//            Activity: []
//    }




//    componentDidMount() {
//        axios.get("https://localhost:44383/api/activityLogEntries").then(response => {
//            console.log(response.data);
//            this.setState({
//                Activity: response.data
//            });
//        });

//    }

//        render() {
//            return (
//                <div>
//                    <h1>Aktivitetslista</h1>

//                        <table>
//                            <tr>
//                                <th>Name</th>
//                                <th>Id</th>

//                        </tr>
//                        {this.state.Activity.map(Activity =>
//                                <tr>
//                                    <td>{Activity.Name}</td>
//                                    <td>{Activity.Id}</td>

//                                    <td>


//                                    </td>
//                                </tr>
//                            )}
//                        </table>
//                 </div>    
//            );
//        }
//    }

//export default FetchDataHistory;


    //render() {
    //    return (
    //        <div>
    //            {this.state.tests ? (
    //                <div>loading...</div>
    //            ) : (
    //                    <div>
    //                        <div>{this.state.tests.map(test =>
    //                        {tests.Name}
    //                            }</div>
    //                    </div>
    //                )}
    //        </div>

    //    );

    //}


