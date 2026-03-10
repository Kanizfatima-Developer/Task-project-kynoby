import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const Page = styled.div`
  background:#f4f6fb;
  min-height:100vh;
  padding:40px 20px;
  font-family: "Inter", Arial, sans-serif;
`;

const Container = styled.div`
  max-width:1200px;
  margin:auto;
`;

const Header = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-bottom:30px;
`;

const Title = styled.div`
  font-size:22px;
  font-weight:600;
`;

const Badge = styled.span`
  background:#fff3cd;
  color:#b45309;
  padding:4px 10px;
  border-radius:20px;
  margin-left:10px;
  font-size:12px;
`;

const Tabs = styled.div`
  display:flex;
  gap:25px;
  border-bottom:1px solid #e5e7eb;
  margin-bottom:20px;
`;

const Tab = styled.div`
  padding:12px 0;
  cursor:pointer;
  font-weight:500;
  border-bottom:${p => p.active ? "3px solid #4f46e5" : "none"};
  color:${p => p.active ? "#4f46e5" : "#6b7280"};
`;

const Card = styled.div`
  background:white;
  border:1px solid #e5e7eb;
  border-radius:12px;
  padding:22px;
  margin-bottom:20px;
  box-shadow:0 3px 10px rgba(0,0,0,0.05);
`;

const Label = styled.div`
  font-size:13px;
  color:#6b7280;
  margin-bottom:5px;
`;

const Value = styled.div`
  font-weight:500;
`;

const Alert = styled.span`
  background:#fef3c7;
  padding:6px 10px;
  border-radius:6px;
  font-size:12px;
  margin-right:8px;
`;

const DraftBox = styled.div`
  background:#f8fafc;
  border-radius:12px;
  border:1px dashed #d1d5db;
  height:420px;
  display:flex;
  align-items:center;
  justify-content:center;
  color:#6b7280;
  font-size:14px;
`;

const TopButtons = styled.div`
  margin-bottom:15px;
`;

function DraftResponse() {

  return (

    <Page>

      <Container>

       
        <Header>

          <Title>
            ← Kanizfatima
            <Badge>Returned</Badge>
          </Title>

          <button className="btn btn-dark">
            Draft
          </button>

        </Header>


        <div className="row g-4">



          <div className="col-md-6">

            <Tabs>

              <Tab active>
                COMPLAINT DATA
              </Tab>

              <Tab>
                INVESTIGATION LOG
              </Tab>

            </Tabs>


          

            <Card>

              <h5 className="mb-3">
                Patient Profile
              </h5>

              <Label>NHS Number</Label>
              <Value>NHS-00003-11</Value>

              <Label className="mt-3">
                Date of Birth
              </Label>

              <Value>
                21/08/2003
              </Value>

              <div className="mt-3">

                <Alert>DIABETIC</Alert>

                <Alert>
                  REPEAT PRESCRIPTIONS
                </Alert>

              </div>

            </Card>


          

            <Card>

              <h5 className="mb-3">
                Original Correspondence
              </h5>

              <p className="text-muted">

                I am writing to complain about the difficulty in getting
                an appointment last Tuesday. I called at 8am sharp and
                was on hold for 40 minutes, only to be told there were
                no slots left. The receptionist was also quite dismissive
                when I expressed my frustration. I have a chronic condition
                and need regular monitoring.

              </p>

            </Card>


           

            <Card>

              <h5 className="mb-3">
                Added Investigations
              </h5>

              <p className="text-muted">
                Investigation notes will appear here.
              </p>

            </Card>

          </div>



          <div className="col-md-6">

            <TopButtons>

              <button className="btn btn-outline-secondary me-2">
                AI Copilot
              </button>

              <button className="btn btn-primary">
                Generate Draft
              </button>

            </TopButtons>


            <DraftBox>



              Dear Kanizfatima,



              Thank you for bringing your concerns to our attention regarding the difficulty you experienced when trying to book an appointment.

              We are sorry for the frustration caused by the long waiting time on the phone. We understand how important timely access to care is, especially when you require medical support.

              After reviewing our records, we confirmed that you called the surgery at 08:00 AM on the reported day. Due to a high volume of calls that morning, your call was answered after approximately 38 minutes. Our reception staff were handling a large number of patient requests, and appointment availability was nearly full at 98% capacity.

              We apologise for the inconvenience this may have caused and appreciate your patience. Please be assured that we are continuously reviewing our processes to improve access and communication for our patients.

              If you would like to discuss this matter further, please feel free to contact the practice.

              Kind regards,
              Practice Management Team

            </DraftBox>

          </div>


        </div>

      </Container>

    </Page>

  )

}

export default DraftResponse