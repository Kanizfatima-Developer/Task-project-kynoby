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
  align-items:center;
  margin-bottom:25px;
`;

const Title = styled.div`
  font-size:22px;
  font-weight:600;
`;

const Badge = styled.span`
  background:#eef2f7;
  padding:5px 12px;
  border-radius:12px;
  margin-left:10px;
  font-size:12px;
`;

const Layout = styled.div`
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:25px;

  @media(max-width:900px){
    grid-template-columns:1fr;
  }
`;

const Tabs = styled.div`
  display:flex;
  gap:30px;
  border-bottom:1px solid #e5e7eb;
  margin-bottom:20px;
`;

const Tab = styled.div`
  padding:12px 0;
  cursor:pointer;
  font-weight:500;
  color:${p=>p.active ? "#4f46e5" : "#6b7280"};
  border-bottom:${p=>p.active ? "3px solid #4f46e5" : "none"};
`;

const Card = styled.div`
  background:white;
  border-radius:12px;
  border:1px solid #e5e7eb;
  padding:22px;
  margin-bottom:20px;
  box-shadow:0 3px 10px rgba(0,0,0,0.05);
`;

const TextBox = styled.div`
  background:#f1f5f9;
  padding:16px;
  border-radius:8px;
  line-height:1.6;
`;

const Table = styled.div`
  margin-top:15px;
`;

const Row = styled.div`
  display:grid;
  grid-template-columns:120px 1fr 1fr;
  border-bottom:1px solid #e5e7eb;
  padding:12px 0;
  font-size:14px;

  &:first-child{
    font-weight:600;
  }
`;

const ButtonBar = styled.div`
  display:flex;
  gap:10px;
  margin-bottom:15px;
  flex-wrap:wrap;
`;

const Btn = styled.button`
  padding:8px 14px;
  border-radius:8px;
  border:1px solid #d1d5db;
  background:white;
  cursor:pointer;
  font-weight:500;

  &:hover{
    background:#f8fafc;
  }
`;

const Primary = styled.button`
  padding:9px 18px;
  border-radius:8px;
  border:none;
  background:linear-gradient(135deg,#6366f1,#4f46e5);
  color:white;
  font-weight:500;
  cursor:pointer;

  &:hover{
    opacity:0.9;
  }
`;

const DraftBox = styled.div`
  background:white;
  border-radius:12px;
  border:1px solid #e5e7eb;
  height:520px;
  padding:20px;
  overflow:auto;
  line-height:1.7;
  box-shadow:0 3px 10px rgba(0,0,0,0.05);
`;

function InvestigationLog(){

  return(

    <Page>

      <Container>

        <Header>

          <Title>
            ← Kanizfatima
            <Badge>C-2024-001</Badge>
          </Title>

          <Primary>
            Draft
          </Primary>

        </Header>


        <Layout>

          {/* LEFT PANEL */}

          <div>

            <Tabs>

              <Tab>
                COMPLAINT DATA
              </Tab>

              <Tab active>
                INVESTIGATION LOG
              </Tab>

            </Tabs>


            <Card>

              <h5 className="mb-3">Internal Findings</h5>

              <TextBox>

                Phone logs confirm high call volume on Tuesday
                (post-Bank Holiday). Staff member identified as
                Jane Doe. Jane recalls the conversation, admits
                to being stressed but denies being rude.
                Appointment availability is currently running
                at 98% capacity.

              </TextBox>

            </Card>


            <Card>

              <h5>Chronology</h5>

              <Table>

                <Row>
                  <div>Time</div>
                  <div>Event Detail</div>
                  <div>Analysis</div>
                </Row>

                <Row>
                  2024-05-07

                  <div>
                    <b>Reception • Phone</b>
                    <div>
                      Patient called for appointment
                    </div>
                  </div>

                  <div>
                    Wait time confirmed as 38 mins
                  </div>
                </Row>


                <Row>
                  2024-05-07

                  <div>
                    <b>Reception • Phone</b>
                    <div>
                      Patient spoke to receptionist
                    </div>
                  </div>

                  <div>
                    Staff member polite but firm
                  </div>

                </Row>

              </Table>

            </Card>

          </div>


          {/* RIGHT PANEL */}

          <div>

            <ButtonBar>

              <Primary>
                Generate
              </Primary>

              <Btn>
                Shorten
              </Btn>

              <Btn>
                Fix Tone
              </Btn>

              <Btn>
                Reword Apology
              </Btn>

            </ButtonBar>


            <DraftBox>

              <p>

                Following receipt of your complaint,
                I have carried out a full investigation.

              </p>

              <p>

                This included a review of our digital
                telephony logs, an analysis of appointment
                capacity for that day, and a formal
                discussion with the staff member involved.

              </p>

              <p>

                Our investigation confirms that on Tuesday
                you called the surgery at 08:00 and remained
                in the queue for 38 minutes before the call
                was answered.

              </p>

            </DraftBox>

          </div>

        </Layout>

      </Container>

    </Page>

  )

}

export default InvestigationLog