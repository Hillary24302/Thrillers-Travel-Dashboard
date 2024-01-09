import { Box, Typography } from "@mui/material";
import { Table } from 'antd';
import ImageCard from "../../../../components/cards/image";
import ProfileImage from "../../../../assets/images/profile.svg"
import { translateStatus } from "../../../../utils/utils";
import { useState } from "react";
import UserDetails from "./Details";


const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text, record) => (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <ImageCard image={record.profileImage} />
        <Box>
          <Typography className="fw-600 fz-12 tprimary">{text}</Typography>
          <Typography className="fw-400 fz-12 tsecondary">{record.phone}</Typography>
        </Box>
      </Box>
    ),
  },
  { title: 'Role', dataIndex: 'role', },
  { title: 'EmailAdress', dataIndex: 'email', },
  { title: 'Date', dataIndex: 'date', },
  { title: 'Status', dataIndex: 'status', },
  { title: '', dataIndex: 'action', },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    profileImage: ProfileImage,
    name: `Ejike Hillary`,
    phone: `08128774639`,
    role: `Supper Admin`,
    email: `e.hillary@callphoneng.com`,
    date: `11, 2023 | 05:46PM`,
    status: translateStatus(`Pending`),
    action: <UserDetails />
  });
}

const UsersTransactionsTable = () => {

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
export default UsersTransactionsTable