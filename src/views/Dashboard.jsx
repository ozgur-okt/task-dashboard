import ModalActionRequired from '../components/modals/ModalActionRequired'
import ConnectionControl from '../components/controls/ConnectionControl'
import Charts from '../components/monitors/Charts'
import StatsDisplay from '../components/monitors/StatsDisplay'
import StatusMessages from '../components/monitors/StatusMessages'
import AscendingSignal from '../components/signals/AscendingSignal'
import ActionRequiredSignal from '../components/signals/ActionRequiredSignal'
import '../styles/views/dashboard.scss'

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