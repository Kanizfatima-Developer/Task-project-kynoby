import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Page = styled.div`
  background:#f4f6fb;
  min-height:100vh;
  padding:40px 20px;
  font-family:"Inter", Arial, sans-serif;
`;

const Container = styled.div`
  max-width:1100px;
  margin:auto;
`;

const Header = styled.div`
  display:flex;
  justify-content:flex-end;
  margin-bottom:20px;
`;

const Status = styled.div`
  background:#e6f6ee;
  color:#16a34a;
  padding:6px 14px;
  border-radius:20px;
  font-size:12px;
  font-weight:500;
`;

const StepBar = styled.div`
  display:flex;
  align-items:center;
  margin:30px 0 60px;
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
  color:${(p)=>p.done ? "white" : "#6b7280"};
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight:600;
`;

const Label = styled.div`
  margin-top:6px;
  font-size:13px;
  color:#6b7280;
`;

const Center = styled.div`
  text-align:center;
  margin-top:40px;
`;

const Icon = styled.div`
  width:90px;
  height:90px;
  background:#e6f6ee;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:36px;
  margin:auto;
  color:#16a34a;
`;

const Title = styled.h1`
  margin-top:20px;
  font-weight:600;
`;

const Sub = styled.p`
  color:#6b7280;
  margin-top:8px;
`;

const Button = styled.button`
  margin-top:20px;
  padding:10px 20px;
  border-radius:8px;
  border:1px solid #d1d5db;
  background:white;
  font-weight:500;
  cursor:pointer;

  &:hover{
    background:#f8fafc;
  }
`;

const Card = styled.div`
  width:420px;
  margin:40px auto;
  background:white;
  border-radius:12px;
  border:1px solid #e5e7eb;
  padding:25px;
  box-shadow:0 3px 10px rgba(0,0,0,0.05);
`;

const Row = styled.div`
  display:flex;
  justify-content:space-between;
  padding:12px;
  border:1px solid #e5e7eb;
  border-radius:8px;
  margin-top:12px;
  font-size:14px;
`;

const Danger = styled.button`
  width:100%;
  margin-top:18px;
  padding:12px;
  border:none;
  border-radius:8px;
  background:#dc2626;
  color:white;
  font-weight:500;
  cursor:pointer;

  &:hover{
    background:#b91c1c;
  }
`;

const Note = styled.div`
  margin-top:10px;
  font-size:12px;
  color:#6b7280;
  text-align:center;
`;

function ResponseSaved(){

  const navigate = useNavigate();

  const closeCase = () => {
    navigate("/case-closed");
  };

  return(

    <Page>

      <Container>

        <Header>

          <Status>
            SYSTEM ONLINE
          </Status>

        </Header>

        <StepBar>

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
            <Circle done>✓</Circle>
            <Label>Drafting</Label>
          </Step>

          <Line/>

          <Step>
            <Circle active>5</Circle>
            <Label>Review</Label>
          </Step>

          <Line/>

          <Step>
            <Circle>6</Circle>
            <Label>Closed</Label>
          </Step>

        </StepBar>

        <Center>

          <Icon>✓</Icon>

          <Title>
            Response Saved
          </Title>

          <Sub>
            The final response has been locked and is ready to be issued to the patient.
          </Sub>

          <Button>
            👁 Preview PDF
          </Button>

        </Center>

        <Card>

          <h5>
            Completion Actions
          </h5>

          <Row>

            Method

            <div>
              Email
            </div>

          </Row>

          <Danger onClick={closeCase}>
            Mark Sent & Close Case
          </Danger>

          <Note>
            Closing the case makes it read-only for audit purposes.
          </Note>

        </Card>

      </Container>

    </Page>

  )

}

export default ResponseSaved;