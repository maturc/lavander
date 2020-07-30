import React from 'react';

function SidebarHeader() {
  {/* <h3 className="sidebar__header">
    Header
  </h3> */}
  return(
    <h3 className="sidebar__header">
      <img src='./logo.png' alt="logo" className="sidebar__logo" />
      Lavander
    </h3>
  );
}

export default SidebarHeader;