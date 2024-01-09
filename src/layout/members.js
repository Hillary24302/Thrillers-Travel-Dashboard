import { Layout } from "antd";
import Sidebar from "../pages/global/sidebar/Sidebar";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Topbar from "../pages/global/topbar/Topbar";



const MemberLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const handleResize = () => {
    const screenWidth = window.innerWidth;
    setCollapsed(screenWidth <= 1100);
  };

  useEffect(() => {
    handleResize(); // Set initial state

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <Layout style={{ position: "relative" }}>
       <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
       <Layout
        style={{
          background: '#f000',
          width: `${collapsed ? "calc(100% - 80px)" : "calc(100% - 280px)"}`,
          position: "absolute",
          height: "100vh",
          overflow: "hidden",
          overflow: "hidden",
          left: `${collapsed ? "80px" : "280px"}`,
          transition: "0.4s",
          top: 0,
        }}
      >
    <Topbar />
        {/* <Breadcrumb />  */}
         <Box
          style={{
            padding: 20,
            margin: 0,
            minHeight: 280,
            overflowY: "scroll",
            // overflowY: "scroll",
            // scrollBehavior: "smooth",
            // scrollbarX: "hidden",
          }}
        >
           {children ?? <h1>Member layout: Missing layout children</h1>}
         </Box>
       </Layout>
    </Layout>
  );
};

export default MemberLayout;
