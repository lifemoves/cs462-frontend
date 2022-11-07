import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";
import Blog from "../components/dashboard/Patients";
import React, { useState, useEffect } from "react";

/*const BlogData = [
  {
    name: "Amanda Lim",
    patientID: "1234567",
    status: "Dispensed",
  },
  {
    name: "Mark Lee",
    patientID: "1435267",
    status: "Dispensing Error",
  },
  {
    name: "Andy Low",
    patientID: "1634267",
    status: "To Prepare",
  },
];*/

const Profile = () => {

  const [patients, setpatients] = useState([]);

  useEffect(() => {
        fetchPatients();
    }, []);

  const fetchPatients = async () => {
      const res = await fetch(`http://localhost:8080/patient/getall`);
      const data = await res.json();
      console.log(data.patients);
      setpatients(data.patients);
  }

  return (
    <div>
    { patients &&
      <div><h5 className="mb-3 fw-bold" style={{
        color: "#bd1c1c"
      }}>Preparation</h5>
      <Row>
        {patients.map((patient, index) => (
          <Col sm="6" lg="6" xl="3" key={index}>
            <Blog
              name={patient.patient_name}
              patientID={patient.patient_id}
              status={patient.dispense_status}
            />
          </Col>
        ))}
      </Row></div>
    }

    { !patients &&
      <div>
      <h5 className="mb-3 fw-bold" style={{
        color: "#bd1c1c"
      }}>Preparation</h5>
      <small> No patients to prepare medicine for.</small>
      </div>
    }

    </div>
  );
};

export default Profile;
