import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Page = styled.div`
  background: #f5f7fb;
  min-height: 100vh;
  padding: 40px 60px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const Back = styled.div`
  color: #6b7280;
  cursor: pointer;
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
  width: 100%;
  margin-top: 20px;
`;

const Line = styled.div`
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  height: 2px;
  background: #e5e7eb;
  z-index: 1;
`;

const Steps = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 2;
`;

const Step = styled.div`
  text-align: center;
  flex: 1;
`;

const Circle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid ${(props) => (props.active ? "#4f46e5" : "#cbd5e1")};
  background: white;
  color: ${(props) => (props.active ? "#4f46e5" : "#94a3b8")};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

const Label = styled.div`
  margin-top: 8px;
  font-size: 14px;
  color: ${(props) => (props.active ? "#4f46e5" : "#6b7280")};
`;

const CenterBox = styled.div`
  text-align: center;
  margin-top: 120px;
`;

const Message = styled.h3`
  margin-bottom: 25px;
`;

const Button = styled.button`
  padding: 12px 30px;
  border-radius: 8px;
  border: none;
  background: linear-gradient(to right,#6366f1,#4f46e5);
  color: white;
  cursor: pointer;
  font-size: 15px;
`;

function Setup() {

  const navigate = useNavigate();

  return (
    <Page>

      <Header>

        <Back onClick={() => navigate("/dashboard")}>
          ← Back to Queue
        </Back>

        <Ref>
          REF: COM-2026-2310
          <Badge>Intake</Badge>
        </Ref>

      </Header>

      <StepContainer>

        <Line />

        <Steps>

          <Step>
            <Circle active>1</Circle>
            <Label active>Setup</Label>
          </Step>

          <Step>
            <Circle>2</Circle>
            <Label>Context</Label>
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

      <CenterBox>

        <Message>
          Intake complete. Proceeding to Setup...
        </Message>

        <Button onClick={() => navigate("/context")}>
          Begin Setup
        </Button>

      </CenterBox>

    </Page>
  );
}

export default Setup;