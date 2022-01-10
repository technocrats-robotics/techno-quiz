import "./static/css/AdminDashboard.css";
import styled from "styled-components";
import Sidebar from "./components/Admin/Sidebar";
import MainContent from ".components/Admin/MainContent";
import Footer from "./components/Admin/Footer";

function AdminDashboard() {
  return (
    <Container>
      <Sidebar />
      <MainContent />
      <Footer/>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 85vh;
  background: linear-gradient(to bottom right,  #050022 0%, #050022 70%);
  border-radius: 2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;

export default AdminDashboard;
