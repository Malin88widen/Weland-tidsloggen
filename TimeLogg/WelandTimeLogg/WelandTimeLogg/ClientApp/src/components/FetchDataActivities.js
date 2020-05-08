import React, { Component } from "react";
import axios from 'axios';

//class FetchData extends Component
//state = {
//    loading: true,
//    person: null
//};

//async componentDidMount() {
//    const url = "https://api.randomuser.me/";
//    const response = await fetch(url);
//    const data = await response.json();
//    this.setState({ person: data.results[0], loading: false });
//}
//render() {
//    return (
//        <NavBar />
//        <div>
//            {this.state.loading || !this.state.person ? (
//                <div>loading...</div>
//            ) : (
//                    <div>
//                        <div>{this.state.person.name.first}</div>
//                    </div>
//                )}
//        </div>
        
//        );
//}
//}


//export default FetchData;

class FetchDataActivities extends React.Component {
    state = {
            Activity: []
    }


    

    componentDidMount() {
        axios.get("https://localhost:44383/api/activities").then(response => {
            console.log(response.data);
            this.setState({
                Activity: response.data
            });
        });

    }

        render() {
            return (
                <div>
                    <h1>Aktivitetslista</h1>

                        <table>
                            <tr>
                                <th>Name</th>
                                <th>Id</th>
                          
                        </tr>
                        {this.state.Activity.map(Activity =>
                                <tr>
                                    <td>{Activity.Name}</td>
                                    <td>{Activity.Id}</td>
                             
                                    <td>


                                    </td>
                                </tr>
                            )}
                        </table>
                 </div>    
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


export default FetchDataActivities;