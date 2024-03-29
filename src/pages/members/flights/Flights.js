import { Grid } from "@mui/material"
import Container from "../../../components/container/container"
import CardWrapper from "./components/CardWrapper"
import ResultComponents from "./components/ResultComponents"
import CustomersDetailsBoard from "./components/CustomersDetails"
import { Col, Row } from "antd";



const FlightPage = () => {
  return (
    <div>
    <Container>
    <div className="mt-10">
      <CardWrapper />
    </div>
    <div className="mt-10" >
      <Row   gutter={16}>
        <Col  xs={24} lg={16}>
          <div>
          <ResultComponents />
          </div>
        </Col>
          <Col xs={24} lg={8}>
            <CustomersDetailsBoard />
          </Col>
      </Row>
    </div>
    </Container>
    </div>
  )
}
export default FlightPage