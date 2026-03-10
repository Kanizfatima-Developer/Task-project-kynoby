import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Page = styled.div`
  background:#f5f7fb;
  min-height:100vh;
  padding:40px 60px;
  font-family: Arial, Helvetica, sans-serif;
`;

const Header = styled.div`
  display:flex;
  justify-content:space-between;
  margin-bottom:20px;
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
  background:#eef2f7;
  padding:4px 10px;
  border-radius:20px;
  margin-left:10px;
  font-size:12px;
`;

const StepBar = styled.div`
  display:flex;
  align-items:center;
  margin:20px 0 40px;
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
  border:2px solid #4f46e5;
  background:#4f46e5;
  color:white;
  display:flex;
  align-items:center;
  justify-content:center;
`;

const LastCircle = styled.div`
  width:40px;
  height:40px;
  border-radius:50%;
  border:2px solid #4f46e5;
  color:#4f46e5;
  display:flex;
  align-items:center;
  justify-content:center;
`;

const Label = styled.div`
  margin-top:6px;
  font-size:13px;
  color:#6b7280;
`;

const Banner = styled.div`
  background:#1e293b;
  color:white;
  border-radius:12px;
  padding:25px;
  display:flex;
  justify-content:space-between;
  align-items:center;
`;

const Card = styled.div`
  background:white;
  border-radius:12px;
  border:1px solid #e5e7eb;
  box-shadow:0 2px 8px rgba(0,0,0,0.05);
`;

const CardHeader = styled.div`
  padding:18px;
  border-bottom:1px solid #e5e7eb;
  font-weight:600;
`;

const Row = styled.div`
  display:flex;
  justify-content:space-between;
  padding:15px 18px;
  border-bottom:1px solid #f1f5f9;
`;

const File = styled.div`
  display:flex;
  justify-content:space-between;
  padding:15px 18px;
  border-bottom:1px solid #f1f5f9;
  cursor:pointer;
`;

function CaseClosed(){

  const navigate = useNavigate();

  return(

    <Page>

      <Header>

        <Back onClick={() => navigate("/dashboard")}>
          ← Back to Queue
        </Back>

        <Ref>
          REF: COM-2026-2310
          <Badge>Closed</Badge>
        </Ref>

      </Header>

      <StepBar>

        <Step>
          <Circle>✓</Circle>
          <Label>Setup</Label>
        </Step>

        <Line/>

        <Step>
          <Circle>✓</Circle>
          <Label>Context</Label>
        </Step>

        <Line/>

        <Step>
          <Circle>✓</Circle>
          <Label>Investigate</Label>
        </Step>

        <Line/>

        <Step>
          <Circle>✓</Circle>
          <Label>Drafting</Label>
        </Step>

        <Line/>

        <Step>
          <Circle>✓</Circle>
          <Label>Review</Label>
        </Step>

        <Line/>

        <Step>
          <LastCircle>6</LastCircle>
          <Label>Closed</Label>
        </Step>

      </StepBar>

      <Banner>

        <div>
          <h2 className="mb-1">Case Closed</h2>
          <div className="text-light small">
            Archived on 2/10/2026
          </div>
        </div>

        <button className="btn btn-outline-light">
          Export Audit Log
        </button>

      </Banner>

      <div className="container-fluid mt-4">

        <div className="row g-4">

          <div className="col-md-6">

            <Card>

              <CardHeader>
                Case Summary
              </CardHeader>

              <Row>
                Reference
                <div>COM-2026-2310</div>
              </Row>

              <Row>
                Total Duration
                <div>5 Days</div>
              </Row>

              <Row>
                Final Outcome
                <div>Response Issued</div>
              </Row>

            </Card>

          </div>

          <div className="col-md-6">

            <Card>

              <CardHeader>
                Document Archive
              </CardHeader>

              <File>
                Original Complaint
                ⬇
              </File>

              <File>
                Final Response Letter
                ⬇
              </File>

              <File>
                Full Audit Trail
                ⬇
              </File>

            </Card>

          </div>

        </div>

      </div>

    </Page>

  )

}

export default CaseClosed;