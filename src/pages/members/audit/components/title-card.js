import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import FilterButton from "../../../../components/button/filter-button";
import { SvgFilter } from "../../../../components/svg-icon";
import KSearchBar from "../../../../components/input/searchbar";

const AuditTitleCard = ({ title }) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

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
        <KSearchBar />
        <Box
          gap={1}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FilterButton
            title="Filter"
            startIcon={<SvgFilter />}
            border="1px solid #3259DA"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AuditTitleCard;
