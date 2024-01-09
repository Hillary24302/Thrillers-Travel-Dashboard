import { Box, Typography } from "@mui/material";
import { Table } from 'antd';
import ImageCard from "../../../../components/cards/image";
import ProfileImage from "../../../../assets/images/profile.svg"
import { IconWrapper } from "../../../../components/fancy-icon/icon-wrapper";
import { translateStatus } from "../../../../utils/utils";
import { useState } from "react";


const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text, record) => (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <ImageCard image={record.profileImage} />
        <Box>
          <Typography className="fw-600 fz-12 tprimary">{text}</Typography>
          <Typography className="fw-400 fz-12 tsecondary">{record.email}</Typography>
        </Box>
      </Box>
    ),
  },
  { title: 'Role', dataIndex: 'role', },
  { title: 'Earning', dataIndex: 'earning', },
  { title: 'Bonus', dataIndex: 'bonus', },
  { title: 'Total Salary', dataIndex: 'totalsalary', },
  { title: 'Payment Status', dataIndex: 'status', },
  { title: '', dataIndex: 'action', },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    profileImage: ProfileImage,
    name: `Ejike Hillary`,
    email: `e.hillary@callphoneng.com`,
    role: `Supper Admin`,
    earning: `N200,000`,
    bonus: `N2000`,
    totalsalary: `N202,000`,
    status: translateStatus(`Successful`),
    action: <IconWrapper />
  });
}

const PayrollTransactionsTable = () => {

  const slicedData = data.slice(0);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <div style={{border: '2px solid ed'}}>
      <Table rowSelection={rowSelection} columns={columns} dataSource={slicedData} style={{ textAlign: 'center' }} />
    </div>
    
  )
}
export default PayrollTransactionsTable