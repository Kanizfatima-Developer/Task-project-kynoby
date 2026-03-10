import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  validateName,
  validatePhone
} from "../validations/formValidation";

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

  // form states
  const [name,setName] = useState("");
  const [phone,setPhone] = useState("");

  // validation check
  const isFormValid =
    validateName(name) &&
    validatePhone(phone);

  const handleNext = () => {
    if(isFormValid){
      navigate("/chronology");
    }
  };

  return (
    <Page>

      <SectionTitle>
        Patient Identification & Records
      </SectionTitle>

      <div className="container-fluid">

        <div className="row g-4">

          {/* Patient Form */}

          <div className="col-md-6">

            <Card>

              <CardHeader>
                Add Patient Record
              </CardHeader>

              <PatientCard>

                <div className="mb-3">

                  <label className="form-label">
                    Patient Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    placeholder="Enter patient name"
                  />

                  {!validateName(name) && name !== "" && (
                    <div className="text-danger small mt-1">
                      Only letters allowed
                    </div>
                  )}

                </div>

                <div className="mb-3">

                  <label className="form-label">
                    Phone Number
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)}
                    placeholder="Enter phone number"
                  />

                  {!validatePhone(phone) && phone !== "" && (
                    <div className="text-danger small mt-1">
                      Enter valid 10 digit phone number
                    </div>
                  )}

                </div>

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
          disabled={!isFormValid}
          onClick={handleNext}
        >
          → Confirm & Start Investigation
        </button>

      </Footer>

    </Page>
  );
}

export default Addpatient;