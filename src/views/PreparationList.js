import PreparationTable from "../components/dashboard/PreparationTable";
import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";

const PreparationList = () => {
  return (
    <Row>
      <Col>
        <PreparationTable />
      </Col>
    </Row>
  );
};

export default PreparationList;
