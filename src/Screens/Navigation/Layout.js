import React, { useState } from 'react';

import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import Toggle from './components/Toggle'

const Layout = ({Content}) => {

    const [sidebarState, setSideBarState] = useState(true)

    //afficher/masquer sidebar
    const ToggleSideBar = () => {
        if(!sidebarState)
            setSideBarState(true)
        else 
            setSideBarState(false)
    }

    let sideBar = null //sidebar affichée
    //afficher sidebar
    if (sidebarState === true) 
        sideBar = <Sidebar ToggleSideBar={ToggleSideBar} />

    return (
        <div>
            <Header />
            <div class="row">
                <div className="col-1"></div>
                <div className="col-2">{sideBar}</div>
                <div className="col">
                    <Toggle ToggleSideBar={ToggleSideBar} className="col-sm-12" />
                    <div>
                        {Content}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout;