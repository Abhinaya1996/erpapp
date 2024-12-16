import { Dropdown, Menu, Avatar, Badge } from 'antd';
import { DownOutlined, BellOutlined } from '@ant-design/icons';
import usericon from '../assets/images/users/user-12.jpg';
import { Link } from 'react-router-dom';

export default function Header(){
    const menu = (
        <Menu>
          <Menu.Item key="1">
            <Link to="">My Account</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="">Lock Screen</Link>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="3">
            <Link to="">Logout</Link>
          </Menu.Item>
        </Menu>
      );

    const notifydrop = (
        <Menu className='dropdown-menu dropdown-menu-end dropdown-lg show'>
          <Menu.Item key="1">
            <div class="dropdown-item noti-title">
                <h5 class="m-0">
                    <span class="float-end">
                        <a href="#" class="text-dark">
                            <small>Clear All</small>
                        </a>
                    </span>Notification
                </h5>
            </div>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="2" style={{padding:'0px'}}>
            <a href="javascript:void(0);" class="dropdown-item notify-item text-muted link-primary active">
                <div class="d-flex align-items-center justify-content-between">
                    <p class="notify-details">Notification Title</p>
                    <small class="text-muted">5 min ago</small>
                </div>
                <p class="mb-0 user-msg">
                    <small class="fs-14">Completed <span class="text-reset">Improve workflow in Figma</span></small>
                </p>
            </a>
          </Menu.Item>
          
        </Menu>
    ); 
    return <>
    <div className="topbar-custom">
    <div className="container-fluid">
        <div className="d-flex justify-content-between">
            <ul className="list-unstyled topnav-menu mb-0 d-flex align-items-center">
                <li>
                    <button className="button-toggle-menu nav-link">
                        <i data-feather="menu" className="noti-icon"></i>
                    </button>
                </li>
                <li className="d-none d-lg-block">
                    <h5 className="mb-0">Good Morning, Username</h5>
                </li>
            </ul>

            <ul className="list-unstyled topnav-menu mb-0 d-flex align-items-center">

                <li className="dropdown notification-list topbar-dropdown">
                    <Dropdown overlay={notifydrop} trigger={['hover']}>
                        <a className="nav-link dropdown-toggle nav-user me-0" onClick={e => e.preventDefault()}>
                        <Badge style={{marginRight:'10px'}} count={9} size="small" offset={[10, 0]} overflowCount={99}>
                            <BellOutlined style={{ fontSize: '22px', color: '#4a5a6b', marginRight:'5px', paddingBottom:'10px'}} />
                        </Badge>
                        </a>
                    </Dropdown>
                </li>

                <li className="dropdown notification-list topbar-dropdown">
                    <Dropdown overlay={menu} trigger={['click']}>
                        <a className="nav-link dropdown-toggle nav-user me-0" onClick={e => e.preventDefault()}>
                        <Avatar src={usericon} alt="user" />
                        <span className="pro-user-name ms-1">
                            John Smith <DownOutlined />
                        </span>
                        </a>
                    </Dropdown>
                </li>
            </ul>
        </div>

    </div>
   
</div>
    </>
}