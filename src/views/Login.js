import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";
import logo from '../assets/images/logos/cs302Logo.svg';

const Login = () => {
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card className="mx-auto" style={{
            width:1000
        }}>
          <CardBody className="mx-auto d-flex align-items-center">
            <form>
            <img style={{
                width: 200,
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: 20
            }} src={logo}/>
            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                style={{ width: 500 }}
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <div className="mb-3">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>
            <div style = {{
                textAlign: "center"
            }}>
              <button style={{
                width: 250,
                marginTop: 30,
                backgroundColor: "#5984B6",
                color: "#ffffff"
              }} type="submit" className="btn btn-solid">
                Login
              </button>
            </div>
            <p style = {{
                textAlign: "center",
                marginTop: 20,
            }}>
                <a href="#" style={{
                    color: "#5984B6"
                }}>Forgot password?</a><br/>
                <a href="/register" style={{
                    color: "#5984B6"
                }}>Don't have an account?</a><br/>
            </p>
          </form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
