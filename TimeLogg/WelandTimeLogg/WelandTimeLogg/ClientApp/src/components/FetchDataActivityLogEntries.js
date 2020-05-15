import React, { Component } from "react";
import axios from 'axios';


class FetchDataActivityLogEntries extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            Timmar: '',
            Aktivitet: '',

        }


    }


    componentDidMount() {
        axios.get("https://localhost:44383/api/activityLogEntries")
            .then(response => {
                console.log(response)
                this.setState({ posts: response.data })
            })
            .catch(error => {
                console.log(error)
                this.setState({ errorMsg: 'Error retriving data' })
            })

    }




    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://localhost:44383/api/activityLogEntries/post', this.state)
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
                <div class="container">
                    <div class="row">
                        <div class="col-sm-4"></div>
                        <form onSubmit={this.handleSubmit}>
                            <div class="form-group">
                        
                          




                                <button type="submit" class="btn btn-success">Spara</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        );
    }
}

export default FetchDataActivityLogEntries;


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

                                //<label for="activityLogEntries">Spara Aktivitet:</label>
                                //<br />
                                //<input type="text" name="Aktivitet" value={Name} onChange={this.handleChange}></input>
                                //<br />
                                //<br />
                                //<label for="hours">Skriv in dina arbetande timmar:</label>
                                //<input type="number" name="Timmar" value={Name} onChange={this.handleChange}></input>
                                //<br />
