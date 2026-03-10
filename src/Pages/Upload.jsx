import styled from "styled-components";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Page = styled.div`
  background:#f4f6fb;
  min-height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  font-family:'Inter', sans-serif;
`;

const Card = styled.div`
  width:750px;
  background:white;
  padding:45px;
  border-radius:14px;
  box-shadow:0 10px 30px rgba(0,0,0,0.06);
`;

const Title = styled.h2`
  text-align:center;
  font-weight:600;
  margin-bottom:5px;
`;

const Subtitle = styled.p`
  text-align:center;
  color:#6b7280;
  margin-bottom:35px;
`;

const UploadBox = styled.label`
  border:2px dashed #d1d5db;
  border-radius:12px;
  padding:50px;
  text-align:center;
  cursor:pointer;
  transition:0.3s;
  display:block;

  &:hover{
    border-color:#6366f1;
    background:#f9fafb;
  }
`;

const HiddenInput = styled.input`
  display:none;
`;

const UploadIcon = styled.div`
  font-size:38px;
  margin-bottom:10px;
`;

const FileText = styled.p`
  color:#6b7280;
  margin:5px 0;
`;

const SelectedFile = styled.div`
  margin-top:20px;
  padding:12px;
  background:#f3f4f6;
  border-radius:8px;
  font-size:14px;
`;

const Footer = styled.div`
  margin-top:35px;
  display:flex;
  justify-content:space-between;
  align-items:center;
`;

const BackButton = styled.button`
  border:none;
  background:none;
  font-weight:500;
  color:#6b7280;
  cursor:pointer;

  &:hover{
    color:#111827;
  }
`;

const ConfirmButton = styled.button`
  padding:12px 24px;
  border-radius:10px;
  border:none;
  background:linear-gradient(90deg,#6366f1,#4f46e5);
  color:white;
  font-weight:500;
  box-shadow:0 6px 20px rgba(79,70,229,0.3);
  transition:0.3s;

  &:hover{
    transform:translateY(-2px);
  }
`;

function Upload(){

  const [file,setFile]=useState(null)

  const handleFile=(e)=>{
    setFile(e.target.files[0])
  }

  return(

    <Page>

      <Card className="container">

        <Title>Upload Original Document</Title>

        <Subtitle>
          Ensure the file is legible. This will become the uneditable source of truth.
        </Subtitle>


        <UploadBox>

          <HiddenInput
            type="file"
            onChange={handleFile}
          />

          <UploadIcon>📄</UploadIcon>

          <FileText>
            <strong>Drag & Drop file</strong> or click to browse
          </FileText>

          <FileText>
            PDF, JPG, PNG, DOCX supported
          </FileText>


          {file && (
            <SelectedFile>
              ✅ File Selected: {file.name}
            </SelectedFile>
          )}

        </UploadBox>


        <Footer>

          <BackButton>
            ← Back
          </BackButton>

          <ConfirmButton>
            Confirm & Create Case
          </ConfirmButton>

        </Footer>

      </Card>

    </Page>

  )

}

export default Upload;