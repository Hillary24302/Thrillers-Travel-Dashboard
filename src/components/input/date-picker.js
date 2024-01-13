import React from 'react'
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;


const KDatePicker = () => {

  return (
    <div >
       <RangePicker 
       allowClear
       />
    </div>
  );
}
export default KDatePicker