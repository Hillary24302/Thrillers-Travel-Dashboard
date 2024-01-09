import { Button, Dropdown, Typography } from 'antd';
import * as React from "react";
import { SvgCsv, SvgExcel, SvgExport, SvgPdf } from '../svg-icon';

const items = [
  {
    key: '1',
    icon: <SvgPdf />,
    label: (
      <Typography>
        PDF
      </Typography>
    ),
  },
  {
    key: '2',
    icon: <SvgCsv />,
    label: (
      <Typography>
        CSV
      </Typography>
    ),
  },
  {
    key: '3',
    icon: <SvgExcel />,
    label: (
      <Typography>
        Excel File
      </Typography>
    ),
  },
];


const ExportButton = () => {
  return (
    <>
    <Dropdown
      menu={{
        items: items.map(item => ({
          ...item,
          label: (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {item.label}
            </div>
          ),
        })),
      }}
      trigger={['click']}
      placement="bottom"
      arrow
    >
      <Button
      component="label"
      variant="contained"
      icon={<SvgExport />}
      onClick={(e) => e.preventDefault()}
      style={{
        background: "#3259DA",
        textTransform: "none",
        color: "#fff",
        borderRadius: "6px",
        justifyContent: "center",
        textAlign: "center",
        display: "flex"
      }}
    >
      Export
    </Button>
    </Dropdown>
    </>
    
  );
};
export default ExportButton;
