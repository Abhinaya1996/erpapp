import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Analytics(){
    return <>
        <div id="app-layout">
            <Header/>
            <Sidebar/>

            <div className="content-page">
                <div className="content">
                    <div className="container-fluid">

                        <div className="py-3 d-flex align-items-sm-center flex-sm-row flex-column">
                            <div className="flex-grow-1">
                                <h4 className="fs-18 fw-semibold m-0">Analytics</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}