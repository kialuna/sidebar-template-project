import React from "react";
import styled from 'styled-components';
const SidebarParent = styled.div`
  background: #c34a36;
  width: 250px;
  height: 100vh;
`;
function Sidebar() {
    return (
        <>
            <SidebarParent>
                <h2>I'm the sidebar.</h2>
                <p>Love me. Or else.</p>
            </SidebarParent>
        </>
    );
}
export default Sidebar;