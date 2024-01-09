
import Container from "../../../components/container/container"
import PayrollTransactionsTable from "./components/Payroll-transactions"
import TitleCard from "./components/title-card"



const Payroll = () => {
  return (
    <div style={{border: '2px solid ed'}}>
    <Container>
     <TitleCard title='Employees Payroll'/>
     <div style={{marginTop: '20px'}}>
     <PayrollTransactionsTable />
     </div>
    </Container>
     </div>
  )
}
export default Payroll