
import { Divider } from "antd"
import Container from "../../../components/container/container"
import ButtonGroup from "./components/ButtonGroup"
import SettingsTitleCard from "./components/TitleCard"
import Profile from "./components/profile"
import PersonalInformation from "./components/personal-infor"
import TitleCard from "../../../components/cards/title-card"

const Settings = () => {
  return (
    <div>
    <Container>
     <TitleCard title='Settings' subtitle='Take a look at your policies and the new policy to see what is covered'/>
     <div style={{marginTop: '20px'}}>
    <ButtonGroup />
     </div>
     <div style={{ border: "1px solid #F0F2F5", background: '#fff', marginTop: '20px', padding: "0px 20px",}}>
      <Profile />
      <Divider style={{marginTop: '40px'}}/>
      <PersonalInformation />
     </div>
    </Container>
     </div>
  )
}
export default Settings