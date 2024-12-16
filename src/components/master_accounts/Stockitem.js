import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";



export default function Stockitem(){
    return <>
        <div id="app-layout">
            <Header/>
            <Sidebar/>

            <div className="content-page">
                <div className="content">
                    <div className="container-fluid">

                        <div className="py-3 d-flex align-items-sm-center flex-sm-row flex-column">
                            <div className="flex-grow-1">
                                <h4 className="fs-18 fw-semibold m-0">Master Accounts - Stockitem Manage</h4>
                            </div>
                        </div>

                        <div className="row">
                            
                        <div className="col-xl-12">
                                <div className="card overflow-hidden">

                                    <div className="card-header">
                                        <div className="d-flex align-items-center">
                                            <h5 className="card-title text-black mb-0">Stock Item List</h5>
                                        </div>
                                    </div>

                                    <div className="card-body mt-0">
                                        <div className="table-responsive table-card mt-0">
                                            <table className="table table-borderless table-centered align-middle table-nowrap mb-0">
                                                <thead className="text-muted table-light">
                                                    <tr>
                                                        <th scope="col" className="cursor-pointer">#</th>
                                                        <th scope="col" className="cursor-pointer">Item name</th>
                                                        <th scope="col" className="cursor-pointer">Unit</th>
                                                        <th scope="col" className="cursor-pointer">Sale price</th>
                                                        <th scope="col" className="cursor-pointer">Favorite</th>
                                                        <th scope="col" className="cursor-pointer">Status</th>
                                                        <th scope="col" className="cursor-pointer">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Item name 1</td>
                                                        <td>KG</td>
                                                        <td>150</td>
                                                        <td>Favo</td>
                                                        <td>
                                                            <span className="badge bg-primary-subtle text-primary fw-semibold">Active</span>
                                                        </td>
                                                        <td>
                                                            <a aria-label="anchor" className="me-1" data-bs-toggle="tooltip" data-bs-original-title="Edit">
                                                                <i className="mdi mdi-pencil-outline fs-16 text-muted"></i>
                                                            </a>
                                                            <a aria-label="anchor" className="" data-bs-toggle="tooltip" data-bs-original-title="Delete">
                                                                <i className="mdi mdi-delete fs-16 text-muted"></i>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>Item Name 2</td>
                                                        <td>YDS</td>
                                                        <td>288</td>
                                                        <td>Favo</td>
                                                        <td>
                                                            <span className="badge bg-primary-subtle text-primary fw-semibold">Active</span>
                                                        </td>
                                                        <td>
                                                            <a aria-label="anchor" className="me-1" data-bs-toggle="tooltip" data-bs-original-title="Edit">
                                                                <i className="mdi mdi-pencil-outline fs-16 text-muted"></i>
                                                            </a>
                                                            <a aria-label="anchor" className="" data-bs-toggle="tooltip" data-bs-original-title="Delete">
                                                                <i className="mdi mdi-delete fs-16 text-muted"></i>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>Item Name 3</td>
                                                        <td>KGS</td>
                                                        <td>170</td>
                                                        <td>Favo</td>
                                                        <td>
                                                            <span className="badge bg-danger-subtle text-danger fw-semibold">Inactive</span>
                                                        </td>
                                                        <td>
                                                            <a aria-label="anchor" className="me-1" data-bs-toggle="tooltip" data-bs-original-title="Edit">
                                                                <i className="mdi mdi-pencil-outline fs-16 text-muted"></i>
                                                            </a>
                                                            <a aria-label="anchor" className="" data-bs-toggle="tooltip" data-bs-original-title="Delete">
                                                                <i className="mdi mdi-delete fs-16 text-muted"></i>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
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