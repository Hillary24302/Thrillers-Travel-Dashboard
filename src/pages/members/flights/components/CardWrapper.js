import * as React from "react";
import CustomCard from "./CustomCard";
import MiniCustomCard from "./MiniCustomCard";
import { SvgCollapse, SvgStop } from "../../../../components/svg-icon";
import { Col, Row } from "antd";

const CardWrapper = () => {
  return (
    <div style={{ width: "100%", background: "#fff", borderRadius: "24px" }}>
      <Row gutter={16}>
        <Col xs={24} lg={12}>
          <div style={{padding: '16px 0px 0px 16px'}}> 
          <CustomCard />
          </div>
          <div style={{padding: '16px 0px 16px 16px'}}> 
          <CustomCard />
          </div>
        </Col>
        <Col  xs={24} lg={6}>
          <div style={{padding: '16px 0px 0px 0px'}}>
            <MiniCustomCard icon={<SvgCollapse color="#3D5654"/>} title='29 MARCH 2024'/>
          </div>
          <div style={{padding: '16px 0px 16px 0px'}}>
            <MiniCustomCard  title='FIRST CLASS' icon={<SvgCollapse color="#3D5654"/>}/>
          </div>
        </Col>
        <Col xs={24} lg={6}>
        <div style={{padding: '16px 16px 0px 0px'}}>
            <MiniCustomCard title='2 TRAVELLER' icon={<SvgCollapse color="#3D5654"/>}/>
          </div>
          <div style={{padding: '16px 16px 16px 0px'}}>
            <MiniCustomCard title='SEARCH' background="#D6A217"/>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default CardWrapper;
