import React, { useState } from "react";
import { Button, Divider, Drawer, Typography } from "antd";
import { IconWrapper } from "../../../../components/fancy-icon/icon-wrapper";
import { FancyIcon } from "../../../../components/fancy-icon/fancy-icon";
import ProfileImage from "../../../../assets/images/profile.svg";
import KCard from "../../../../components/cards/kcard";
import { SvgCopy, SvgDelete } from "../../../../components/svg-icon";
import { translateStatus } from "../../../../utils/utils";
import KSwitch from "../../../../components/input/switch";

const UserDetails = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconWrapper onClick={showDrawer} />
      <Drawer
        placement="right"
        onClose={onClose}
        open={open}
      >
      <div>
      <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "transparent",
            }}
          >
            <FancyIcon image={<img src={ProfileImage} />} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "initial",
                marginLeft: "10px",
              }}
            >
              <Typography className="fw-600 fz-14 tprimary">
                Ejike Hillary
              </Typography>
              <Typography
               className="fw-400 fz-12 tsecondary"
              >
                Added on Jul 11, 2023
              </Typography>
            </div>
          </div>
          <Divider sx={{ my: 2, background: "#0A020D", opacity: 0.08 }} />
          <div>
            <div>
              <KCard title="Airvend ID" subtitle="AV1085555879" copyIcon={<SvgCopy />}/>
            </div>
            <div>
              <KCard title="Email address" subtitle="a.smart@callphoneng.com" copyIcon={<SvgCopy />}/>
            </div>
            <div>
              <KCard title="Phone number" subtitle="(+234) 810 503 4259" copyIcon={<SvgCopy />}/>
            </div>
            <div>
              <KCard title="Staff address" subtitle="124, Oyediran Estate, Lagos, Nigeria, 5432" copyIcon={<SvgCopy />}/>
            </div>
            <div>
              <KCard title="Last visited" subtitle="Jul 11, 2023" />
            </div>
          </div>
          <div>
          <KCard title="Status" subtitle={translateStatus('Active')} />
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '30px'}}>
            <div>
              <Typography className="tsecondary fw-400 fz-14">Blacklist this customer</Typography>
            </div>
            <KSwitch />
          </div>
          <Divider sx={{ my: 2, background: "#0A020D", opacity: 0.08 }} />
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '20px', pb: '30px'}}>
            <div style={{paddingRight: '5px'}}>
              <Button type="link" style={{color: '#E02020'}} >
              Delete account
              </Button>
            </div>
            <SvgDelete />
          </div>
      </div>
      </Drawer>
    </>
  );
};

export default UserDetails;
