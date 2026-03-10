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

const Card = styled.div`
  background:white;
  border:1px solid #e5e7eb;
  border-radius:12px;
  padding:20px;
  box-shadow:0 3px 10px rgba(0,0,0,0.05);
`;

const Statement = styled.div`
  border:1px solid #e5e7eb;
  border-radius:10px;
  padding:18px;
  margin-top:12px;
  background:#fafafa;
`;

const Name = styled.div`
  font-weight:600;
`;

const Date = styled.div`
  font-size:12px;
  color:#6b7280;
  margin-top:3px;
`;

const Quote = styled.div`
  margin-top:10px;
  color:#374151;
  font-size:14px;
`;

const Input = styled.input`
  width:100%;
  padding:12px;
  border:1px solid #d1d5db;
  border-radius:8px;
  margin-bottom:15px;
  font-size:14px;

  &:focus{
    outline:none;
    border-color:#6366f1;
    box-shadow:0 0 0 2px rgba(99,102,241,0.1);
  }
`;

const TextArea = styled.textarea`
  width:100%;
  height:100px;
  padding:12px;
  border:1px solid #d1d5db;
  border-radius:8px;
  margin-bottom:15px;
  font-size:14px;

  &:focus{
    outline:none;
    border-color:#6366f1;
    box-shadow:0 0 0 2px rgba(99,102,241,0.1);
  }
`;

function Interviews(){

  const navigate = useNavigate();

  const [staffName,setStaffName] = useState("");
  const [date,setDate] = useState("");
  const [notes,setNotes] = useState("");

  const isFormValid =
    staffName.trim() !== "" &&
    date.trim() !== "" &&
    notes.trim() !== "";

  const handleSave = () => {
    if(isFormValid){
      navigate("/evidence");
    }
  };

  return(

    <Page>

      <Container>

        <Header>

          <Back onClick={()=>navigate("/chronology")}>
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
          <Tab active>Interviews</Tab>
          <Tab>Evidence</Tab>
          <Tab>Review</Tab>

        </Tabs>

        <div className="row g-4">

          <div className="col-md-6">

            <Card>

              <h5>Staff Statements</h5>

              <Statement>

                <Name>Dr Smith</Name>

                <Date>2026-02-10</Date>

                <Quote>
                  "statement notes go here"
                </Quote>

              </Statement>

            </Card>

          </div>

          <div className="col-md-6">

            <Card style={{
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
              height:"100%"
            }}>
              Recorded statements appear here
            </Card>

          </div>

        </div>

        <Card style={{marginTop:"30px"}}>

          <h5>Record New Statement</h5>

          <div className="row">

            <div className="col-md-6">
              <Input
                placeholder="Staff Name"
                value={staffName}
                onChange={(e)=>setStaffName(e.target.value)}
              />
            </div>

            <div className="col-md-6">
              <Input
                type="date"
                value={date}
                onChange={(e)=>setDate(e.target.value)}
              />
            </div>

          </div>

          <TextArea
            placeholder="Statement Notes"
            value={notes}
            onChange={(e)=>setNotes(e.target.value)}
          />

          <button
            className="btn btn-primary w-100"
            disabled={!isFormValid}
            onClick={handleSave}
          >
            Save Statement
          </button>

        </Card>

      </Container>

    </Page>

  )

}

export default Interviews;