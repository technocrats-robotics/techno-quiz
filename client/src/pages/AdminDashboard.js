import styled from "styled-components";
import Sidebar from "../components/Admin/Sidebar";

function AdminDashboard() {
  return (
    <Container>
      <Sidebar />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 90vh;
  background: linear-gradient(to bottom right,  #050022 0%, #050022 70%);
  border-radius: 2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;

export default AdminDashboard;
