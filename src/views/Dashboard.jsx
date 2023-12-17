import ModalActionRequired from '../components/modal/ModalActionRequired'
import ConnectionControl from '../components/connection-control/ConnectionControl'
import Charts from '../components/charts/Charts'
import StatsDisplay from '../components/stats-display/StatsDisplay'
import StatusMessages from '../components/status-messages/StatusMessages'
import AscendingSignal from '../components/ascending-signal/AscendingSignal'
import ActionRequiredSignal from '../components/action-required-signal/ActionRequiredSignal'
import './dashboard.scss'

const Dashboard = () => {
  return (
    <>
      <ModalActionRequired />
      <div className='dashboard'>
        <div className='dashboard-left'>
          <Charts name={'altitude'} />
          <Charts name={'temperature'} />
          <Charts name={'velocity'} />
        </div>
        <div className='dashboard-right'>
          <div className='status-messages'>
            <StatusMessages />
          </div>
          <div className='ascending'>
            <AscendingSignal />
          </div>
          <div className='stats-monitor'>
            <StatsDisplay  name={'altitude'} />
            <StatsDisplay  name={'temperature'} />
            <StatsDisplay  name={'velocity'} />
          </div>
          <div className='action'>
            <ActionRequiredSignal />
          </div>
          <div className='connection-control'>
            <ConnectionControl />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard