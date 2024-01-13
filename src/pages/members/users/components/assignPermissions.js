import { Divider, Form, Typography } from "antd";
import { useMediaQuery } from "@mui/material";
import FancyCheckBox from "../../../../components/input/fancy-checkbox";
import KButton from "../../../../components/button/kbutton";

const AssignPermission = () => {
  const isSmallScreen = useMediaQuery('(max-width:700px)');
  return (
    <div
      style={{
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row",
        justifyContent: "flex-start",
      }}
    >
      <div style={{ paddingRight: "120px"}}>
        <Typography className="fw-600 fz-14 tprimary" style={{width: '170px'}}>
          Personal Information
        </Typography>
        <Typography className="fw-400 fz-14 tsecondary mt-5">
        Staff personal details here.
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: isSmallScreen ? "20px" : "none",
          width: '100%',
        }}
      >
        <Form style={{width: '100%'}}>
           <div style={{border: '2px solid #E4E7EC', borderRadius: '8px', padding: '12px 24px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <Typography className="fw-600 fz-12 tprimary">Permissions</Typography>
              <Typography className="fw-600 fz-12 tprimary">Allow</Typography>
            </div>
            <Divider style={{margin: '12px'}}/>
            <div>
              <FancyCheckBox title='Add' subtitle='Controls and adds new members'/>
            </div>
            <Divider style={{margin: '12px'}}/>
            <div>
              <FancyCheckBox title='View' subtitle='Can view all the activities '/>
            </div>
            <Divider style={{margin: '12px'}}/>
            <div>
              <FancyCheckBox title='Edit' subtitle='Controle and modify members'/>
            </div>
            <Divider style={{margin: '12px'}}/>
            <div>
              <FancyCheckBox title='Delete' subtitle='Can view all the activities '/>
            </div>
           </div>
           <div style={{display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: '10px'}}>
            <KButton title='Cancel' border='1px solid #3259DA' color='#3259DA'/>
            <KButton title='Save' background='#3259DA' color='#fff'/>
           </div>
        </Form>
      </div>
    </div>
  );
};
export default AssignPermission;
