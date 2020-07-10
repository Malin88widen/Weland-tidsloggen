import React, { Component } from "react";
import axios from 'axios';
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import ActivityLogEntries from './FetchDataHistory'
import NameList from "./Form";
import ActivityList from "./Form";





class FetchDataActivityLogEntries extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hour: '',
            name: '',
            project: '',
            description: '',
            activityLogEntries: [],
            createdDate: []


        }


    }

    async componentDidMount() {
        const url = "https://localhost:44325/api/activityLogEntriesFrontPage";

        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({ activityLogEntries: data, loading: false });
    }

    handleNameChange = (e) => {

        this.setState({ [e.target.name]: e.target.value })
        console.log(e.target.name)
        console.log(e.target.value)

    }

    handleSubmit = (e) => {
        e.preventDefault()
        const data = this.state;
        console.log(data)
        axios.post('https://localhost:44325/api/activityLogEntries/post', this.state)
            .then(response => {
                console.log(response)
                window.location.reload();
            })
    }



    //handleSubmitSaveToHistory = (e) => {
    //    e.preventDefault()
    //    console.log(this.state)
    //    axios.post('https://localhost:44325/history')
    //        .then(response => {
    //            console.log(response)


    //        })
    //        .catch(error => {
    //            console.log(error)
    //        })

    //}

    render() {




        //var dateCount = this.state.activityLogEntries.map((form, id) =>
        //    <p>{form.createdDate}</p>
        //);


        //var createdDateOutput = this.state.activityLogEntries.map((form, id) =>
        //    <p>{(new Date(form.createdDate).toLocaleDateString())}</p>
        //);

        //var createdHoursOutput = this.state.activityLogEntries.map((form, id) => {
        //    return <p key={id}>{form.hours} h</p>
        //});

        //var createdActivityNameOutput = this.state.activityLogEntries.map((form, id) => {
        //    return <p key={id}>{form.name}</p>
        //});
        //var createdDescriptionOutput = this.state.activityLogEntries.map((form, id) => {
        //    return <p key={id}>{form.description}</p>
        //});
        //var createdProjectOutput = this.state.activityLogEntries.map((form, id) => {
        //    return <p key={id}>{form.project}</p>
        //});




        return (
            <div id="HomePageCSS">
                <Container>
                    <Row>
                        <div class="col-sm-4"></div>
                        <form onSubmit={this.handleSubmit}>
                            <div class="form-group">
                                <Form>
                                    <Row>
                                        <Col>
                                            <Form.Group controlId="formGroupEmail">
                                                <Form.Label>Arbete:</Form.Label>
                                                <Form.Control type="text" id="name" name="name" onChange={this.handleNameChange} />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group controlId="formGroupPassword">
                                                <Form.Label>Dina arbetade timmar:</Form.Label>
                                                <Form.Control type="number" id="hour" name="hour" onChange={this.handleNameChange} />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Form.Group controlId="formGroupEmail">
                                        <Form.Label>Projekt (valfritt):</Form.Label>
                                        <Form.Control type="text" id="project" name="project" onChange={this.handleNameChange} />
                                    </Form.Group>
                                    <Form.Group controlId="formGroupEmail">
                                        <Form.Label>Beskrivning:</Form.Label>
                                        <Form.Control as="textarea" rows="3" type="text" id="description" name="description" onChange={this.handleNameChange} />
                                    </Form.Group>
                                </Form>
                                <button type="submit" class="btn btn-info">Spara</button>
                            </div>
                        </form>
                    </Row>
                </Container>
                <Container>
                    <h2>Historik</h2>
                    <Table striped bordered>
                        <thead>
                            <tr>
                                <th>Arbete</th>
                                <th>Timmar</th>
                                <th>Beskrivning</th>
                                <th>Datum</th>
                                <th>Projekt</th>

                            </tr>
                        </thead>
                        <tbody>
                            {this.state.activityLogEntries.map(function (id) {
                                return (
                                    <tr key={id}>
                                        <td>{id.name}</td>
                                        <td>{id.hours} h</td>
                                        <td> {id.description}</td>
                                        <td>{(new Date(id.createdDate).toLocaleDateString())}</td>
                                        <td>{id.project}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </Container >
            </div>
        )
    }
};





export default FetchDataActivityLogEntries;


                    //<NameList />
                    //<ActivityList />








          //<thead>
          //                  <tr>

          //                      <th>Aktivitet</th>
          //                      <th>Timmar</th>
          //                      <th>Datum</th>


          //                  </tr>
          //              </thead>
          //              <tbody>
          //                  <tr key={this.state.activityLogEntries.form}>
          //                      <td> <div>{this.state.activityLogEntries.map((form, id) => {
          //                          return <p>{form.name}</p>

          //                      })}
          //                      </div></td>
          //                      <td> <div>{this.state.activityLogEntries.map((form, id) => {
          //                          return <p>{form.hours}h</p>

          //                      })}
          //                      </div></td>
          //                      <td>




          //                      </td>
          //                      //{numberFormat}
          //                      //   {dateCount}








          //                  </tr>

          //              </tbody>
          //          </Table>

                //    <center>
                //        <Row>
                //        <Col>Historik</Col>
                //        </Row>
                //    </center>

                //<Row>

                //    <div>
                //        <Col>
                //            {this.state.activityLogEntries.map((form, id) => {
                //                return <p>{form.id}</p>

                //            })}
                //        </Col>
                //    </div>


                //    <div>
                //        <Col>
                //            {this.state.activityLogEntries.map((form, id) => {
                //                return <p>{form.name}</p>

                //            })}
                //        </Col>
                //    </div>

                //    <div>
                //        <Col>
                //            {this.state.activityLogEntries.map((form, id) => {
                //                return <p>{form.hours}</p>

                //            })}
                //        </Col>
                //    </div>

                //</Row>



//<tbody>
//    <tr>
//        <ul>
//            {this.state.activityLogEntries.map((form, id) => {
//                return <li key={id}>{form.name}</li>;
//            })}


//        </ul>
//    </tr>
//</tbody>