import React, { useState } from 'react';

import Header from './Header'
import Sidebar from './Sidebar'
import Toggle from './components/Toggle'

const Layout = () => {

    const [sidebarState, setSideBarState] = useState(true)

    // show/hide sidebar
    const ToggleSideBar = () => {
        if(!sidebarState)
            setSideBarState(true)
        else 
            setSideBarState(false)
    }

    let sideBar = null //Sidebar component displayed
    //Show SideBar
    if (sidebarState == true) 
        sideBar = <Sidebar ToggleSideBar={ToggleSideBar} />

    return (
        <div>
            <Header />
            <div class="row">
                <div className="col-1"></div>
                <div className="col-2">{sideBar}</div>
                <Toggle ToggleSideBar={ToggleSideBar} />
            </div>
        </div>
    )
}

export default Layout;