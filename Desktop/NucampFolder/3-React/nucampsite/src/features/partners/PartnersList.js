import { Col, Row } from "reactstrap";
import Partner from "./Partners";
import { selectAllPartners } from "./partnersSlice.js";
const PartnersList = () => {
  const Partners = selectAllPartners();
  return (
    <Col className="mt-4">
      <Row>
        {Partners.map((partner) => {
          return (
            <div className="d-flex mb-5" and key={partner.id}>
              <Partner partner={partner} />
            </div>
          );
        })}
      </Row>
    </Col>
  );
};
export default PartnersList;
