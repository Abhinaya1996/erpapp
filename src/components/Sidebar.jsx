import { useEffect } from "react";
import feather from 'feather-icons'
import { Link } from "react-router-dom";

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
                    <Link to="/dashboards">
                        <i data-feather="columns"></i>
                        <span> Dashboard </span>
                    </Link>
                </li>

                <li>
                    <Link to='/analytics'>
                        <i data-feather="map-pin"></i>
                        <span> Analytics </span>
                    </Link>
                </li>

                <li className="menu-title pt-3">Master Accounts</li>

                <li>
                    <Link to='/ledgers'>
                        <i data-feather="calendar"></i>
                        <span> Ledgers </span>
                    </Link>
                </li>

                <li>
                    <Link to='/employees'>
                        <i data-feather="calendar"></i>
                        <span> Employees </span>
                    </Link>
                </li>

                <li>
                    <Link to='/stockitem'>
                        <i data-feather="calendar"></i>
                        <span> Stock Item </span>
                    </Link>
                </li>

                <li>
                    <Link to='/stockunit'>
                        <i data-feather="calendar"></i>
                        <span> Stock Unit </span>
                    </Link>
                </li>

                <li>
                    <Link to='/godown'>
                        <i data-feather="calendar"></i>
                        <span> Godown </span>
                    </Link>
                </li>

                <li className="menu-title pt-3">Vouchers</li>

                <li>
                    <Link to='/salesorder'>
                        <i data-feather="calendar"></i>
                        <span> Sales Order </span>
                    </Link>
                </li>

                <li>
                    <Link to='/purchaseorder'>
                        <i data-feather="calendar"></i>
                        <span> Purchase Order </span>
                    </Link>
                </li>

                <li>
                    <Link to='/purchaseorder'>
                        <i data-feather="calendar"></i>
                        <span> Payment Request </span>
                    </Link>
                </li>

                <li className="menu-title pt-3">Reports</li>

                <li>
                    <Link to='/purchaseorder'>
                        <i data-feather="calendar"></i>
                        <span> Daybook </span>
                    </Link>
                </li>

                <li>
                    <Link to='/purchaseorder'>
                        <i data-feather="calendar"></i>
                        <span> Profit and Loss </span>
                    </Link>
                </li>

                <li>
                    <Link to='/purchaseorder'>
                        <i data-feather="calendar"></i>
                        <span> Outstandings </span>
                    </Link>
                </li>

            </ul>

        </div>
        

        <div className="clearfix"></div>

    </div>
</div>
    </>
}