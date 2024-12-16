import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";



export default function Dashboard(){
    return <>
        <div id="app-layout">
            <Header/>
            <Sidebar/>

            <div className="content-page">
                <div className="content">
                    <div className="container-fluid">

                        <div className="py-3 d-flex align-items-sm-center flex-sm-row flex-column">
                            <div className="flex-grow-1">
                                <h4 className="fs-18 fw-semibold m-0">Dashboard</h4>
                            </div>
                        </div>

                        
                        <div className="row">
                            <div className="col-md-6 col-xl-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="widget-first">
                                            <div className="d-flex justify-content-between align-items-end">
                                                <div>
                                                    <div className="d-flex align-items-center mb-3">
                                                        <div className="bg-primary-subtle rounded-2 p-1 me-2 border border-dashed border-primary">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 14"><path fill="#287F71" fillRule="evenodd" d="M13.463 9.692C13.463 12.664 10.77 14 7 14S.537 12.664.537 9.713c0-3.231 1.616-4.868 4.847-6.505L4.24 1.077A.7.7 0 0 1 4.843 0H9.41a.7.7 0 0 1 .603 1.023L8.616 3.208c3.23 1.615 4.847 3.252 4.847 6.484M7.625 4.887a.625.625 0 1 0-1.25 0v.627a1.74 1.74 0 0 0-.298 3.44l1.473.322a.625.625 0 0 1-.133 1.236h-.834a.625.625 0 0 1-.59-.416a.625.625 0 1 0-1.178.416a1.877 1.877 0 0 0 1.56 1.239v.636a.625.625 0 1 0 1.25 0v-.636a1.876 1.876 0 0 0 .192-3.696l-1.473-.322a.49.49 0 0 1 .105-.97h.968a.622.622 0 0 1 .59.416a.625.625 0 0 0 1.178-.417a1.874 1.874 0 0 0-1.56-1.238z" clipRule="evenodd"/></svg>
                                                        </div>
                                                        <p className="mb-0 text-dark fs-15">Total Orders</p>
                                                    </div>
                                                    <h3 className="mb-0 fs-24 text-black me-2">25,894</h3>
                                                </div>

                                                <div>
                                                    <div id="new-orders" className="apex-charts"></div>
                                                </div>
                                            </div>

                                            <div>
                                                <p className="text-muted mb-0 fs-13">
                                                    <span className="text-primary fs-14 me-2"><i className="mdi mdi-trending-up fs-18"></i> 12.5%</span>
                                                    <small className="text-dark fs-14"> vs last 7 days </small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-xl-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="widget-first">
                                            <div className="d-flex justify-content-between align-items-end">
                                                <div>
                                                    <div className="d-flex align-items-center mb-3">
                                                        <div className="bg-secondary-subtle rounded-2 p-1 me-2 border border-dashed border-secondary">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 640 512"><path fill="#963b68" d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64m448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64m32 32h-64c-17.6 0-33.5 7.1-45.1 18.6c40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64m-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32S208 82.1 208 144s50.1 112 112 112m76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2m-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4"/></svg>
                                                        </div>
                                                        <p className="mb-0 text-dark fs-15">Monthly Orders</p>
                                                    </div>
                                                    <h3 className="mb-0 fs-24 text-black me-2">57,800</h3>
                                                </div>

                                                <div>
                                                    <div id="monthly-orders" className="apex-charts"></div>
                                                </div>
                                            </div>

                                            <div>
                                                <p className="text-muted mb-0 fs-13">
                                                    <span className="text-danger fs-14 me-2"><i className="mdi mdi-trending-down fs-18"></i> 1.5%</span>
                                                    <small className="text-dark fs-14"> vs last 7 days </small>
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-xl-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="widget-first">
                                            <div className="d-flex justify-content-between align-items-end">
                                                <div>
                                                    <div className="d-flex align-items-center mb-3">
                                                        <div className="bg-info-subtle rounded-2 p-1 me-2 border border-dashed border-info">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#73bbe2" d="M7 20V8.975q0-.825.6-1.4T9.025 7H20q.825 0 1.413.587T22 9v8l-5 5H9q-.825 0-1.412-.587T7 20M2.025 6.25q-.15-.825.325-1.487t1.3-.813L14.5 2.025q.825-.15 1.488.325t.812 1.3L17.05 5H9Q7.35 5 6.175 6.175T5 9v9.55q-.4-.225-.687-.6t-.363-.85zM20 16h-4v4z"/></svg>
                                                        </div>
                                                        <p className="mb-0 text-dark fs-15">Monthly Revenue</p>   
                                                    </div>
                                                    <h3 className="mb-0 fs-24 text-black me-2">$637,254</h3>
                                                </div>

                                                <div>
                                                    <div id="monthly-revenue" className="apex-charts"></div>
                                                </div>
                                            </div>

                                            <div>
                                                <p className="text-muted mb-0 fs-13">
                                                    <span className="text-primary fs-14 me-2"><i className="mdi mdi-trending-up fs-18"></i> 12.8%</span>
                                                    <small className="text-dark fs-14"> vs last 7 days </small>
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-xl-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="widget-first">
                                            <div className="d-flex justify-content-between align-items-end">
                                                <div>
                                                    <div className="d-flex align-items-center mb-3">
                                                        <div className="bg-warning-subtle rounded-2 p-1 me-2 border border-dashed border-warning">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#f59440" d="M5.574 4.691c-.833.692-1.052 1.862-1.491 4.203l-.75 4c-.617 3.292-.926 4.938-.026 6.022C4.207 20 5.88 20 9.23 20h5.54c3.35 0 5.025 0 5.924-1.084c.9-1.084.591-2.73-.026-6.022l-.75-4c-.439-2.34-.658-3.511-1.491-4.203C17.593 4 16.403 4 14.02 4H9.98c-2.382 0-3.572 0-4.406.691" opacity="0.5"/><path fill="#988D4D" d="M12 9.25a2.251 2.251 0 0 1-2.122-1.5a.75.75 0 1 0-1.414.5a3.751 3.751 0 0 0 7.073 0a.75.75 0 1 0-1.414-.5A2.251 2.251 0 0 1 12 9.25"/></svg>
                                                        </div>
                                                        <p className="mb-0 text-dark fs-15">Out of Stock</p>
                                                    </div>
                                                    <h3 className="mb-0 fs-24 text-black me-2">142 Items</h3>
                                                </div>

                                                <div>
                                                    <div id="items-stock" className="apex-charts"></div>
                                                </div>
                                            </div>

                                            <div>
                                                <p className="text-muted mb-0 fs-13">
                                                    <span className="text-primary fs-14 me-2"><i className="mdi mdi-trending-up fs-18"></i> 18%</span>
                                                    <small className="text-dark fs-14"> vs last 7 days </small>
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div className="row">
                            
                            <div className="col-md-12 col-xl-12">
                                <div className="card overflow-hidden">
                                    <div className="card-header">
                                        <div className="d-flex align-items-center">
                                            <h5 className="card-title mb-0 text-black">Earnings Reports</h5>
                                        </div>
                                    </div>

                                    <div className="card-body p-0">
                                        <div className="table-responsive">
                                            <table className="table table-traffic mb-0">
                                                <thead>
                                                    <tr>
                                                        <th className="border-top-0 fw-semibold text-black">Date</th>
                                                        <th className="border-top-0 fw-semibold text-black">Item Count</th>
                                                        <th className="border-top-0 fw-semibold text-black">Text</th>
                                                        <th className="border-top-0 fw-semibold text-black">Earnings</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <a href="#" className="text-reset">01 January</a>
                                                    </td>
                                                    <td>
                                                        45
                                                    </td>
                                                    <td className="text-success">
                                                        +$70
                                                    </td> 
                                                    <td>
                                                        $78,000
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <a href="#" className="text-reset">05 February</a>
                                                    </td>
                                                    <td>
                                                        35
                                                    </td>
                                                    <td className="text-danger">
                                                        -$48
                                                    </td> 
                                                    <td>
                                                        $18,000
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <a href="#" className="text-reset">15 March</a>
                                                    </td>
                                                    <td>
                                                        28
                                                    </td>
                                                    <td className="text-danger">
                                                        -$31
                                                    </td> 
                                                    <td>
                                                        $15,000
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <a href="#" className="text-reset">06 April</a>
                                                    </td>
                                                    <td>
                                                        38
                                                    </td>
                                                    <td className="text-success">
                                                        +$58
                                                    </td> 
                                                    <td>
                                                        $125,000
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <a href="#" className="text-reset">08 May</a>
                                                    </td>
                                                    <td>
                                                        42
                                                    </td>
                                                    <td className="text-success">
                                                        +$65
                                                    </td> 
                                                    <td>
                                                        $80,000
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <a href="#" className="text-reset">25 December</a>
                                                    </td>
                                                    <td>
                                                        39
                                                    </td>
                                                    <td className="text-danger">
                                                        -$41
                                                    </td> 
                                                    <td>
                                                        $73,000
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <a href="#" className="text-reset">18 January</a>
                                                    </td>
                                                    <td>
                                                        45
                                                    </td>
                                                    <td className="text-success">
                                                        +$74
                                                    </td> 
                                                    <td>
                                                        $72,500
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <a href="#" className="text-reset">09 September</a>
                                                    </td>
                                                    <td>
                                                        29
                                                    </td>
                                                    <td className="text-danger">
                                                        -$25
                                                    </td> 
                                                    <td>
                                                        $23,000
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