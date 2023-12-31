import React from 'react'
import './sidebar.scss'
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

export default function Sidebar() {

  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className='sidebar'>
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Darlene</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardCustomizeOutlinedIcon className='icon' />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
          <li>
            <PeopleOutlineOutlinedIcon className='icon' />
            <span>Users</span>
          </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
          <li>
            <StorefrontOutlinedIcon className='icon' />
            <span>Products</span>
          </li>
          </Link>
          <li>
            <CreditCardOutlinedIcon className='icon' />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingOutlinedIcon className='icon' />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <QueryStatsOutlinedIcon className='icon' />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneOutlinedIcon className='icon' />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <MonitorHeartOutlinedIcon className='icon' />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className='icon'  />
            <span>Logs</span>
          </li>
          <li>
            <SettingsOutlinedIcon className='icon' />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className='icon' />
            <span>Profile</span>
          </li>
          <li>
            <LogoutOutlinedIcon className='icon' />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}>
        </div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}>
        </div>
      </div>
    </div>
  )
}
