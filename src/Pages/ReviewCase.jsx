import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Page = styled.div`
  background:#f5f7fb;
  min-height:100vh;
  padding:40px 60px;
`;

const Header = styled.div`
  display:flex;
  justify-content:space-between;
  margin-bottom:30px;
`;

const Back = styled.div`
  color:#6b7280;
  cursor:pointer;
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
`;

const Label = styled.div`
  margin-top:6px;
  font-size:14px;
  color:#6b7280;
`;

const Title = styled.h2`
  margin-bottom:5px;
`;

const SubTitle = styled.div`
  color:#6b7280;
  margin-bottom:25px;
`;

const Tabs = styled.div`
  display:flex;
  border-bottom:1px solid #e5e7eb;
`;

const Tab = styled.div`
  padding:15px 20px;
  cursor:pointer;
  color:${p=>p.active ? "#4f46e5" : "#6b7280"};
  border-bottom:${p=>p.active ? "3px solid #4f46e5" : "none"};
`;

const CompleteCard = styled.div`
  background:#e6f6ee;
  border-radius:12px;
  padding:35px;
  text-align:center;
  margin-top:30px;
`;

const Grid = styled.div`
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:30px;
  margin-top:30px;
`;

const Card = styled.div`
  background:white;
  border:1px solid #e5e7eb;
  border-radius:12px;
`;

const CardHeader = styled.div`
  padding:18px;
  border-bottom:1px solid #e5e7eb;
  font-weight:600;
`;

const Row = styled.div`
  display:flex;
  justify-content:space-between;
  padding:14px 18px;
  border-bottom:1px solid #f1f5f9;
`;

const Yes = styled.span`
  color:#16a34a;
  font-weight:500;
`;

const PreviewBox = styled.div`
  height:150px;
  background:#f1f5f9;
  border-radius:10px;
`;

const Footer = styled.div`
  display:flex;
  justify-content:flex-end;
  margin-top:30px;
`;

const Button = styled.button`
  padding:14px 28px;
  border:none;
  border-radius:8px;
  background:linear-gradient(to right,#6366f1,#4f46e5);
  color:white;
  cursor:pointer;
`;

function ReviewCase(){

  const navigate = useNavigate();

  const goToDraft = () => {
    navigate("/draft-response");
  };

  return(

    <Page>

      <Header>

        <Back onClick={()=>navigate("/evidence")}>
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
          <Circle done>✓</Circle>
          <Label>Investigate</Label>
        </Step>

        <Line/>

        <Step>
          <Circle active>4</Circle>
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
        <Tab>Evidence</Tab>
        <Tab active>Review</Tab>

      </Tabs>

      <CompleteCard>

        <h2>Investigation Complete?</h2>

        <p>
          You are about to lock these findings and hand off the case to
          Dr. Michael Chen for drafting.
        </p>

      </CompleteCard>

      <Grid>

        <Card>

          <CardHeader>
            Summary Check
          </CardHeader>

          <Row>
            Narrative Entered
            <Yes>Yes</Yes>
          </Row>

          <Row>
            Root Cause
            <Yes>Yes</Yes>
          </Row>

          <Row>
            Timeline Events
            2
          </Row>

        </Card>

        <PreviewBox/>

      </Grid>

      <Footer>

        <Button onClick={goToDraft}>
          Generate Response
        </Button>

      </Footer>

    </Page>

  )

}

export default ReviewCase;