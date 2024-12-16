import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";



export default function Stockunit(){
    return <>
        <div id="app-layout">
            <Header/>
            <Sidebar/>

            <div className="content-page">
                <div className="content">
                    <div className="container-fluid">

                        <div className="py-3 d-flex align-items-sm-center flex-sm-row flex-column">
                            <div className="flex-grow-1">
                                <h4 className="fs-18 fw-semibold m-0">Master Accounts - Stock Unit Manage</h4>
                            </div>
                        </div>

                        <div className="row">
                            
                        <div className="col-xl-12">
                                <div className="card overflow-hidden">

                                    <div className="card-header">
                                        <div className="d-flex align-items-center">
                                            <h5 className="card-title text-black mb-0">Stock Unit List</h5>
                                        </div>
                                    </div>

                                    <div className="card-body mt-0">
                                        <div className="table-responsive table-card mt-0">
                                            <table className="table table-borderless table-centered align-middle table-nowrap mb-0">
                                                <thead className="text-muted table-light">
                                                    <tr>
                                                    <th scope="col" className="cursor-pointer">#</th>
                                                        <th scope="col" className="cursor-pointer">Name</th>
                                                        <th scope="col" className="cursor-pointer">Symbol</th>
                                                        <th scope="col" className="cursor-pointer">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>KGS</td>
                                                        <td>KGS</td>
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
                                                        <td>MTS</td>
                                                        <td>MTS</td>
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
                                                        <td>GRMS</td>
                                                        <td>GRMS</td>
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