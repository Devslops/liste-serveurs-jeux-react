import React from 'react';

import "../../style.scss"

import IdentityIcon from '../../../images/icons/identity-white.png'
import ListIcon from '../../../images/icons/list-white.png'
import AdIcon from '../../../images/icons/ad-yellow.png'
import ChartIcon from '../../../images/icons/chart-white.png'

const SideBarMember = ({ToggleSideBar}) => {

    return (
        <>
            <div className="sidebar shadow mt-5">
                <div className="bg-light text-center my-auto p-1 mb-5"><h3 className="sb-title-text">Gestion compte</h3></div>
                
                <div className="filter-container">
                    <ul className="list-unstyled">
                        <li className='mb-2'><img src={IdentityIcon} className="mr-2"/>Mon profile</li>
                        <li className='mb-2'><img src={ListIcon} className="mr-2"/>Mes serveurs</li>
                        <li className='mb-2'><img src={AdIcon} className="mr-2"/>Publicité</li>
                        <li className='mb-2'><img src={ChartIcon} className="mr-2"/>Statistiques</li>
                    </ul>

                </div>


                <button id="close" onClick={ToggleSideBar}>&times; close</button>
            </div>
        </>
    )
}

export default SideBarMember;