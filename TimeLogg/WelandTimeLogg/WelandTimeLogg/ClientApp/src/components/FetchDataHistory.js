import React, { Component } from "react";
import axios from 'axios';


class FetchDataHistory extends React.Component {
    state = {
        loading: true,
        activityLogEntries: [],
        person: null
    };

    async componentDidMount() {
        const url = "https://localhost:44383/api/activityLogEntries";

        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({ activityLogEntries: data[0], loading: false });

 
    }
    render() {
        return (
            <div>
                {this.state.loading || !this.state.activityLogEntries ? (
                    <div>loading...</div>
                ) : (
                        <div>
                            <div>{this.state.activityLogEntries.id}</div>
                            <div>{this.state.activityLogEntries.name}</div>
                        </div>
                    )}
            </div>

        );
    }
}


export default FetchDataHistory;


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


