import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';

const KSearchBar = () => {
  return (
    <Input
    prefix={<SearchOutlined />}
    placeholder="Search for name or email"
    allowClear
  />
  )
}
export default KSearchBar