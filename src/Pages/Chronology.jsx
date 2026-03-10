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
  border:2px solid ${(p) => p.active ? "#4f46e5" : "#cbd5e1"};
  background:${(p) => p.done ? "#4f46e5" : "white"};
  color:${(p) => p.done ? "white" : (p.active ? "#4f46e5" : "#94a3b8")};
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
  color:${p => p.active ? "#4f46e5" : "#6b7280"};
  border-bottom:${p => p.active ? "3px solid #4f46e5" : "none"};
`;

const Timeline = styled.div`
  background:white;
  border:1px solid #e5e7eb;
  border-radius:12px;
  padding:25px;
`;

const TimelineItem = styled.div`
  border-left:2px solid #d1d5db;
  padding-left:25px;
  margin-bottom:25px;
  position:relative;
`;

const Dot = styled.div`
  width:14px;
  height:14px;
  border:2px solid #9ca3af;
  border-radius:50%;
  background:white;
  position:absolute;
  left:-8px;
  top:6px;
`;

const EventCard = styled.div`
  background:#f9fafb;
  padding:18px;
  border-radius:8px;
`;

const Date = styled.div`
  font-size:12px;
  color:#6b7280;
  margin-bottom:5px;
`;

const Tag = styled.span`
  background:#e5e7eb;
  padding:4px 10px;
  border-radius:20px;
  font-size:12px;
  margin-left:10px;
`;

const FormCard = styled.div`
  background:white;
  border:1px solid #e5e7eb;
  border-radius:12px;
  padding:25px;
`;

function Chronology() {

  const navigate = useNavigate();

  const goToInterviews = () => {
    navigate("/interviews");
  };

  return (

    <Page>

      <Header>

        <Back onClick={() => navigate("/context")}>
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

        <Line />

        <Step>
          <Circle done>✓</Circle>
          <Label>Context</Label>
        </Step>

        <Line />

        <Step>
          <Circle active>3</Circle>
          <Label>Investigate</Label>
        </Step>

        <Line />

        <Step>
          <Circle>4</Circle>
          <Label>Drafting</Label>
        </Step>

        <Line />

        <Step>
          <Circle>5</Circle>
          <Label>Review</Label>
        </Step>

        <Line />

        <Step>
          <Circle>6</Circle>
          <Label>Closed</Label>
        </Step>

      </StepBar>

      <Title>Timeline of Events</Title>

      <SubTitle>
        Essential for establishing the sequence of care.
      </SubTitle>

      <Tabs>

        <Tab>Overview</Tab>
        <Tab active>Chronology</Tab>
        <Tab>Interviews</Tab>
        <Tab>Evidence</Tab>
        <Tab>Review</Tab>

      </Tabs>

      <div className="container-fluid mt-4">

        <div className="row g-4">

          <div className="col-lg-8">

            <Timeline>

              {/* Event 1 */}
              <TimelineItem>
                <Dot />
                <EventCard>
                  <Date>
                    2023-05-06
                    <Tag>Registration Form</Tag>
                  </Date>
                  Patient registered with practice
                </EventCard>
              </TimelineItem>


              {/* Event 2 */}
              <TimelineItem>
                <Dot />
                <EventCard>
                  <Date>
                   2024-05-07
                    <Tag>Appointment</Tag>
                  </Date>
                  Patient call for booking appointment 
                </EventCard>
              </TimelineItem>


              {/* Event 3 */}
              <TimelineItem>
                <Dot />
                <EventCard>
                  <Date>
                    2024-05-07
                    <Tag>Complaint</Tag>
                  </Date>
                  Patient generate Appointment Issued
                </EventCard>
              </TimelineItem>

            </Timeline>
          </div>

          <div className="col-lg-4">

            <FormCard>

              <h4 className="mb-3">Add New Event</h4>

              <div className="mb-3">

                <label className="form-label">Date</label>

                <input
                  type="date"
                  className="form-control"
                />

              </div>

              <div className="mb-3">

                <label className="form-label">Description</label>

                <textarea
                  className="form-control"
                  rows="3"
                />

              </div>

              <div className="mb-3">

                <label className="form-label">Source</label>

                <input
                  className="form-control"
                  placeholder="Example: EMIS / Letter / Call"
                />

              </div>

              <button
                className="btn btn-primary w-100"
                onClick={goToInterviews}
              >
                Add to Timeline
              </button>

            </FormCard>

          </div>

        </div>

      </div>

    </Page>

  )

}

export default Chronology;