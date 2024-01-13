import { Checkbox, Typography } from 'antd';

const FancyCheckBox = ({ title, subtitle }) => {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div>
        <Typography className='fw-600 fz-14 tprimary'>
          {title}
        </Typography>
        <Typography className='fw-400 fz-14 tsecondary'>
          {subtitle}
        </Typography>
      </div>
      <Checkbox onChange={onChange} style={{ marginLeft: '8px' }} />
    </div>
  );
};

export default FancyCheckBox;