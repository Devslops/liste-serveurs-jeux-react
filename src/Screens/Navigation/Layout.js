import React, { useState } from 'react';

import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import FiltreIcon from '../../images/icons/filtre.png'

const Layout = ({ContentHeader, ContentBody}) => {

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
                <img id="toggle" onClick={ToggleSideBar} src={FiltreIcon} />
            </div>
            <Header ContentHeader={
                ContentHeader
            }/>
            <div class="row">
                <div className="offset-md-1 col-md-2">{sideBar}</div>
                    <div className="col mt-5">
                        {ContentBody}
                    </div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout;

const styles = {
    addServerButton: {
        borderRadius: 1,
        height: 45,
        maxWidth: 225,
        minWidth: 225,
        borderRadius: 1
    },
    mainText: {
        color: 'white',
        textAlign: 'center',
        maxWidth: 750,
        padding: 15
    }
}