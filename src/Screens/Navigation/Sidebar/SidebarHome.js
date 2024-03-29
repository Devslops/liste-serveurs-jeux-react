import React from 'react';

import "../../style.scss"

const SideBarHome = ({ToggleSideBar}) => {

    return (
        <>
            <div className="sidebar shadow mt-5">
                <div className="bg-light text-center my-auto p-1 mb-5"><h3 className="sb-title-text">Liste personnalisée</h3></div>
                
                <div className="filter-container">
                    <h4 className="text-secondary">Versions acceptées</h4>
                    <ul className="list-unstyled">
                        <li>Premium</li>
                        <li>Crackée</li>
                    </ul>
                    <h4 className="text-secondary">Versions</h4>
                    <ul className="list-unstyled">
                        <li>1.15</li>
                        <li>1.14</li>
                        <li>1.13</li>
                        <li>1.12</li>
                        <li>1.8</li>
                    </ul>
                    <h4 className="text-secondary">Type de serveur</h4>
                    <ul className="list-unstyled">
                        <li>Skyblock</li>
                        <li>PvP Faction</li>
                        <li>PvP Box</li>
                        <li>Survie</li>
                        <li>Semi-RP</li>
                        <li>Mini jeux</li>
                        <li>Créatif</li>
                        <li>FreeBuild</li>
                        <li>Hunger Games</li>
                        <li>Hardcore</li>
                        <li>Moddé</li>
                    </ul>
                    <h4 className="text-secondary">TOP Classement</h4>
                    <ul className="list-unstyled">
                        <li>Le plus de votes</li>
                        <li>Le plus attractif</li>
                        <li>Le plus de connectés</li>
                    </ul>
                </div>


                <button id="close" onClick={ToggleSideBar}>&times; close</button>
            </div>
        </>
    )
}

export default SideBarHome;