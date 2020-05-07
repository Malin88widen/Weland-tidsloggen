import React, { Component } from "react";
import axios from 'axios';

class FetchData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activities: []
        };


    }

    componentDidMount() {
        axios.get('https://localhost:3000')
            .then(res => {
                const activities = res.data;
                this.setStae({ activities });
            });

    };
//    Alt:
//        componentDidMount() {
//            fetch('https://localhost:3000')
//                .then(response => response.json())
//                .then(data => this.setState({ data }));
//}

        render() {
            return (
                <div className="App">
                    <div className="left">
                        <table>
                            <tr>
                                <th>Name</th>
                                <th>Id</th>
                          
                            </tr>
                            {this.state.activities.map(activity =>
                                <tr>
                                    <td>{activity.Name}</td>
                                    <td>{activity.Id}</td>
                             
                                    <td>


                                    </td>
                                </tr>
                            )}
                        </table>
                    </div>    </div>
            );
        }
    }
    

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


export default FetchData;