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

        }
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    //componentDidMount(prevProps) {
    //axios.get("https://localhost:44325/api/activityLogEntries")
    //    .then(response => {
    //        console.log(response)
    //        this.setState({ posts: response.data })
    async componentDidMount() {
        const url = "https://localhost:44325/api/activityLogEntries";

        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({ activityLogEntries: data, loading: false });

        //fetch("https://localhost:44325/api/activityLogEntries")
        //    .then(response => response.text())
        //    .then(data => {
        //        this.setState({ sampleData: data });
        //        console.log("state", this.state.sampleData)
        //})
        //  .catch(error => {
        //      console.log(error)
        //      this.setState({ errorMsg: 'Error retriving data' })
        // })



        //axios.get("https://localhost:44383/api/forms/test")
        //    .then(response => {
        //        console.log(response)
        //        this.setState({ posts: response.data })
        //    })
        //    .catch(error => {
        //        console.log(error)
        //        this.setState({ errorMsg: 'Error retriving data' })
        //    })
        //axios.get("https://localhost:44383/FetchDataActivities")
        //    .then(response => {
        //        console.log(response)
        //        this.setState({ response: response.data })
        //    })
        //    .catch(error => {
        //        console.log(error)
        //        this.setState({ errorMsg: 'Error retriving data' })
        //    })
    }

    //displayTemp() {
    //    fetch("api/forms")
    //        .then(response => response.text())
    //        .then(data => {
    //            this.setState({ temp: data });

    //        });
    //}


    handleNameChange = (e) => {

        this.setState({ [e.target.name]: e.target.value })
        console.log(e.target.name)
        console.log(e.target.value)

    }

    //handleHourChange = (e) => {

    //    this.setState({ [e.target.name]: e.target.value })
    //    console.log(e.target.name)
    //    console.log(e.target.value)

    //}

    handleSubmit = (e) => {
        e.preventDefault()
        const data = this.state;
        //data.append('Aktivitet', this.state.Aktivitet.value);
        //data.append('Timmar', this.state.Timmar.value);
        console.log(data)
        axios.post('https://localhost:44325/api/activityLogEntries/post', this.state)
            .then(response => {
                console.log(response)
                window.location.reload();
            })
    }


    handleSubmitSaveToHistory = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://localhost:44325/history')
            .then(response => {
                console.log(response)


            })
            .catch(error => {
                console.log(error)
            })

    }

    render() {
        const { Name } = this.state

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

                    <Row>




                        <Col>
                            {this.state.activityLogEntries.map((form, id) => {
                                return <p>{form.id}</p>

                            })}
                        </Col>




                        <Col>
                            {this.state.activityLogEntries.map((form, id) => {
                                return <p>{form.name}</p>

                            })}
                        </Col>



                        <Col>
                            {this.state.activityLogEntries.map((form, id) => {
                                return <p>{form.hours}h</p>

                            })}
                        </Col>


                    </Row>



                </Container >
            </div>
        );

    }
}

export default FetchDataActivityLogEntries;


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