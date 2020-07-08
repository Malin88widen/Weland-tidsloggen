import React, { Component } from "react";
import axios from 'axios';
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import ActivityLogEntries from './FetchDataHistory'





class FetchDataActivityLogEntries extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hour: '',
            name: '',
            activityLogEntries: [],
            createdDate: []

        }

    }

    async componentDidMount() {
        const url = "https://localhost:44325/api/activityLogEntries";

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

        var cts = this.state.activityLogEntries.map((form, id) =>
            <p>{(new Date(form.createdDate).toLocaleDateString())}</p>
        );


        var dateCount = this.state.activityLogEntries.map((form, id) =>
            <p>{form.createdDate}</p>
        );

  


        return (
            <div id="HomePageCSS">
                <Container>
                    <Row>
                        <div class="col-sm-4"></div>
                        <form onSubmit={this.handleSubmit}>
                            <div class="form-group">
                                <Form>
                                    <Form.Group controlId="formGroupEmail">
                                        <Form.Label>Aktiviteten du arbetat med:</Form.Label>
                                        <Form.Control type="text" id="name" name="name" onChange={this.handleNameChange} />
                                    </Form.Group>
                                    <Form.Group controlId="formGroupPassword">
                                        <Form.Label>Dina arbetade timmar:</Form.Label>
                                        <Form.Control type="number" id="hour" name="hour" onChange={this.handleNameChange} />
                                    </Form.Group>
                                </Form>
                                <button type="submit" class="btn btn-info">Spara</button>
                            </div>
                        </form>
                    </Row>
                </Container>
                <Container>
                    <h2>Historik</h2>
                    <Table striped bordered hover>
                        <thead>
                            <tr>

                                <th>Aktivitet</th>
                                <th>Timmar</th>
                                <th>Datum</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> <div>{this.state.activityLogEntries.map((form, id) => {
                                    return <p>{form.name}</p>

                                })}
                                </div></td>
                                <td> <div>{this.state.activityLogEntries.map((form, id) => {
                                    return <p>{form.hours}h</p>

                                })}
                                </div></td>
                                <td>
                                    <span>{cts}</span>
                                </td>
                            </tr>

                        </tbody>
                    </Table>

                </Container >
             
            </div>


        )
    }
};





export default FetchDataActivityLogEntries;


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