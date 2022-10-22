import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";

const snippetCode = "Snippet Code Here"
const randomPersonName = "Random Person Name Here"
const randomPersonLanguage = "Language Here"



const Home = () => {
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            Snippet Title
            <br/>
            <small className="text-muted">Language | Framework </small>
          </CardTitle>
          <CardBody>
            <div style={{
                backgroundColor: '#3B5556',
                color: '#ffffff',
                padding: '20px'
            }}>
            {snippetCode}
            </div>
            <div style={{
                backgroundColor: '#E3E3E3',
                padding: '20px'
            }}>
            {randomPersonName}
            <br/><small className="text-muted"> {randomPersonLanguage} </small>
            </div>
            <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-2 d-flex justify-content-center">
                <Button
                  className="mt-3"
                  style={{
                    backgroundColor: '#328D3D',
                    color: '#ffffff',
                    padding: '10px',
                    fontSize: '25px',
                    width: '50px'
                  }}>
                  ✓
                </Button>
                </div>
                <div className="col-2 d-flex justify-content-center">
                <Button
                  className="mt-3"
                  style={{
                    backgroundColor: '#9C3737',
                    color: '#ffffff',
                    padding: '10px',
                    fontSize: '25px',
                    width: '50px'
                  }}>
                  X
                </Button>
                </div>
                </div>
                </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Home;
