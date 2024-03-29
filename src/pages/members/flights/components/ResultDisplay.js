import * as React from "react";
import { FancyImage } from "../../../../components/fancyImage/fancyImage";
import { Col, Row, Typography } from "antd";
import KButton from "../../../../components/button/kbutton";

const ResultDisplay = ({
  image,
  fromAirportName,
  fromAirportTime,
  companyName,
  companyTime,
  companyMode,
  toAirportName,
  toAirportTime,
  amount,
}) => {


  // const isSmallScreen = useMediaQuery("(max-width: 700px)");


  return (
    <div style={{ background: "#fff", borderRadius: "12px", padding: "12px" }}>
      <Row>
        <Col span={6}>
          <FancyImage width="64px" height="64px" image={<img src={image} />} />
        </Col>
        <Col span={4}>
          <div>
            <Typography className="fw-500 fz-16">{fromAirportName}</Typography>
            <Typography className="fw-400 fz-12 mt-15">
              {fromAirportTime}
            </Typography>
          </div>
        </Col>
        <Col span={5}>
          <div>
            <Typography className="fw-500 fz-10">{companyName}</Typography>
            <Typography
              className="fw-400 fz-12"
              style={{ color: "#D6A217", marginTop: "2px" }}
            >
              {companyTime}
            </Typography>
            <Typography className="fw-500 fz-12" style={{ marginTop: "2px" }}>
              {companyMode}
            </Typography>
          </div>
        </Col>
        <Col span={4}>
          <div>
            <Typography className="fw-500 fz-16">{toAirportName}</Typography>
            <Typography className="fw-400 fz-12 mt-15">
              {toAirportTime}
            </Typography>
          </div>
        </Col>
        <Col span={5}>
          <div style={{marginRight: '10px'}}>
            <Typography className="fw-400 fz-12" style={{ textAlign: "end" }}>
              {amount}
            </Typography>
            <div style={{ marginTop: "10px" }}>
              <KButton title="BOOK NOW" background="#D6A217" color="#fff" />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default ResultDisplay;
