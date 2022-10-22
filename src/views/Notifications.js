import ProjectTables from "../components/dashboard/NotificationTable";
import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";

const Notifications = () => {
  return (
    <Row>
      <Col>
        <ProjectTables />
      </Col>
    </Row>
  );
};

export default Notifications;
