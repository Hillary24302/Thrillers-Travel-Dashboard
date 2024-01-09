import Container from "../../../components/container/container"
import AuditTransactionsTable from "./components/audit-transactions"
import AuditTitleCard from "./components/title-card"



const AuditTrials = () => {
  return (
    <div style={{border: '2px solid ed'}}>
    <Container>
     <AuditTitleCard title='Audit Trail'/>
     <div style={{marginTop: '20px'}}>
     <AuditTransactionsTable />
     </div>
    </Container>
     </div>
  )
}
export default AuditTrials