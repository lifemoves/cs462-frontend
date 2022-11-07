import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";

const Blog = (props) => {
  return (
  <div>
    {props.status == "To Prepare" &&
    <Card style={{
        backgroundColor: "#edeade"
    }}>
      <CardBody className="p-4 text-center">
        <CardTitle tag="h5">{props.name}</CardTitle>
        <CardSubtitle>{props.patientID}</CardSubtitle>

        <hr class="solid"></hr>

        <CardText className="mt-3 fw-bold" style={{
            color: "#5f4a00"
        }}>{props.status}</CardText>

        <Button href={'/preparation/'+ props.patientID} style={{
                backgroundColor: "#2962FF",
                width: 150
            }}>Prepare</Button>
      </CardBody>
    </Card>
    }

    {props.status == "Dispensing Error" &&
    <Card style={{
        backgroundColor: "#eddede"
    }}>
      <CardBody className="p-4 text-center">
        <CardTitle tag="h5">{props.name}</CardTitle>
        <CardSubtitle>{props.patientID}</CardSubtitle>

        <hr class="solid"></hr>

        <CardText className="mt-3 fw-bold" style={{
            color: "#D62727"
        }}>{props.status}</CardText>

        <Button href={'/preparation/'+ props.patientID} style={{
                backgroundColor: "#2962FF",
                width: 150
            }}>Prepare</Button>
      </CardBody>
    </Card>
    }

    {props.status == "Dispensed" &&
    <Card style={{
        backgroundColor: "#e0edde"
    }}>
      <CardBody className="p-4 text-center">
        <CardTitle tag="h5">{props.name}</CardTitle>
        <CardSubtitle>{props.patientID}</CardSubtitle>

        <hr class="solid"></hr>

        <CardText className="mt-3 fw-bold" style={{
            color: "#0D5F00"
        }}>{props.status}</CardText>

        <Button disabled href={'/preparation/'+ props.patientID} style={{
                backgroundColor: "#2962FF",
                width: 150
            }}>Prepare</Button>
      </CardBody>
    </Card>
    }

    </div>


     /*
        {props.status == "Dispensing Error" &&
            <CardText className="mt-3 fw-bold" style={{
                color: "#D62727"
            }}>{props.status}</CardText>
        }
        {props.status == "Dispensed" &&
            <CardText className="mt-3 fw-bold" style={{
                color: "#0D5F00",
            }}>{props.status}</CardText>
        }
        {props.status == "Dispensed" &&
            <Button disabled style={{
                backgroundColor: "#100DB1",
                width: 150
            }}>Prepare</Button>
        }
        {props.status != "Dispensed" &&
            <Button href={'/preparation/'+ props.patientID} style={{
                backgroundColor: "#100DB1",
                width: 150
            }}>Prepare</Button>
        }
        */
  );
};

export default Blog;
