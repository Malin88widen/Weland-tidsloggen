import React, { Component } from "react";
import axios from 'axios';
import Form from './FetchDataActivityLogEntries'
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";



import ReactExport from "react-export-excel";
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
const dataSet1 = [
    {
        aktivitet: "Dokumentation",
        timmar: 3,
        datum: "2020-06-02",
       
    },
    {
        name: "Monika",
        amount: 355000,
        sex: 'F',
        is_married: false
    },
    {
        name: "John",
        amount: 250000,
        sex: 'M',
        is_married: false
    },
    {
        name: "Josef",
        amount: 450500,
        sex: 'M',
        is_married: true
    }
];

const dataSet2 = [
    {
        name: "Johnson",
        total: 25,
        remainig: 16
    },
    {
        name: "Josef",
        total: 25,
        remainig: 7
    }
];

const multiDataSet = [
    {
        columns: ["Name", "Salary", "Sex"],
        data: [
            ["Johnson", 30000, "Male"],
            ["Monika", 355000, "Female"],
            ["Konstantina", 20000, "Female"],
            ["John", 250000, "Male"],
            ["Josef", 450500, "Male"],
        ]
    },
    {
        xSteps: 1, // Will start putting cell with 1 empty cell on left most
        ySteps: 5, //will put space of 5 rows,
        columns: ["Name", "Department"],
        data: [
            ["Johnson", "Finance"],
            ["Monika", "IT"],
            ["Konstantina", "IT Billing"],
            ["John", "HR"],
            ["Josef", "Testing"],
        ]
    }
];

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





                <ExcelFile>
                    <ExcelSheet data={dataSet1} name="Employees">
                        <ExcelColumn label="Aktivitet" value="aktivitet" />
                        <ExcelColumn label="Timmar" value="timmar" />
                        <ExcelColumn label="Datum" value="datum" />
                    </ExcelSheet>


                    <ExcelSheet data={dataSet2} name="Leaves">
                        <ExcelColumn label="Name" value="name" />
                        <ExcelColumn label="Total Leaves" value="total" />
                        <ExcelColumn label="Remaining Leaves" value="remaining" />
                    </ExcelSheet>
                </ExcelFile>


            </Container >
        );
    }
}


export default FetchDataHistory;















                //<button type="submit" class="btn btn-info">Skriv ut som Excel</button>
   //<ExcelFile>
                //    <ExcelSheet dataSet={multiDataSet} name="Organization" />
                //</ExcelFile>








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


