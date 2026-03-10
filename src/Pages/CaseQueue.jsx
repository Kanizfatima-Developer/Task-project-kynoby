import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const Page = styled.div`
  background:#f5f7fb;
  min-height:100vh;
  padding:40px 60px;
  font-family: Arial, Helvetica, sans-serif;
`;

const FilterBar = styled.div`
  display:flex;
  gap:15px;
  margin-bottom:30px;
`;

const FilterButton = styled.button`
  padding:10px 18px;
  border-radius:8px;
  border:none;
  background:${p=>p.active ? "linear-gradient(to right,#6366f1,#4f46e5)" : "#eef2ff"};
  color:${p=>p.active ? "white" : "#4f46e5"};
  cursor:pointer;
`;

const StatCard = styled.div`
  background:white;
  border-radius:12px;
  border:1px solid #e5e7eb;
  padding:25px;
  box-shadow:0 2px 8px rgba(0,0,0,0.05);
`;

const StatTitle = styled.div`
  color:#6b7280;
  font-size:13px;
  margin-top:10px;
`;

const StatNumber = styled.div`
  font-size:28px;
  margin-top:5px;
  font-weight:600;
`;

const SectionTitle = styled.div`
  color:#6b7280;
  font-size:14px;
  margin-bottom:15px;
  letter-spacing:1px;
`;

const Table = styled.div`
  background:white;
  border-radius:12px;
  border:1px solid #e5e7eb;
  overflow:hidden;
`;

const Row = styled.div`
  display:grid;
  grid-template-columns:2fr 1fr 1fr 1fr;
  padding:18px 20px;
  border-bottom:1px solid #f1f5f9;
  align-items:center;
`;

const HeaderRow = styled(Row)`
  font-size:12px;
  color:#6b7280;
  background:#f8fafc;
`;

const RefTag = styled.span`
  background:#eef2f7;
  padding:5px 10px;
  border-radius:6px;
  font-size:12px;
`;

const Status = styled.span`
  display:flex;
  align-items:center;
  gap:6px;
`;

const Dot = styled.span`
  width:8px;
  height:8px;
  border-radius:50%;
  background:${p=>p.color};
`;

function CaseQueue(){

  return(

    <Page>

      {/* FILTER */}

      <FilterBar>

        <button className="btn btn-primary">
          LAST 7 DAYS
        </button>

        <button className="btn btn-outline-primary">
          ALL TIME
        </button>

      </FilterBar>


      {/* STATS */}

      <div className="container-fluid mb-4">

        <div className="row g-4">

          <div className="col-md-4">

            <StatCard>

              <StatTitle>
                TOTAL CASES
              </StatTitle>

              <StatNumber>
                2
              </StatNumber>

            </StatCard>

          </div>

          <div className="col-md-4">

            <StatCard>

              <StatTitle>
                ACTION NEEDED
              </StatTitle>

              <StatNumber>
                1
              </StatNumber>

            </StatCard>

          </div>

          <div className="col-md-4">

            <StatCard>

              <StatTitle>
                IN DRAFTING
              </StatTitle>

              <StatNumber>
                1
              </StatNumber>

            </StatCard>

          </div>

        </div>

      </div>


      {/* TABLE */}

      <SectionTitle>
        CASE PROCESSING QUEUE
      </SectionTitle>

      <Table>

        <HeaderRow>

          <div>CLIENT / PATIENT</div>
          <div>REF ID</div>
          <div>DATE LOGGED</div>
          <div>STATE</div>

        </HeaderRow>


        <Row>

          <div>Kanizfatima Pathan</div>

          <div>
            <RefTag>C-2026-001</RefTag>
          </div>

          <div>2026-02-10</div>

          <Status>
            <Dot color="#f59e0b"/>
            DRAFT
          </Status>

        </Row>


        <Row>

          <div>Shahil Pathan</div>

          <div>
            <RefTag>C-2025-004</RefTag>
          </div>

          <div>2025-05-12</div>

          <Status>
            <Dot color="#3b82f6"/>
            NEW
          </Status>

        </Row>

      </Table>

    </Page>

  )

}

export default CaseQueue;