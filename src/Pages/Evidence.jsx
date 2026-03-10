import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Page = styled.div`
  background:#f4f6fb;
  min-height:100vh;
  padding:40px 20px;
  font-family:"Inter", Arial, sans-serif;
`;

const Container = styled.div`
  max-width:1200px;
  margin:auto;
`;

const Header = styled.div`
  display:flex;
  justify-content:space-between;
  margin-bottom:30px;
`;

const Back = styled.div`
  color:#6b7280;
  cursor:pointer;
  font-weight:500;
`;

const Ref = styled.div`
  color:#6b7280;
`;

const Badge = styled.span`
  background:#e6f0ff;
  color:#2563eb;
  padding:4px 10px;
  border-radius:20px;
  margin-left:10px;
  font-size:12px;
`;

const StepBar = styled.div`
  display:flex;
  align-items:center;
  margin:30px 0 40px;
`;

const Step = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
`;

const Line = styled.div`
  flex:1;
  height:2px;
  background:#cbd5e1;
`;

const Circle = styled.div`
  width:40px;
  height:40px;
  border-radius:50%;
  border:2px solid ${(p)=>p.active ? "#4f46e5" : "#cbd5e1"};
  background:${(p)=>p.done ? "#4f46e5" : "white"};
  color:${(p)=>p.done ? "white" : (p.active ? "#4f46e5" : "#94a3b8")};
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight:600;
`;

const Label = styled.div`
  margin-top:6px;
  font-size:14px;
  color:#6b7280;
`;

const Title = styled.h2`
  margin-bottom:5px;
  font-weight:600;
`;

const SubTitle = styled.div`
  color:#6b7280;
  margin-bottom:25px;
`;

const Tabs = styled.div`
  display:flex;
  border-bottom:1px solid #e5e7eb;
  margin-bottom:20px;
`;

const Tab = styled.div`
  padding:15px 20px;
  cursor:pointer;
  font-weight:500;
  color:${p=>p.active ? "#4f46e5" : "#6b7280"};
  border-bottom:${p=>p.active ? "3px solid #4f46e5" : "none"};
`;

const SectionTitle = styled.h4`
  text-align:center;
  margin-top:40px;
  font-weight:600;
`;

const SectionSub = styled.div`
  text-align:center;
  color:#6b7280;
  margin-bottom:30px;
`;

const Card = styled.div`
  background:white;
  border:1px solid #e5e7eb;
  border-radius:12px;
  padding:20px;
  box-shadow:0 3px 10px rgba(0,0,0,0.05);
`;

const FileItem = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  border:1px solid #e5e7eb;
  padding:12px;
  border-radius:8px;
  margin-top:10px;
`;

const FileTag = styled.span`
  background:#eef2f7;
  padding:4px 10px;
  border-radius:20px;
  font-size:12px;
`;

const UploadBox = styled.div`
  border:2px dashed #cbd5e1;
  border-radius:12px;
  padding:50px;
  text-align:center;
  color:#6b7280;
  background:#fafafa;
`;

function Evidence(){

  const navigate = useNavigate();

  const [fileUploaded,setFileUploaded] = useState(false);

  const handleUpload = () => {
    setFileUploaded(true);
  };

  const goToReview = () => {
    if(fileUploaded){
      navigate("/review-case");
    }
  };

  return(

    <Page>

      <Container>

        <Header>

          <Back onClick={()=>navigate("/interviews")}>
            ← Back to Queue
          </Back>

          <Ref>
            REF: COM-2026-2310
            <Badge>Investigation</Badge>
          </Ref>

        </Header>

        <StepBar>

          <Step>
            <Circle done>✓</Circle>
            <Label>Setup</Label>
          </Step>

          <Line/>

          <Step>
            <Circle done>✓</Circle>
            <Label>Context</Label>
          </Step>

          <Line/>

          <Step>
            <Circle active>3</Circle>
            <Label>Investigate</Label>
          </Step>

          <Line/>

          <Step>
            <Circle>4</Circle>
            <Label>Drafting</Label>
          </Step>

          <Line/>

          <Step>
            <Circle>5</Circle>
            <Label>Review</Label>
          </Step>

          <Line/>

          <Step>
            <Circle>6</Circle>
            <Label>Closed</Label>
          </Step>

        </StepBar>

        <Title>Investigation Hub</Title>

        <SubTitle>
          Reconstruct facts, gather evidence, and prepare for drafting.
        </SubTitle>

        <Tabs>

          <Tab>Overview</Tab>
          <Tab>Chronology</Tab>
          <Tab>Interviews</Tab>
          <Tab active>Evidence</Tab>
          <Tab>Review</Tab>

        </Tabs>

        <SectionTitle>
          Supporting Evidence
        </SectionTitle>

        <SectionSub>
          Upload policies, emails, or reports that support the investigation findings.
        </SectionSub>

        <div className="row g-4">

          <div className="col-md-6">

            <Card>

              <h5>Attached Files</h5>

              {fileUploaded && (

                <FileItem>

                  uploaded_report.pdf

                  <FileTag>
                    Uploaded
                  </FileTag>

                </FileItem>

              )}

            </Card>

          </div>

          <div className="col-md-6">

            <UploadBox>

              <h5>Upload Document</h5>

              <p>
                Click to simulate uploading a PDF report or email transcript.
              </p>

              <button
                className="btn btn-primary mt-2"
                onClick={handleUpload}
              >
                Upload File
              </button>

              <br/><br/>

              <button
                className="btn btn-success"
                disabled={!fileUploaded}
                onClick={goToReview}
              >
                Continue to Review
              </button>

            </UploadBox>

          </div>

        </div>

      </Container>

    </Page>

  )

}

export default Evidence;