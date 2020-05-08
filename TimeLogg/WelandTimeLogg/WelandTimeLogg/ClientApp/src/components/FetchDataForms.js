import React, { Component } from "react";
import axios from 'axios';

class FetchDataForms extends React.Component {
    state = {
        loading: true,
        forms: [],
        person: null
    };

    async componentDidMount() {
        const url = "https://localhost:44383/api/forms";

        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({ forms: data[1], loading: false });


    }
    render() {
        return (
            <div>
                {this.state.loading || !this.state.forms ? (
                    <div>loading...</div>
                ) : (
                        <div>
                            <div>{this.state.forms.id}</div>
                            <div>{this.state.forms.name}</div>
                        </div>
                    )}
            </div>

        );
    }
}


export default FetchDataForms;

//    constructor(props) {
//        super(props)
//        this.state = {
//            forms: []
//        }

       
//    }

//    componentDidMount() {
//        axios.get("https://localhost:44383/api/forms").then(response => {
//            console.log(response.data);
//            this.setState({
//                forms: response.data/*[0]*/
//            });
//        });

//    }
//    render() {
//        return (
    

//            <table>
//                <tr>
//                    <th>Name</th>
//                    <th>Id</th>

//                </tr>
//                {this.state.forms.map(Forms =>
//                    <tr>
//                        <td>{Forms.Name}</td>
//                        <td>{Forms.Id}</td>

//                        <td>


//                        </td>
//                    </tr>
//                )}
//            </table>
//            //<div>
//            //    <div>
//            //        <div>{this.state.forms.map(Forms => {Forms.Name })}</div>
//            //    </div>

//            //</div>

        

//        )
//    };
//}

//    //render() {
//    //    return ()
//    //        <div>
//    //            {this.state.forms}

//    //        </div

        

//    //}
////}


//export default FetchDataForms;

////Version av ovanstående:

////class FetchData extends Component
////state = {
////    loading: true,
////    person: null
////};

////async componentDidMount() {
////    const url = "https://api.randomuser.me/";
////    const response = await fetch(url);
////    const data = await response.json();
////    this.setState({ person: data.results[0], loading: false });
////}
////render() {
////    return (
////        <NavBar />
////        <div>
////            {this.state.loading || !this.state.person ? (
////                <div>loading...</div>
////            ) : (
////                    <div>
////                        <div>{this.state.person.name.first}</div>
////                    </div>
////                )}
////        </div>

////        );
////}
////}


////export default FetchData;