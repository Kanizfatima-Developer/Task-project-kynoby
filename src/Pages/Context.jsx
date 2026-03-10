import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Page = styled.div`
  background: #f5f7fb;
  min-height: 100vh;
  padding: 40px 60px;
  font-family: Arial, Helvetica, sans-serif;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const Back = styled.div`
  color: #6b7280;
  cursor: pointer;
  font-weight:500;
`;

const Ref = styled.div`
  color: #6b7280;
`;

const Badge = styled.span`
  background: #e6f0ff;
  color: #2563eb;
  padding: 4px 10px;
  border-radius: 20px;
  margin-left: 10px;
  font-size: 12px;
`;

const StepContainer = styled.div`
  position: relative;
  margin: 30px 0 50px;
`;

const Line = styled.div`
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  height: 2px;
  background: #e5e7eb;
`;

const Progress = styled.div`
  position: absolute;
  top: 20px;
  left: 0;
  width: 20%;
  height: 2px;
  background: #4f46e5;
`;

const Steps = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const Step = styled.div`
  text-align: center;
  flex: 1;
`;

const Circle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid ${(p)=>p.active ? "#4f46e5" : "#cbd5e1"};
  background:${(p)=>p.done ? "#4f46e5" : "white"};
  color:${(p)=>p.done ? "white" : (p.active ? "#4f46e5" : "#94a3b8")};
  display:flex;
  align-items:center;
  justify-content:center;
  margin:auto;
`;

const Label = styled.div`
  margin-top:8px;
  color:${(p)=>p.active ? "#4f46e5" : "#6b7280"};
`;

const SectionTitle = styled.h3`
  margin-bottom:20px;
  font-weight:600;
`;

const Card = styled.div`
  background:white;
  border-radius:12px;
  border:1px solid #e5e7eb;
  box-shadow:0 2px 8px rgba(0,0,0,0.05);
`;

const CardHeader = styled.div`
  padding:18px 20px;
  border-bottom:1px solid #e5e7eb;
  font-weight:600;
`;

const UploadBox = styled.div`
  margin:20px;
  border:2px dashed #cbd5e1;
  border-radius:10px;
  height:120px;
  display:flex;
  align-items:center;
  justify-content:center;
  color:#6b7280;
  background:#fafafa;
  cursor:pointer;
`;

const Footer = styled.div`
  margin-top:40px;
  display:flex;
  justify-content:flex-end;
`;

function Context(){

  const navigate = useNavigate();

  // validation state
  const [patientAdded,setPatientAdded] = useState(false);

  const handleAddPatient = () => {
    setPatientAdded(true);
    navigate("/add-patient");
  };

  const handleNext = () => {
    if(patientAdded){
      navigate("/chronology");
    }
  };

  return(
    <Page>

      <Header>

        <Back onClick={() => navigate("/dashboard")}>
          ← Back to Queue
        </Back>

        <Ref>
          REF: COM-2026-2310
          <Badge>Patient Context</Badge>
        </Ref>

      </Header>

      {/* STEP PROGRESS */}

      <StepContainer>

        <Line/>
        <Progress/>

        <Steps>

          <Step>
            <Circle done>✓</Circle>
            <Label>Setup</Label>
          </Step>

          <Step>
            <Circle active>2</Circle>
            <Label active>Context</Label>
          </Step>

          <Step>
            <Circle>3</Circle>
            <Label>Investigate</Label>
          </Step>

          <Step>
            <Circle>4</Circle>
            <Label>Drafting</Label>
          </Step>

          <Step>
            <Circle>5</Circle>
            <Label>Review</Label>
          </Step>

          <Step>
            <Circle>6</Circle>
            <Label>Closed</Label>
          </Step>

        </Steps>

      </StepContainer>

      <SectionTitle>
        Patient Identification & Records
      </SectionTitle>

      <div className="container-fluid">

        <div className="row g-4">

          {/* PATIENT CARD */}

          <div className="col-md-6">

            <Card>

              <CardHeader>
                Add Patient Record
              </CardHeader>

              <div className="p-4 text-center">

                <button
                  className="btn btn-primary"
                  onClick={handleAddPatient}
                >
                  Add Patient
                </button>

              </div>

            </Card>

          </div>

          {/* UPLOAD CARD */}

          <div className="col-md-6">

            <Card>

              <CardHeader>

                Manual Uploads

                <div className="text-muted small mt-1">
                  Attach additional context specific to this case.
                </div>

              </CardHeader>

              <UploadBox>

                <div className="text-center">

                  <div className="mb-2">
                    📂 Drag files here
                  </div>

                  <button className="btn btn-outline-primary btn-sm">
                    Browse Files
                  </button>

                </div>

              </UploadBox>

            </Card>

          </div>

        </div>

      </div>

      <Footer>

        <button
          className="btn btn-primary px-4 py-2"
          disabled={!patientAdded}
          onClick={handleNext}
        >
          → Confirm & Start Investigation
        </button>

      </Footer>

    </Page>
  )
}

export default Context;