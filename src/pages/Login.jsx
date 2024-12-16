import React from "react";
import '../assets/css/app.min.css';
import '../assets/css/icons.min.css';
import loginwrap from '../assets/images/login.webp';
 
export default function Login(){
    return <>
    <div className="account-page">
            <div className="container-fluid p-0">
                <div className="row align-items-center">
                <div className="col-xl-1"></div>
                    <div className="col-xl-5">
                        <img src={loginwrap} style={{ width : '95%'}} />
                    </div>
                    
                    <div className="col-xl-5">
                        <div className="row">
                            <div className="col-md-8 mx-auto">
                                <div className="card p-3 mb-0">
                                    <div className="card-body">
                                        <div className="mb-0 border-0 p-md-5 p-lg-0 p-4">
                                            <div className="auth-title-section mb-3 text-center"> 
                                                <h3 className="text-dark fs-20 fw-medium mb-2">Welcome back</h3>
                                                <p className="text-dark text-capitalize fs-14 mb-0">Sign in to continue.</p>
                                            </div>
                                            
                                            <div className="pt-0">
                                                <form action="https://zoyothemes.com/silva/html/index.html" className="my-4">
                                                    <div className="form-group mb-3">
                                                        <label for="emailaddress" className="form-label">Email address</label>
                                                        <input className="form-control" type="email" id="emailaddress" required="" placeholder="Enter your email"/>
                                                    </div>
                                                    <div className="form-group mb-3">
                                                        <label for="password" className="form-label">Password</label>
                                                        <input className="form-control" type="password" required="" id="password" placeholder="Enter your password"/>
                                                    </div>
                                                    <div className="form-group d-flex mb-3">
                                                        <div className="col-sm-6">
                                                            <div className="form-check">
                                                                <input type="checkbox" className="form-check-input" id="checkbox-signin" checked/>
                                                                <label className="form-check-label" for="checkbox-signin">Remember me</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group mb-0 row">
                                                        <div className="col-12">
                                                            <div className="d-grid">
                                                                <button className="btn btn-primary" type="submit"> Log In </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                                <div className="text-center text-muted mb-4">
                                                    <p className="mb-0">Don't have an account ?<a className='text-primary ms-2 fw-medium' href='#'>Sign up</a></p>
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
        </div>
    </>
}