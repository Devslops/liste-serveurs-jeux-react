import React from 'react';

import "./style/style.scss"

const SideBar = ({ToggleSideBar}) => {

    return (
        <div className="sidebar">
            <div className="bg-light text-center my-auto"><h3 className="sb-title-text">Liste personnalisée</h3></div>
            <button id="close" onClick={ToggleSideBar}>&times; close</button>
        </div>
    )
}

export default SideBar;