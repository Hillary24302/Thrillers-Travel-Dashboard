import { Form, Typography } from "antd";
import KInput from "../../../../components/input/input";
import { useMediaQuery } from "@mui/material";
import Verify from "../../../../components/button/verification";
import NoneVerify from "../../../../components/button/noneVerify";
import KButton from "../../../../components/button/kbutton";

const PersonalInformation = () => {
  const isSmallScreen = useMediaQuery('(max-width:700px)');
  const userVerified = true;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row",
        justifyContent: "flex-start",
        paddingBottom: '60px',
      }}
    >
      <div style={{ paddingRight: "120px"}}>
        <Typography className="fw-600 fs-14 tprimary" style={{width: '170px'}}>
          Personal Information
        </Typography>
        <Typography className="fw-400 fs-12 tsecondary mt-5">
        Staff personal details here.
        </Typography>
        <div style={{marginTop: '20px', }}>
        <KButton title='Save Changes' background='#D0D5DD' color='#fff'/>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: isSmallScreen ? "start" :  "center",
          alignItems: isSmallScreen ? "start" :  "center",
          marginTop: isSmallScreen ? "20px" : "none",
          width: '100%'
        }}
      >
        <Form>
          <div style={{display: 'flex', gap: '10px'}}>
            <div>
              <KInput title="Role Name" placeholder="Account Manager" />
            </div>
            <div>
              <KInput title="Phone Number" placeholder="08128774639" />
            </div>
          </div>
          <div className="mt-15">
          <div>
              <KInput disabled={true} title="Email Address" placeholder="e.hillary@callphoneng.com" />
              <div style={{ marginTop: '5px' }}>
                {userVerified ? <Verify /> : <NoneVerify />}
              </div>
            </div>
            <div style={{marginTop: '10px'}}>
              <KInput disabled={true} title="Role" placeholder="Account Manager" />
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default PersonalInformation;
