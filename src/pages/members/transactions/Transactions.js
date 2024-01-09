
import Container from "../../../components/container/container"
import TransactionsTable from "./components/Transactions-table"
import TitleCard from "./components/title-card"



const Transactions = () => {
  return (
    <div style={{border: '2px solid ed'}}>
   <Container>
    <TitleCard title='Transactions'/>
    <div style={{marginTop: '20px'}}>
    <TransactionsTable />
    </div>
   </Container>
    </div>
    
  )
}
export default Transactions