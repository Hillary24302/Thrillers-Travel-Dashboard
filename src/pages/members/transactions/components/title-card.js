import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import FilterButton from "../../../../components/button/filter-button";
import ExportButton from "../../../../components/button/export-button";
import GroupCard from "../../../../components/cards/group-card";


const TitleCard = ({ title }) => {
  const isSmallScreen = useMediaQuery("(max-width:750px)");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row",
        justifyContent: isSmallScreen ? "start" : "space-between",
        alignItems: isSmallScreen ? "start" : "center",
      }}
    >
      <Typography className=" fw-600 fz-16 tprimary">{title}</Typography>
      <Box
        className="tprimary"
        gap={1}
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          justifyContent: isSmallScreen ? "start" : "space-between",
          alignItems: isSmallScreen ? "start" : "center",
        }}
      >
        <GroupCard />
        <Box
          gap={1}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FilterButton />
          <ExportButton />
        </Box>
      </Box>
    </Box>
  );
};

export default TitleCard;
