import React, { useState } from 'react';

import Header from './Header'
import SidebarHome from './Sidebar/SidebarHome'
import SidebarMember from './Sidebar/SidebarMember'
import Footer from './Footer'
import FiltreIcon from '../../images/icons/filtre.png'
import { Switch } from 'react-router-dom';

const Layout = ({ContentHeader, ContentBody, SidebarType}) => {

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
    if (sidebarState === true) {
        switch(SidebarType) {
            case 'home':
                sideBar = <SidebarHome ToggleSideBar={ToggleSideBar} />
            break;
            case 'member':
                sideBar = <SidebarMember ToggleSideBar={ToggleSideBar} />
            break;
        }
    }

    return (
        <div>
            <div className={SidebarType?sidebarState?"side-nav-arrow nav-open":"side-nav-arrow":"d-none"}>
                <img id="toggle" onClick={ToggleSideBar} src={FiltreIcon} />
            </div>
            <Header ContentHeader={
                ContentHeader
            }/>
            <div class="row" style={{minHeight: "53vh"}}>
                {SidebarType?<div className='offset-md-1 col-md-2'>+{sideBar}+</div>:""}
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