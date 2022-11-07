import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import React, { useState, useEffect } from "react";

/*const tableData = [
  {
    name: "Panadol Extra",
    description: "To provide fast and effective temporary relief from aches and pains.",
    stock: "20",
    cell: "A2",
    remarks: ""
  },
  {
    name: "Sinupret",
    description: "For acute and chronic inflammation of the paranasal sinuses and of the respiratory tract.",
    stock: "10",
    cell: "A3",
    remarks: ""
  },
  {
    name: "Heptral",
    description: "To support healthy liver function, reduction of tiredness and fatigue.",
    stock: "2",
    cell: "A7",
  },
];*/

const InventoryTable = () => {

  const [inventoryList, setInventoryList] = useState([]);

  useEffect(() => {
        fetchInventoryList();
    }, []);

  const fetchInventoryList = async () => {
      const res = await fetch(`http://localhost:8080/inventory`);
      const data = await res.json();
      console.log(data.medicine);
      setInventoryList(data.medicine);
  }

  return (
    <div>
      <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0" style={{
            color: "#bd1c1c"
          }}>
            Medicine Inventory
          </CardTitle>
          <CardBody>
          <Table className="no-wrap align-middle" responsive borderless>
            <thead>
              <tr style={{
                fontSize: 12,
                backgroundColor: "#F0F4F7"
              }}>
                <th>Name</th>
                <th>Description</th>
                <th>Stock</th>
              </tr>
            </thead>
            <tbody>
              {inventoryList.map((medicine, index) => (
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
                        }}>{medicine.description}</span>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center pt-1 pb-1">
                        <span style={{
                            fontSize: 12
                        }}>{medicine.stock}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default InventoryTable;
