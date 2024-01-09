import * as React from "react";
import { Table } from 'antd';
import { Box, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import { SvgRightArrow } from "../../../../components/svg-icon";
import ImageCard from "../../../../components/cards/image";
import ProfileImage from "../../../../assets/images/profile.svg"
import { useNavigate } from "react-router-dom";
import { paths } from "../../../../routes/paths";
import "./Transaction.css"
import { IconWrapper } from "../../../../components/fancy-icon/icon-wrapper";
import { translateStatus } from "../../../../utils/utils";

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text, record) => (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <ImageCard image={record.profileImage} />
        <Box>
          <Typography className="fw-600 fz-12 tprimary">{text}</Typography>
          <Typography className="fw-400 fz-12 tsecondary">{text}</Typography>
        </Box>
      </Box>
    ),
  },
  { title: 'Amount', dataIndex: 'amount', },
  { title: 'Status', dataIndex: 'status', },
  { title: '', dataIndex: 'action', },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    profileImage: ProfileImage,
    name: `Edward King ${i}`,
    amount: 32,
    status: translateStatus(`Successful`),
    action: <IconWrapper />
  });
}

const Transactions = () => {
  const navigate = useNavigate();

  const handleSeeMoreClick = () => {
    navigate(paths.transactions);
  };

  const renderItems = () => {
    const totalItems = 3;
    const slicedData = data.slice(0, totalItems);

    return (
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: '5px' }}>
          <Typography className="fz-12 fw-600 tprimary">Transactions</Typography>
          <Button
            onClick={handleSeeMoreClick}
            component="label"
            className="fz-10 fw-400"
            sx={{ color: '#EB5017', textTransform: 'none' }}
            endIcon={<SvgRightArrow />}
          >
            See more
          </Button>
        </Box>
        <Box direction="column" sx={{ marginTop: '5px' }}>
          <Table columns={columns} dataSource={slicedData} pagination={false}/>
        </Box>
      </Box>
    );
  };

  return renderItems();
};

export default Transactions;