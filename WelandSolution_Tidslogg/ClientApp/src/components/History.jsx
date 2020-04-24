import React, { Component } from "react";

function History() {
    return (
        <div class="container">
            <div class="row">
                <div class="col-sm-4"></div>
                <div>
                    <h3>Historia</h3>
                    <br />

                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">2020-04-23</th>
                                <th scope="col">Tid</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Support</th>
                                <td>1,30 h</td>
                            </tr>
                            <tr>
                                <th scope="row">Möte</th>
                                <td>3 h</td>
                            </tr>
                            <tr>
                                <th scope="row">Dokumentation</th>
                                <td colspan="2">4 h</td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="button" class="btn btn-primary">
                        Skicka som excel
      </button>
                    <br />
                    <br />
                    <br />
                    <div>
                        <br />
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">2020-04-22</th>
                                    <th scope="col">Tid</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Support</th>
                                    <td>1,30 h</td>
                                </tr>
                                <tr>
                                    <th scope="row">Möte</th>
                                    <td>3 h</td>
                                </tr>
                                <tr>
                                    <th scope="row">Dokumentation</th>
                                    <td colspan="2">4 h</td>
                                </tr>
                            </tbody>
                        </table>
                        <button type="button" class="btn btn-primary">
                            Skicka som excel
        </button>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default History;
