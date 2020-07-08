import React, { Component } from "react";
import axios from 'axios';
import Form from './FetchDataActivityLogEntries'
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ReactExport from "react-export-excel";
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import Button from 'react-bootstrap/Button';
import ReactHTMLTableToExcel from 'react-html-table-to-excel'; 
import ActivityLogEntries from './FetchDataHistory'


    class FetchDataHistory extends Component {

        constructor(props) {
            super(props)

            this.state = {
                hour: '',
                name: '',
                activityLogEntries: [],
                createdDate: [],
                loading: true,
                person: null

            }

        }

        async componentDidMount() {
            const url = "https://localhost:44325/api/activityLogEntries";

            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            this.setState({ activityLogEntries: data, loading: false });
        }

        render() {

            var createdDateOutput = this.state.activityLogEntries.map((form, id) =>
                <p>{(new Date(form.createdDate).toLocaleDateString())}</p>
            );

            var createdHoursOutput = this.state.activityLogEntries.map((form, id) => {
                return <p>{form.hours} h</p>
            });

            var createdActivityNameOutput = this.state.activityLogEntries.map((form, id) => {
                return <p>{form.name}</p>
            });
         
            return (
                <Container>
                    <h2>Historik</h2>

                    <Table id='emp' class='table' striped bordered hover>
                        <thead>
                            <tr>

                                <th>Aktivitet</th>
                                <th>Timmar</th>
                                <th>Datum</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td key={createdActivityNameOutput}>
                                    <span>{createdActivityNameOutput}</span>
                                </td>
                                <td>
                                    <span>{createdHoursOutput}</span>
                                </td>
                                <td>
                                    <span>{createdDateOutput}</span>
                                </td>
                            </tr>

                        </tbody>
                    </Table>
                    <div>
                        <ReactHTMLTableToExcel
                            className="btn btn-info"
                            table="emp"
                            filename="ReportExcel"
                            sheet="Sheet"
                            buttonText="Export excel" />
                    </div>
   
                </Container >

            )
        }
    }


export default FetchDataHistory;


                    //<ExcelFile>
                    //    <ExcelSheet data={dataSet1} name="WelandTimeLogg">
                    //        <ExcelColumn label="Aktivitet" value="aktivitet" />
                    //        <ExcelColumn label="Timmar" value="timmar" />
                    //        <ExcelColumn label="Datum" value="datum" />
                    //    </ExcelSheet>

                    //</ExcelFile>


//export const FormData = ({ formData }) => {

//    const FormDataRow = (form, index) => {

//        return (
//            <tr key={index} className='even'>
//                <td> <div>{this.state.activityLogEntries.map((form, id) => {
//                    return <p>{form.name}</p>

//                })}
//                </div></td>
//                <td> <div>{this.state.activityLogEntries.map((form, id) => {
//                    return <p>{form.hours}h</p>

//                })}
//                </div></td>
           

//            </tr>
//        )
//    }

//    const FormDataToExcel = formData.map((form, id) => FormDataRow(form, id))

//    const tableHeader = <thead className='bgvi'>
//        <tr>
//            <th>Aktivitet</th>
//            <th>Timmar</th>
//            <th>Datum</th>
//        </tr>
//    </thead>

//    return (
//        <Table striped bordered hover>
//            {tableHeader}
//            <tbody>
//                {FormDataToExcel}
//            </tbody>
//        </Table>
//    )
//}

//export const ExportCSV = ({ csvData, fileName }) => {

//    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
//    const fileExtension = '.xlsx';

//    const exportToCSV = (csvData, fileName) => {
//        const ws = XLSX.utils.json_to_sheet(csvData);
//        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
//        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
//        const data = new Blob([excelBuffer], { type: fileType });
//        FileSaver.saveAs(data, fileName + fileExtension);
//    }

//    return (
//    <Button variant="warning" onClick={(e) => exportToCSV(csvData, fileName)}>Export</Button>
//        )
//}


   
















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


