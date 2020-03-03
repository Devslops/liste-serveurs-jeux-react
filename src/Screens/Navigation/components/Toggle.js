import React, { Fragment } from 'react';

import "../style/style.scss"

const Toggle = ({ToggleSideBar}) => {

    return (
        <Fragment>
            <button id="toggle" onClick={ToggleSideBar}>&#8801;</button>
        </Fragment>
    )
}

export default Toggle;