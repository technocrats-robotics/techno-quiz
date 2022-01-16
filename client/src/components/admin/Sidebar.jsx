import React from "react";
import styled from "styled-components";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AssessmentIcon from '@mui/icons-material/Assessment';
import Badge from "./Badge";
import AvatarImage from "../Icons/TLogo.png";
function Sidebar() {
  return (
    <Container>
      <ProfileContainer>
        <Avatar src={AvatarImage} />
        <Name>TCR Dummy</Name>
        <Badge content="Role: Admin" />
      </ProfileContainer>
      <LinksContainer>
        <Links>
          <Link>
            <DashboardIcon />
            <h3>Dashboard</h3>
          </Link>
          <Link>
            <AddCircleIcon />
            <h3>Add Tests</h3>
          </Link>
          <Link>
            <AccountCircleIcon />
            <h3>User Details</h3>
          </Link>
          <Link>
            <AssessmentIcon />
            <h3>View Statistics</h3>
          </Link>
          <Logout>
            <Badge content="Logout" logout/>
          </Logout>
        </Links>
        </LinksContainer>
        <ContactContainer>
          <span>Having troubles?</span>
          <a href="#">Contact us </a>
        </ContactContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 20%;
  height: 100% !important;
  border-radius: 2rem;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    height: max-content !important;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Avatar = styled.img`
  height: 7rem;
  border-radius: 6rem;
  margin-top: 20%;
`;

const Name = styled.h1`
  color: white;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0.8rem 0 0.5rem 0;
`;

const LinksContainer = styled.div`
  background-color: #FFF;
  height: 100%;
  padding: 0px;
  width: 80%;
  text-align: center;
  border-radius: 2rem;
`;

const Links = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  height: 60%;
`;

const Logout = styled.li`
margin-left: 15%;
color: #000;
display: flex;
margin-bottom: 2rem;
gap: 1rem;
cursor: pointer;
`;
const Link = styled.li`
&:hover {
  background: #000;
  color: #FFF;
  width: 80%;
  margin-left: 5px;
  padding: 20px;
  border-radius: 20px 0px 0px 20px;
}
  margin-left: 15%;
  color: #000;
  display: flex;
  margin-bottom: 2rem;
  gap: 1rem;
  cursor: pointer;
  h3 {
    font-weight: 600;
    font-size: 0.9rem;
  }
  svg {
    font-size: 1.1rem;
    margin-top: 3%;
  }
`;

const ContactContainer = styled.div`
  width: 60%;
  background-color: #091322;
  color: #c4c4c4;
  height: 15%;
  margin: auto auto;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  a {
    color: white;
    text-decoration: none;
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-bottom: 2rem;
  }
`;

export default Sidebar;
