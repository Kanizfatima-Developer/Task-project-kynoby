import styled from "styled-components";
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
  padding:5px 10px;
  border-radius:20px;
  margin-left:10px;
  font-size:12px;
`;

const StepBar = styled.div`
  display:flex;
  justify-content:space-between;
  margin:30px 0 40px;
`;

const Step = styled.div`
  text-align:center;
  flex:1;
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
  margin:auto;
  font-weight:600;
`;

const Label = styled.div`
  margin-top:8px;
  color:${(p)=>p.active ? "#4f46e5" : "#6b7280"};
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
  padding:25px;
  margin-top:25px;
  box-shadow:0 3px 10px rgba(0,0,0,0.05);
`;

const Guideline = styled.div`
  background:#eef2ff;
  border:1px solid #c7d2fe;
  padding:20px;
  border-radius:10px;
  color:#1e3a8a;
  margin-bottom:25px;
`;

const SectionTitle = styled.div`
  margin-bottom:10px;
  font-weight:600;
`;

const TextArea = styled.textarea`
  width:100%;
  height:140px;
  border:1px solid #d1d5db;
  border-radius:8px;
  padding:12px;
  resize:none;
  font-size:14px;

  &:focus{
    outline:none;
    border-color:#6366f1;
    box-shadow:0 0 0 2px rgba(99,102,241,0.1);
  }
`;

const Footer = styled.div`
  display:flex;
  justify-content:flex-end;
  margin-top:30px;
`;

function Investigate(){

  return(

    <Page>

      <Container>

        <Header>

          <Back>← Back to Queue</Back>

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

          <Step>
            <Circle done>✓</Circle>
            <Label>Context</Label>
          </Step>

          <Step>
            <Circle active>3</Circle>
            <Label active>Investigate</Label>
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

        </StepBar>


        <Title>Investigation Hub</Title>

        <SubTitle>
          Reconstruct facts, gather evidence, and prepare for drafting.
        </SubTitle>


        <Tabs>

          <Tab active>Overview</Tab>
          <Tab>Chronology</Tab>
          <Tab>Interviews</Tab>
          <Tab>Evidence</Tab>
          <Tab>Review</Tab>

        </Tabs>


        <Card>

          <Guideline>

            <b>Investigation Guidelines</b>

            <p className="mb-0 mt-2">
            This narrative feeds into the final response. Focus on factual reconstruction.
            Identify if this was a process failure, individual error, or communication breakdown.
            </p>

          </Guideline>


          <SectionTitle>
            1. Investigation Narrative / Findings
          </SectionTitle>

          <TextArea placeholder="Write investigation findings..." />


          <SectionTitle style={{marginTop:"20px"}}>
            2. Root Cause Analysis (Internal)
          </SectionTitle>

          <TextArea placeholder="Describe root cause..." />

        </Card>


        <Footer>

          <button className="btn btn-primary px-4 py-2">
            → Next: Build Chronology
          </button>

        </Footer>

      </Container>

    </Page>

  )

}

export default Investigate