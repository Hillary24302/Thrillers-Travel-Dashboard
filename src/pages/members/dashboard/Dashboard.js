import { Grid } from "@mui/material"
import Container from "../../../components/container/container"
import WelcomeCard from "./components/Welcome-card"
import BalanceCard from "./components/Balance-card"
import EnquiriesCard from "./components/Enquiries-card"
import QuickSendAvater from "./components/Quick-send-card"
import UsersAvaterCard from "./components/Users-card"
import Transactions from "./components/Transactions-card"


const Dashboard = () => {
  return (
    <div>
    <Container>
      <WelcomeCard />
    <div className="mt-10">
      <Grid container spacing={2}  mb="4px">
      <Grid item md={6} xs={12}>
      <BalanceCard />
      </Grid>
      <Grid item md={6} xs={12}>
      <EnquiriesCard />
      </Grid>
      </Grid>
    </div>
    <div className="mt-10" >
      <Grid container spacing={2}>
        <Grid item md={8} xs={12}>
          <div>
          <QuickSendAvater />
          </div>
          <div>
            <Transactions />
          </div>
        </Grid>
          <Grid item md={4} xs={12}>
            <UsersAvaterCard />
          </Grid>
      </Grid>
    </div>
    </Container>
    </div>
  )
}
export default Dashboard