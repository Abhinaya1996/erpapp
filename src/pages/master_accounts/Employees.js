import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";



export default function Employees(){
    return <>
        <div id="app-layout">
            <Header/>
            <Sidebar/>

            <div className="content-page">
                <div className="content">
                    <div className="container-fluid">

                        <div className="py-3 d-flex align-items-sm-center flex-sm-row flex-column">
                            <div className="flex-grow-1">
                                <h4 className="fs-18 fw-semibold m-0">Master Accounts - Employee Manage</h4>
                            </div>
                        </div>

                        <div className="row">
                            
                        <div className="col-xl-12">
                                <div className="card overflow-hidden">

                                    <div className="card-header">
                                        <div className="d-flex align-items-center">
                                            <h5 className="card-title text-black mb-0">Employee List</h5>
                                        </div>
                                    </div>

                                    <div className="card-body mt-0">
                                        <div className="table-responsive table-card mt-0">
                                            <table className="table table-borderless table-centered align-middle table-nowrap mb-0">
                                                <thead className="text-muted table-light">
                                                    <tr>
                                                        <th scope="col" className="cursor-pointer">Emp ID</th>
                                                        <th scope="col" className="cursor-pointer">Name</th>
                                                        <th scope="col" className="cursor-pointer">DOB</th>
                                                        <th scope="col" className="cursor-pointer">Gender</th>
                                                        <th scope="col" className="cursor-pointer">Nationality</th>
                                                        <th scope="col" className="cursor-pointer">Designation</th>
                                                        <th scope="col" className="cursor-pointer">Status</th>
                                                        <th scope="col" className="cursor-pointer">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Employee Name 1</td>
                                                        <td>10th Jan 2000</td>
                                                        <td>Male</td>
                                                        <td>Indian</td>
                                                        <td>Manager</td>
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
                                                        <td>Employee Name 2</td>
                                                        <td>10th Jan 2001</td>
                                                        <td>Female</td>
                                                        <td>Indian</td>
                                                        <td>Team Lead</td>
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
                                                        <td>Employee Name 3</td>
                                                        <td>10th Jan 1999</td>
                                                        <td>Male</td>
                                                        <td>Indian</td>
                                                        <td>Labor</td>
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