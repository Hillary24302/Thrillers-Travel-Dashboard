import { Layout, Menu } from "antd";
import React from "react";
import Container from "../../../components/container/container";
import { classnames } from "../../../utils/utils";
import Logo from "../../../components/brand/logo";
import { SvgCollapse, SvgDownload } from "../../../components/svg-icon";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { getMainMenuItems } from "./MainManu";
import SearchBar from "../../../components/searchbar/searchbar";
import { FancyIcon } from "../../../components/fancy-icon/fancy-icon";
import profileImage from "../../../assets/images/image.svg";
import "./Sidebar.css";

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
          <div className="mt--10 mb-10 lcontainer">
            <Logo
              iconColor="#fff"
              textColor="#fff"
              width="120px"
              useIcon={!collapsed}
            />
            <Link to="#" onClick={() => setCollapsed(!collapsed)}>
              <SvgCollapse collapsed={collapsed} />
            </Link>
          </div>
        )}
        <div style={{ marginTop: "12px", marginRight: "-10px" }}>
          <SearchBar
            backgroundColor="#1D2739"
            color="#F9FAFB"
            border="#1D2739"
            placeholder="Search"
          />
        </div>
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
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            background: "transparent",
          }}
        >
          {collapsed ? (
            <FancyIcon image={<img src={profileImage} />} verified={true} />
          ) : (
            <>
              <FancyIcon
                image={<img src={profileImage} />}
                verified={true}
                width="46px"
                height="46px"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "initial",
                }}
              >
                <p className="bigFont">Ejike Hillary</p>
                <p className="smallFont">@callphoneng.com</p>
              </div>
              <SvgDownload />
            </>
          )}
        </div>
      </Container>
    </Layout.Sider>
  );
};

export default Sidebar;
