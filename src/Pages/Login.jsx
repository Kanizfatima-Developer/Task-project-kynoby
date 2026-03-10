import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Page = styled.div`
  height:100vh;
  background:linear-gradient(135deg,#eef2ff,#f8fafc);
  display:flex;
  justify-content:center;
  align-items:center;
  font-family:"Inter", Arial, sans-serif;
`;

const Card = styled.div`
  width:420px;
  background:white;
  padding:40px;
  border-radius:14px;
  box-shadow:0 15px 40px rgba(0,0,0,0.08);
`;

const LogoBox = styled.div`
  display:flex;
  justify-content:center;
  margin-bottom:15px;
`;

const Logo = styled.div`
  background:#eef2ff;
  color:#4f46e5;
  font-weight:bold;
  font-size:18px;
  padding:12px 16px;
  border-radius:10px;
`;

const Title = styled.h2`
  text-align:center;
  font-weight:600;
  margin:10px 0 5px;
`;

const Subtitle = styled.p`
  text-align:center;
  color:#6b7280;
  font-size:14px;
  margin-bottom:25px;
`;

const Label = styled.label`
  font-size:14px;
  color:#374151;
  font-weight:500;
`;

const Input = styled.input`
  width:100%;
  padding:11px;
  margin-top:6px;
  margin-bottom:18px;
  border-radius:8px;
  border:1px solid #d1d5db;
  font-size:14px;

  &:focus{
    outline:none;
    border-color:#6366f1;
    box-shadow:0 0 0 2px rgba(99,102,241,0.15);
  }
`;

const Button = styled.button`
  width:100%;
  padding:12px;
  background:linear-gradient(135deg,#6366f1,#4f46e5);
  color:white;
  border:none;
  border-radius:8px;
  font-size:15px;
  font-weight:500;
  cursor:pointer;

  &:hover{
    opacity:0.9;
  }
`;

const Footer = styled.p`
  margin-top:20px;
  font-size:12px;
  text-align:center;
  color:#9ca3af;
`;

function Login(){

  const navigate = useNavigate();

  const [email,setEmail] = useState("Admin@kynoby.com");
  const [password,setPassword] = useState("12345678");

  const handleLogin = (e) => {
    e.preventDefault();

    if(email === "Admin@kynoby.com" && password === "12345678"){
      alert("Login Successful ✅");
      navigate("/dashboard");
    }
    else{
      alert("Invalid Credentials ❌");
    }
  };

  return(

    <Page>

      <Card>

        <LogoBox>
          <Logo>RG</Logo>
        </LogoBox>

        <Title>Response Generator</Title>

        <Subtitle>
          Secure Complaint Management System
        </Subtitle>

        <form onSubmit={handleLogin}>

          <Label>Email Address</Label>
          <Input
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <Label>Password</Label>
          <Input
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <Button type="submit">
            Login
          </Button>

        </form>

        <Footer>
          Restricted Access • All activity logged and audited
        </Footer>

      </Card>

    </Page>

  )

}

export default Login