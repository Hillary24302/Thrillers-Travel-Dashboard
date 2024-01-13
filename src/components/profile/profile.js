import React, { useState } from "react";
import { Dropdown, Space } from 'antd';
import ProfileImage from "../../assets/images/profile.svg";

const Profile = () => {
  const [open, setOpen] = useState(false);
  const handleMenuClick = (e) => {
    if (e.key === '3') {
      setOpen(false);
    }
  };
  const handleOpenChange = (nextOpen, info) => {
    if (info.source === 'trigger' || nextOpen) {
      setOpen(nextOpen);
    }
  };

  const items = [
    {
      label: 'Ejike Hillary',
      key: '1',
    },
    {
      label: 'e.hillary@callphoneng.com',
      key: '2',
    },
  ];

  const handleOpenDropdown = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <Dropdown
      menu={{
        items,
        onClick: handleMenuClick,
      }}
      onOpenChange={handleOpenChange}
      open={open}
    >
      <a onClick={handleOpenDropdown}>
        <Space>
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: "36px",
            }}
          >
            <img
              alt="profile user"
              width="100%"
              height="100%"
              src={ProfileImage}
              style={{ cursor: "pointer" }}
              onClick={handleOpenDropdown}
            />
          </div>
        </Space>
      </a>
    </Dropdown>
  );
};

export default Profile;