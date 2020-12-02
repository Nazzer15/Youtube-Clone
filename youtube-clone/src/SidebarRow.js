import React from 'react';
import './SidebarRow.css';


function SidebarRow({ selected, Icon, title}) {
    return (
        <div className={`sidebarRow ${selected && 'selected'}`}>
            {/* If selected class add selected class css */}
            <Icon className="sidebarRow_icon"/>
            <h2 className="sidebarRow_title">{ title }</h2>
            
        </div>
    )
}

export default SidebarRow
