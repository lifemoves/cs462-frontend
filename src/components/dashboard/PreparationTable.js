import { Card, CardBody, CardTitle, CardSubtitle, Table, Button} from "reactstrap";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


/*const patientName = "Mark Lee"
const intakeTime = "Afternoon"

const tableData = [
  {
    medication: "Panadol Extra",
    dosage: "2",
    cell: "A2",
    remarks: "Take one more tablet"
  },
  {
    medication: "Sinupret",
    dosage: "1",
    cell: "A2",
    remarks: ""
  },
];*/

const PreparationTable = () => {

  const [medicineList, setmedicineList] = useState([]);
  const { patientId } = useParams();
  const [patient, setPatient] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
        fetchMedicineList(patientId);
        fetchPatientInfo(patientId);
    }, []);

  const fetchMedicineList = async (patientId) => {

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ patient_id: patientId })
      };

      const res = await fetch(`http://localhost:8080/patient/prepare`, requestOptions);
      const data = await res.json();
      console.log(data.cells);
      setmedicineList(data.cells);
  }

    const fetchPatientInfo = async (patientId) => {

      const res = await fetch(`http://localhost:8080/patient/get/${patientId}`);
      const data = await res.json();
      console.log(data.patient);
      setPatient(data.patient);
  }

  const onDone = async () => {

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ patient_id: patientId })
      };

      const res = await fetch(`http://localhost:8080/patient/status`, requestOptions);
      const data = await res.json();
      console.log(data)

      if (data.status == "Dispensing Error"){
        alert("There is an error in dispensing the medicine! Please check the remarks")
        window.location.reload();
      } else {
        navigate("/preparation", { replace: true });
      }
  }

  return (
    <div>
      <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            {patient.patient_name}
          </CardTitle>
          <CardBody>
          <Table className="no-wrap align-middle" responsive borderless>
            <thead>
              <tr style={{
                fontSize: 12,
                backgroundColor: "#F0F4F7"
              }}>
                <th>Medication</th>
                <th>Dosage</th>
                <th>Cell Location</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              {medicineList.map((medicine, index) => (
                <tr key={index} className="border-bottom">
                  <td>
                    <div className="d-flex align-items-center pt-1 pb-1">
                        <span style={{
                            fontSize: 12
                        }}>{medicine.medicine_name}</span>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center pt-1 pb-1">
                        <span style={{
                            fontSize: 12
                        }}>{medicine.dosage}</span>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center pt-1 pb-1">
                        <span style={{
                            fontSize: 12
                        }}>{medicine.cell_id}</span>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center pt-1 pb-1">
                        <span style={{
                            fontSize: 12
                        }}>{medicine.remarks}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div style = {{
                textAlign: "center"
            }}>
          <Button style={{
                backgroundColor: "#2962FF",
                width: 150
            }} onClick={onDone}>Done</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default PreparationTable;
