import { Input, Typography } from 'antd';
const { TextArea } = Input;

const KTextArea = ({title, placeholder}) => {

  return (
    <div>
        <Typography className='fw-500 fz-14 mb-3 tprimary'>{title}</Typography>
        <TextArea
        placeholder={placeholder}
        allowClear
        rows={4}
      />
    </div>
   
  )
}
export default KTextArea