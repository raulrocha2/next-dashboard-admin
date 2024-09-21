import Card from "../ui/dashboard/card/card"
import Chart from "../ui/dashboard/chart/chart"
import Styles from '../ui/dashboard/dashboard.module.css'
import Rightbar from "../ui/dashboard/rightbar/rightbar"
import Transactions from "../ui/dashboard/transactions/transactions"

const Dashboard = () => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.main}>
        <div className={Styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={Styles.side}>
        <Rightbar />
      </div>
    </div>
  )
}

export default Dashboard