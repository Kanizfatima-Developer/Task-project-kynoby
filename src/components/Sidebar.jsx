import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUserPlus,
  FaList,
  FaComments,
  FaFileAlt,
  FaSearch,
  FaCheckCircle,
  FaClipboardList,
  FaTimesCircle
} from "react-icons/fa";

const Container = styled.div`
  width:220px;
  height:100vh;
  background:#111827;
  color:white;
  padding:20px 15px;
  position:fixed;
  top:0;
  left:0;
  transition:0.3s;
  overflow-y:auto;
  box-shadow:2px 0 15px rgba(0,0,0,0.1);
`;

const Logo = styled.h2`
  font-size:20px;
  font-weight:600;
  margin-bottom:30px;
  text-align:center;
`;

const Menu = styled.div`
  display:flex;
  flex-direction:column;
`;

const Item = styled(Link)`
  display:flex;
  align-items:center;
  gap:12px;
  padding:12px;
  color:#d1d5db;
  text-decoration:none;
  border-radius:8px;
  margin-bottom:8px;
  font-size:14px;
  transition:0.2s;

  background:${props => props.active ? "#4f46e5" : "transparent"};
  color:${props => props.active ? "white" : "#d1d5db"};

  &:hover{
    background:#374151;
    color:white;
  }
`;

const Icon = styled.div`
  font-size:16px;
`;

function Sidebar(){

  const location = useLocation();

  return(

    <Container>

      <Logo>Task Flow</Logo>

      <Menu>

        <Item to="/dashboard" active={location.pathname === "/dashboard"}>
          <Icon><FaTachometerAlt/></Icon>
          Dashboard
        </Item>

        <Item to="/setup" active={location.pathname === "/setup"}>
          <Icon><FaClipboardList/></Icon>
          Setup
        </Item>

        <Item to="/context" active={location.pathname === "/context"}>
          <Icon><FaList/></Icon>
          Context
        </Item>

        <Item to="/add-patient" active={location.pathname === "/add-patient"}>
          <Icon><FaUserPlus/></Icon>
          Add Patient
        </Item>

        <Item to="/chronology" active={location.pathname === "/chronology"}>
          <Icon><FaList/></Icon>
          Chronology
        </Item>

        <Item to="/interviews" active={location.pathname === "/interviews"}>
          <Icon><FaComments/></Icon>
          Interviews
        </Item>

        <Item to="/evidence" active={location.pathname === "/evidence"}>
          <Icon><FaFileAlt/></Icon>
          Evidence
        </Item>

        <Item to="/review-case" active={location.pathname === "/review-case"}>
          <Icon><FaSearch/></Icon>
          Review
        </Item>

        <Item to="/draft-response" active={location.pathname === "/draft-response"}>
          <Icon><FaClipboardList/></Icon>
          Draft
        </Item>

        <Item to="/investigation-log" active={location.pathname === "/investigation-log"}>
          <Icon><FaClipboardList/></Icon>
          Investigation Log
        </Item>

        <Item to="/response-saved" active={location.pathname === "/response-saved"}>
          <Icon><FaCheckCircle/></Icon>
          Response Saved
        </Item>

        <Item to="/case-closed" active={location.pathname === "/case-closed"}>
          <Icon><FaTimesCircle/></Icon>
          Case Closed
        </Item>

      </Menu>

    </Container>

  )

}

export default Sidebar;