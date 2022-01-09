import React from "react";
import styled from "styled-components";
import { RiHomeLine, RiFileCopyLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlinePieChart } from "react-icons/ai";
import Badge from "./Badge";
import AvatarImage from "../assets/avatarImage.jpg"; //Sample
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
                        <RiHomeLine />
                        <h3>Dashboard</h3>
                    </Link>
                    <Link>
                        <RiFileCopyLine />
                        <h3>Add Tests</h3>
                    </Link>
                    <Link>
                        <FaUserCircle />
                        <h3>User Details</h3>
                    </Link>
                    <Link>
                        <AiOutlinePieChart />
                        <h3>View Statistics</h3>
                    </Link>
                    <Logout>
                        <Badge content="Logout" logout/>
                    </Logout>
                </Links>
        </LinksContainer>
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
  background-color: ${lightThemeColor};
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