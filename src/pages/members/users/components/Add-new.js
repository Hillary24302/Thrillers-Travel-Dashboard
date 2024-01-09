import React, { useState } from "react";
import { Button, Divider, Drawer, Select, Space } from 'antd';
import { SvgAdd } from "../../../../components/svg-icon";
import TitleCard from "../../../../components/cards/title-card";
import PersonalInformation from "../../settings/components/personal-infor";

const AddNewRole = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} type="primary" onClick={showDrawer} icon={<SvgAdd />}>
        Add New
      </Button>
      <Drawer
        width={952}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
      <div>
     <TitleCard title='Add New Role' subtitle='Take a look at your policies and the new policy to see what is covered'/>
     <div style={{ border: "1px solid #F0F2F5", background: '#fff', marginTop: '20px', padding: "0px 20px",}}>
      <PersonalInformation />
      <Divider style={{marginTop: '40px'}}/>
      {/* <PersonalInformation /> */}
     </div>
     </div>
     </Drawer>
    </>
  );
};

export default AddNewRole;
