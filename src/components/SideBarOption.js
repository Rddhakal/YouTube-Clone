import React from 'react'
import '../styles/SideBarOption.css'

const SideBarOption = ({ name, Icon }) => {
    return (
        <>

            <div className="side-bar-option">
                <Icon className="icon" />
                <p>{name}</p>
            </div>
        </>
    )
}

export default SideBarOption