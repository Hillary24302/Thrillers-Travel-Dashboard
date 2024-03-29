import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space } from 'antd';
const items = [
  {
    label: 'First Class',
    key: '0',
  },
  {
    label: 'Economy',
    key: '1',
  },
];
const DropdownButton = () => (
  <Dropdown
    menu={{
      items,
    }}
    trigger={['click']}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Button style={{borderRadius:'12px'}}>
        TICKET OF CLASS
        <DownOutlined />
      </Button>
    </a>
  </Dropdown>
);
export default DropdownButton;