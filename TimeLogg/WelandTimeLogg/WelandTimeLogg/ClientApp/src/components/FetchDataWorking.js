import React, { Component } from "react";
import axios from 'axios';



class FetchDataWorking extends React.Component {
    state = {
        loading: true,
        activityLogEntries: null,
        person: null
    };

    async componentDidMount() {
        const url = "https://api.randomuser.me/";

        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({ person: data.results[0], loading: false });

        //Stringify Json:
        // fetch(response)
        //     .then((response) => {
        //     return response.json();
        //     })
        //     .then((myJson) => {
        //         console.log(JSON.stringify(myJson));
        //     })

    }
    render() {
        return (
            <div>
                {this.state.loading || !this.state.person ? (
                    <div>loading...</div>
                ) : (
                        <div>
                            <div>{this.state.person.name.first}</div>
                        </div>
                    )}
            </div>

        );
    }
}
export default FetchDataWorking;