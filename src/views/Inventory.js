import InventoryTable from "../components/dashboard/InventoryTable";
import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";

const Inventory = () => {
  return (
    <Row>
      <Col>
        <InventoryTable />
      </Col>
    </Row>
  );
};

export default Inventory;
