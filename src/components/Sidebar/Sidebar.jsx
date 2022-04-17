import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
    SidebarRoute,
    SideBtnWrap
  } from './style';
  
  const Sidebar = ({ isOpen, toggle }) => {
    return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarMenu>
          <SidebarLink to='/'>Activities</SidebarLink>
          <SidebarLink to='/'>Full Menu</SidebarLink>
          <SidebarLink to='/'>Community</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/'>Make A Reservation Now</SidebarRoute>
        </SideBtnWrap>
      </SidebarContainer>
    );
  };
  
  export default Sidebar;