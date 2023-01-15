import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div
            style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
        >
            <CDBSidebar textColor="#000" backgroundColor="#fff">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <a
                        href="/"
                        className="text-decoration-none"
                        style={{ color: 'inherit' }}
                    >
                        Stride Tutoring
                    </a>
                </CDBSidebarHeader>

                <CDBSidebarContent
                    // className="sidebar-content"
                    style={{ color: '#7479ac' }}
                >
                    <CDBSidebarMenu>
                        <NavLink exact to="/" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/tables" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="table">Messages</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/profile" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="user">Upcoming Sessions</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/analytics" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="clock">
                                Order History
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink
                            exact
                            to="/profile"
                            activeClassName="activeClicked"
                        >
                            <CDBSidebarMenuItem icon="exclamation-circle">
                                My Profile
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/contact" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="exclamation-circle">
                                Contact Us
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/sessionHistory" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="clock">
                                Session History
                            </CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>
            </CDBSidebar>
        </div>
    );
};

export default Sidebar;