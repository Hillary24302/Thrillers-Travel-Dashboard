import { Col, Layout, Menu, Row, Typography } from "antd";
import React from "react";
import Container from "../../../components/container/container";
import { classnames } from "../../../utils/utils";
import { SvgCollapse } from "../../../components/svg-icon";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { getMainMenuItems } from "./MainManu";
import { FancyImage } from "../../../components/fancyImage/fancyImage";
import profileImage from "../../../assets/images/image.svg";
import Maplog from "../../../assets/images/maplog.jpg";
import "./Sidebar.css";
import { Avater } from "../../../components/fancyImage/avatar";

const Sidebar = ({ className, collapsed, setCollapsed, ...rest }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const onMenuClicked = ({ key }) => {
    navigate(key);
  };

  return (
    <Layout.Sider
      collapsed={collapsed}
      className={classnames(
        "k-sidebar",
        collapsed ? undefined : "k-sidebar-size",
        className
      )}
      {...rest}
    >
      <Container fluid={true}>
        {collapsed ? (
          <Link to="#" onClick={() => setCollapsed(!collapsed)}>
            <SvgCollapse collapsed={collapsed} />
          </Link>
        ) : (
          <div>
            <Row style={{justifyContent: 'center', alignItems: 'center'}}>
              <Col span={22}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FancyImage
                  width="64px"
                  height="64px"
                  border='2px solid #D6A217'
                  padding='4px'
                  image={<img src={profileImage} />}
                />
              </div>
              </Col>
              <Col span={2}>
                <Link to="#" onClick={() => setCollapsed(!collapsed)}>
                  <SvgCollapse collapsed={collapsed} />
                </Link>
              </Col>
            </Row>
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "10px",
                  textAlign: "initial",
                }}
              >
                <p className="bigFont">Ejike Hillary</p>
                <p className="smallFont">hillaryejike24302@gmail.com</p>
              </div>
            </div>
          </div>
        )}
        <div
          className="k-sidebar-main"
          style={{ marginTop: "15px", marginRight: "-15px" }}
        >
          <Menu
            style={{
              width: "100%",
            }}
            className={classnames("k-main-menu")}
            defaultSelectedKeys={[location.pathname]}
            defaultOpenKeys={[location.pathname]}
            mode="inline"
            theme="dark"
            items={getMainMenuItems()}
            onClick={onMenuClicked}
          />
        </div>
        {!collapsed && (
          <div style={{ marginTop: "10px" }}>
            <Typography className="ttetiary fz-14 fw-400">
              ACTIVE USERS
            </Typography>
            <div style={{ marginTop: "5px" }}>
              <Avater />
            </div>
            <div style={{ marginLeft: "20px", marginTop: "5px" }}>
              <FancyImage
                width="80px"
                height="80px"
                image={<img src={Maplog} />}
              />
            </div>
          </div>
        )}
      </Container>
    </Layout.Sider>
  );
};

export default Sidebar;
