import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";

const tableData = [
  {
    name: "Hanna Lim",
    username: "@hannalim"
  },
  {
    name: "Jenny Ong",
    username: "@jenong"
  },
  {
    name: "Daniel Tan",
    username: "@dantan123",
  },
  {
    name: "Michael Low",
    username: "@michael15",
  },
  {
    name: "Amy Tan",
    username: "@amytan",
  },
];

const ProjectTables = () => {
  return (
    <div>
      <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            Notifications
          </CardTitle>
          <CardBody>
          <Table className="no-wrap align-middle" responsive borderless>
            <tbody>
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-bottom">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.name} liked your code snippet!</h6>
                        <span className="text-muted">Contact {tdata.name} on Telegram - {tdata.username}</span>
                      </div>
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

export default ProjectTables;
