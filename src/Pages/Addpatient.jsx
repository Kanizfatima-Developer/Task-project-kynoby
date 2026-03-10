import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Page = styled.div`
  background: #f5f7fb;
  min-height: 100vh;
  padding: 40px 60px;
  font-family: Arial, Helvetica, sans-serif;
`;

const SectionTitle = styled.h2`
  margin-bottom: 30px;
  font-weight: 600;
`;

const Card = styled.div`
  background: white;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  padding: 25px;
`;

const CardHeader = styled.div`
  font-weight: 600;
  margin-bottom: 20px;
`;

const PatientCard = styled.div`
  background: #e8f7ee;
  border: 1px solid #8fd6a8;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #d6f0df;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
`;

const PatientInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const PatientName = styled.div`
  font-weight: 600;
`;

const PatientPhone = styled.div`
  color: #6b7280;
`;

const UploadCard = styled.div`
  background: white;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  padding: 25px;
`;

const UploadBox = styled.div`
  border: 2px dashed #cbd5e1;
  border-radius: 10px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fafafa;
  margin-top: 20px;
`;

const Footer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: flex-end;
`;

function Addpatient() {

  const navigate = useNavigate();

  const patient = {
    name: "Kanizfatima Pathan",
    phone: "9876543219"
  };

  const handleNext = () => {
    navigate("/chronology");
  };

  return (
    <Page>

      <SectionTitle>
        Patient Identification & Records
      </SectionTitle>

      <div className="container-fluid">

        <div className="row g-4">

          {/* Patient Card */}

          <div className="col-md-6">

            <Card>

              <CardHeader>
                Add Patient Record
              </CardHeader>

              <PatientCard>

                <Avatar>👤</Avatar>

                <PatientInfo>
                  <PatientName>{patient.name}</PatientName>
                  <PatientPhone>{patient.phone}</PatientPhone>
                </PatientInfo>

              </PatientCard>

            </Card>

          </div>

          {/* Upload */}

          <div className="col-md-6">

            <UploadCard>

              <CardHeader>
                Manual Uploads
                <div className="text-muted small mt-1">
                  Attach additional context specific to this case.
                </div>
              </CardHeader>

              <UploadBox>

                <div className="text-center">

                  <div className="mb-2 fs-5">
                    📂 Drag files here
                  </div>

                  <button className="btn btn-outline-primary btn-sm">
                    Browse Files
                  </button>

                </div>

              </UploadBox>

            </UploadCard>

          </div>

        </div>

      </div>

      {/* Next Button */}

      <Footer>

        <button
          className="btn btn-primary px-4 py-2"
          onClick={handleNext}
        >
          → Confirm & Start Investigation
        </button>

      </Footer>

    </Page>
  );
}

export default Addpatient;