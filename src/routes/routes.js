import { paths } from './paths';
// import AuthLayout from '../layouts/auth';
import MemberLayout from '../layout/members';
import Dashboard from '../pages/members/dashboard/Dashboard';
import Transactions from '../pages/members/transactions/Transactions';
import PayRoll from '../pages/members/pay-roll/Pay-roll';
import { SvgAudit, SvgDashboard, SvgPayroll, SvgSetting, SvgSupport, SvgTransactions, SvgUsers } from '../components/svg-icon';
import Users from '../pages/members/users/Users';
import AuditTrials from '../pages/members/audit/audit';
import Support from '../pages/members/support/Support';
import Settings from '../pages/members/settings/Settings';

export const membersRoute = [
  {
    title: "Dashboard",
    path: paths.dashboard,
    layout: MemberLayout,
    component: Dashboard,
    protected: true,
    icon: <SvgDashboard />
  },
  {
    title: "Transactions",
    path: paths.transactions,
    layout: MemberLayout,
    component: Transactions,
    protected: true,
    icon: <SvgTransactions />
  },
  {
    title: "Payroll",
    path: paths.payroll,
    layout: MemberLayout,
    component: PayRoll,
    protected: true,
    icon: <SvgPayroll />
  },
  {
    title: "Users",
    path: paths.users,
    layout: MemberLayout,
    component: Users,
    protected: true,
    icon: <SvgUsers />
  },
  {
    title: "Audit Trials",
    path: paths.audit,
    layout: MemberLayout,
    component: AuditTrials,
    protected: true,
    icon: <SvgAudit />
  },
  {
    title: "Support",
    path: paths.support,
    layout: MemberLayout,
    component: Support,
    protected: true,
    icon: <SvgSupport />
  },
  {
    title: "Settings",
    path: paths.settings,
    layout: MemberLayout,
    component: Settings,
    protected: true,
    icon: <SvgSetting />
  }
];


const WebRoutes =[
  ...membersRoute,
];

export default WebRoutes