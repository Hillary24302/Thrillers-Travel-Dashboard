
import Container from "../../../components/container/container"
import UsersTitleCard from "./components/title-card"
import UsersTransactionsTable from "./components/users-transactions"

const Users = () => {
  return (
    <div style={{border: '2px solid ed'}}>
    <Container>
     <UsersTitleCard title='Users'/>
     <div style={{marginTop: '20px'}}>
     <UsersTransactionsTable />
     </div>
    </Container>
     </div>
  )
}
export default Users