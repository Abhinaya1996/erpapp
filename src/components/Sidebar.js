import { useEffect } from "react";
import feather from 'feather-icons'

export default function Sidebar(){
    useEffect(()=> {
        feather.replace()
    },[])
    return <>
    <div className="app-sidebar-menu">
    <div className="h-100" data-simplebar>

        
        <div id="sidebar-menu">

            <div className="logo-box">
                <a className='logo logo-light' href='index.html'>
                    <span className="logo-sm">
                        <h3 style={{marginTop:'20px'}}>ERP</h3>
                    </span>
                    <span className="logo-lg">
                        <h3 style={{marginTop:'20px'}}>ERP Admin</h3>
                    </span>
                </a>
                <a className='logo logo-dark' href='index.html'>
                    <span className="logo-sm">
                        <h3 style={{marginTop:'20px'}}>ERP</h3>
                    </span>
                    <span className="logo-lg">
                        <h3 style={{marginTop:'20px'}}>ERP Admin</h3>
                    </span>
                </a>
            </div>

            <ul id="side-menu">
                <li className="menu-title pt-3">Main Menu</li>
                <li>
                    <a className='tp-link' href='/dashboard'>
                        <i data-feather="columns"></i>
                        <span> Dashboard </span>
                    </a>
                </li>

                <li>
                    <a className='tp-link' href='/analytics'>
                        <i data-feather="map-pin"></i>
                        <span> Analytics </span>
                    </a>
                </li>

                <li className="menu-title pt-3">Master Accounts</li>

                <li>
                    <a className='tp-link' href='/ledgers'>
                        <i data-feather="calendar"></i>
                        <span> Ledgers </span>
                    </a>
                </li>

                <li>
                    <a className='tp-link' href='/employees'>
                        <i data-feather="calendar"></i>
                        <span> Employees </span>
                    </a>
                </li>

                <li>
                    <a className='tp-link' href='/stockitem'>
                        <i data-feather="calendar"></i>
                        <span> Stock Item </span>
                    </a>
                </li>

                <li>
                    <a className='tp-link' href='/stockunit'>
                        <i data-feather="calendar"></i>
                        <span> Stock Unit </span>
                    </a>
                </li>

                <li>
                    <a className='tp-link' href='/godown'>
                        <i data-feather="calendar"></i>
                        <span> Godown </span>
                    </a>
                </li>

                <li className="menu-title pt-3">Vouchers</li>

                <li>
                    <a className='tp-link' href='/salesorder'>
                        <i data-feather="calendar"></i>
                        <span> Sales Order </span>
                    </a>
                </li>

                <li>
                    <a className='tp-link' href='/purchaseorder'>
                        <i data-feather="calendar"></i>
                        <span> Purchase Order </span>
                    </a>
                </li>

                <li>
                    <a className='tp-link' href='/purchaseorder'>
                        <i data-feather="calendar"></i>
                        <span> Payment Request </span>
                    </a>
                </li>

                <li className="menu-title pt-3">Reports</li>

                <li>
                    <a className='tp-link' href='/purchaseorder'>
                        <i data-feather="calendar"></i>
                        <span> Daybook </span>
                    </a>
                </li>

                <li>
                    <a className='tp-link' href='/purchaseorder'>
                        <i data-feather="calendar"></i>
                        <span> Profit and Loss </span>
                    </a>
                </li>

                <li>
                    <a className='tp-link' href='/purchaseorder'>
                        <i data-feather="calendar"></i>
                        <span> Outstandings </span>
                    </a>
                </li>

            </ul>

        </div>
        

        <div className="clearfix"></div>

    </div>
</div>
    </>
}