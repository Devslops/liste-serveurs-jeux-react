import React, { useState } from 'react';

import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

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
            <div className={sidebarState?"side-nav-arrow nav-open":"side-nav-arrow"}>
                <button id="toggle" onClick={ToggleSideBar}>&#8801;</button>
            </div>
            <Header />
            <div class="row">
                <div className="offset-md-1 col-md-2">{sideBar}</div>
                    <div className="col">
                        {Content}
                    </div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout;