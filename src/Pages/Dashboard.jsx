import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const Page = styled.div`
  background: #f4f6fb;
  min-height: 100vh;
  padding: 50px 20px;
  font-family: "Inter", Arial, sans-serif;
`;

const Container = styled.div`
  max-width: 1150px;
  margin: auto;
`;

const Card = styled.div`
  background: white;
  padding: 28px;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 14px rgba(0,0,0,0.06);
`;

const CardTitle = styled.h4`
  margin-bottom: 20px;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  margin-bottom: 22px;
  font-size: 14px;

  &:focus{
    outline:none;
    border-color:#6366f1;
    box-shadow:0 0 0 2px rgba(99,102,241,0.1);
  }
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 10px;
`;

const PromptBox = styled.div`
  margin-top: 18px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  overflow: hidden;
`;

const PromptHeader = styled.div`
  padding: 12px 15px;
  border-bottom: 1px solid #e5e7eb;
  font-size: 13px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  background: #fafafa;
`;

const PromptBody = styled.textarea`
  width: 100%;
  height: 200px;
  border: none;
  resize: none;
  padding: 15px;
  outline: none;
  font-size: 14px;
`;

const GovernanceBox = styled.div`
  margin-top: 18px;
  padding: 16px;
  border-radius: 10px;
  background: #eef4ff;
  border: 1px solid #c7d6ff;
  font-size: 14px;
`;

function Dashboard() {

  const navigate = useNavigate();

  return (
    <Page>

      <Container>

        <div className="row g-4">

          <div className="col-md-6">

            <Card>

              <CardTitle>
                Response Configuration
              </CardTitle>

              <Input placeholder="Response Type" />

              <ButtonRow>

                <button
                  className="btn btn-outline-secondary w-50"
                  onClick={() => navigate("/dashboard")}
                >
                  Cancel
                </button>

                <button
                  className="btn btn-primary w-100"
                  onClick={() => navigate("/setup")}
                >
                  Continue
                </button>

              </ButtonRow>

            </Card>

          </div>

          <div className="col-md-6">

            <Card>

              <CardTitle>
                Prompt Preview
              </CardTitle>

              <h6 className="fw-bold">
                Standard Complaint Response
              </h6>

              <p className="text-muted small">
                Generates a formal response to a patient complaint based on
                investigation findings.
              </p>

              <PromptBox>

                <PromptHeader>

                  <span>
                    SYSTEM PROMPT
                  </span>

                  <span className="text-muted">
                    v1.2.0
                  </span>

                </PromptHeader>

                <PromptBody
                  placeholder="Prompt content will appear here..."
                />

              </PromptBox>


              <GovernanceBox>

                <strong>
                  Governance & Review Required
                </strong>

                <p className="mb-0 mt-2">
                  This response will be generated using the above AI prompt.
                  You will be required to review and confirm the output before
                  submission.
                </p>

              </GovernanceBox>

            </Card>

          </div>

        </div>

      </Container>

    </Page>
  );
}

export default Dashboard;