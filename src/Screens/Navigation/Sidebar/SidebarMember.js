import React from 'react';

import "../../style.scss"

const SideBarMember = ({ToggleSideBar}) => {

    return (
        <>
            <div className="sidebar shadow mt-5">
                <div className="bg-light text-center my-auto p-1 mb-5"><h3 className="sb-title-text">Gestion compte</h3></div>
                
                <div className="filter-container">
                    <h4 className="text-secondary">Versions acceptées</h4>
                    <ul className="list-unstyled">
                        <li>Premium</li>
                        <li>Crackée</li>
                    </ul>

                </div>


                <button id="close" onClick={ToggleSideBar}>&times; close</button>
            </div>
        </>
    )
}

export default SideBarMember;