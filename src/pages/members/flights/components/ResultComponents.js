import * as React from "react";
import { Typography } from "antd";
import ResultDisplay from "./ResultDisplay";
import Emirate from "../../../../assets/images/emirate.png";

const ResultComponents = () => {


  return (
    <div>
      <div style={{ marginTop: "10px" }}>
        <Typography className="fw-500">RESULT (25)</Typography>
      </div>
      <div style={{ marginTop: "16px" }}>
        <div>
          <ResultDisplay
            image={Emirate}
            fromAirportName="JFK"
            fromAirportTime="13:00"
            companyName="EMIRATE"
            companyTime="11H 20M"
            companyMode="NON-STOP"
            toAirportName="BOM"
            toAirportTime="14:20"
            amount="$1,572"
          />
        </div>
        <div style={{marginTop: '2px'}}>
          <ResultDisplay
            image={Emirate}
            fromAirportName="JFK"
            fromAirportTime="13:00"
            companyName="QATAR AIRWAYS"
            companyTime="11H 20M"
            companyMode="NON-STOP"
            toAirportName="BOM"
            toAirportTime="14:20"
            amount="$1,572"
          />
        </div>
        <div style={{marginTop: '2px'}}>
          <ResultDisplay
            image={Emirate}
            fromAirportName="JFK"
            fromAirportTime="13:00"
            companyName="LUFTHANSA"
            companyTime="11H 20M"
            companyMode="NON-STOP"
            toAirportName="BOM"
            toAirportTime="14:20"
            amount="$1,572"
          />
        </div>
        <div style={{marginTop: '2px'}}>
          <ResultDisplay
            image={Emirate}
            fromAirportName="JFK"
            fromAirportTime="13:00"
            companyName="EMIRATE"
            companyTime="11H 20M"
            companyMode="NON-STOP"
            toAirportName="BOM"
            toAirportTime="14:20"
            amount="$1,572"
          />
        </div>
      </div>
    </div>
  );
};
export default ResultComponents;
