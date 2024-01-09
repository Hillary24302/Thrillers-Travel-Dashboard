import { Input, Typography } from 'antd';

const KInput = ({disabled, title, placeholder}) => {
  return (
    <div>
        <Typography className='fw-500 fz-14 mb-3 tprimary'>{title}</Typography>
        <Input
        size='large'
        placeholder={placeholder}
        allowClear
        disabled = {disabled}
      />
    </div>
   
  )
}
export default KInput