import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Table } from "antd";

export default function Salesorder(){
    return <>
        <div id="app-layout">
            <Header/>
            <Sidebar/>

            <div className="content-page">
                <div className="content">
                    <div className="container-fluid">

                        <div className="py-3 d-flex align-items-sm-center flex-sm-row flex-column">
                            <div className="flex-grow-1">
                                <h4 className="fs-18 fw-semibold m-0">Sales Order</h4>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12">
                                <div class="card">

                                    <div class="card-header">
                                        <h5 class="card-title mb-0">Sales Order Form</h5>
                                    </div>

                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <form>
                                                    <div class="row mb-1">
                                                        <div class="col-sm-1">
                                                            <div class="mb-3">
                                                                <label for="exampleInputEmail1" class="form-label">Date :</label>
                                                                <input type="text" class="form-control"/>
                                                            </div>
                                                        </div>

                                                        <div class="col-sm-3">
                                                            <div class="mb-3">
                                                                <label for="exampleInputEmail1" class="form-label">Ledger :</label>
                                                                <input type="text" class="form-control"/>
                                                            </div>
                                                        </div>

                                                        <div class="col-sm-2">
                                                            <div class="mb-3">
                                                                <label for="exampleInputEmail1" class="form-label">Credit Limit :</label>
                                                                <input type="text" class="form-control"/>
                                                            </div>
                                                        </div>

                                                        <div class="col-sm-2">
                                                            <div class="mb-3">
                                                                <label for="exampleInputEmail1" class="form-label">Pricelist :</label>
                                                                <input type="text" class="form-control"/>
                                                            </div>
                                                        </div>

                                                        <div class="col-sm-2">
                                                            <div class="mb-3">
                                                                <label for="exampleInputEmail1" class="form-label">Godown :</label>
                                                                <input type="text" class="form-control"/>
                                                            </div>
                                                        </div>

                                                        <div class="col-sm-2">
                                                            <div class="mb-3">
                                                                <label for="exampleInputEmail1" class="form-label">Priority :</label>
                                                                <select class="form-select" id="example-select">
                                                                    <option>Low</option>
                                                                    <option>Medium</option>
                                                                    <option>High</option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <hr/>
                                                    <div class="row mb-1">
                                                        <div class="col-sm-2">
                                                            <div class="mb-3">
                                                                <label for="exampleInputEmail1" class="form-label">Item Name :</label>
                                                                <input type="text" class="form-control"/>
                                                            </div>
                                                        </div>

                                                        <div class="col-sm-2">
                                                            <div class="mb-3">
                                                                <label for="exampleInputEmail1" class="form-label">Quantity :</label>
                                                                <input type="text" class="form-control"/>
                                                            </div>
                                                        </div>

                                                        <div class="col-sm-2">
                                                            <div class="mb-3">
                                                                <label for="exampleInputEmail1" class="form-label">Rate :</label>
                                                                <input type="text" class="form-control"/>
                                                            </div>
                                                        </div>

                                                        <div class="col-sm-2">
                                                            <div class="mb-3">
                                                                <label for="exampleInputEmail1" class="form-label">Disc (%) :</label>
                                                                <input type="text" class="form-control"/>
                                                            </div>
                                                        </div>

                                                        <div class="col-sm-2">
                                                            <div class="mb-3">
                                                                <label for="exampleInputEmail1" class="form-label">Disc :</label>
                                                                <input type="text" class="form-control"/>
                                                            </div>
                                                        </div>

                                                        <div class="col-sm-2">
                                                            <div class="mb-3">
                                                                <label for="exampleInputEmail1" class="form-label">Amount :</label>
                                                                <input type="text" class="form-control"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr/>

                                                    <table className="table table-borderless table-centered align-middle table-nowrap mb-0">
                                                        <thead className="text-muted table-light">
                                                            <tr>
                                                                <th scope="col" className="cursor-pointer">Item</th>
                                                                <th scope="col" className="cursor-pointer">Quantity</th>
                                                                <th scope="col" className="cursor-pointer">Rate</th>
                                                                <th scope="col" className="cursor-pointer">Disc %</th>
                                                                <th scope="col" className="cursor-pointer">Disc</th>
                                                                <th scope="col" className="cursor-pointer">Amount</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <td scope="col" className="cursor-pointer"> </td>
                                                            <td scope="col" className="cursor-pointer"> </td>
                                                            <td scope="col" className="cursor-pointer"> </td>
                                                            <td scope="col" className="cursor-pointer"> </td>
                                                            <td scope="col" className="cursor-pointer"> </td>
                                                            <td scope="col" className="cursor-pointer"> </td>
                                                        </tbody>
                                                        <tfoot>
                                                            <tr>
                                                                <th scope="col" colSpan={4} style={{textAlign:'end'}} className="cursor-pointer">Total :</th>
                                                                <th scope="col" style={{textAlign:'end'}} className="cursor-pointer">Grand Total :</th>
                                                            </tr>
                                                        </tfoot>
                                                    </table>  

                                                </form>
                                            </div>

                                            <div class="col-lg-6">
                                                
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </>
}