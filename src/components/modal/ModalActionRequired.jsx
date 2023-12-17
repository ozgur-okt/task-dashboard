import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { modalStyles } from './modalStyles'
import { actOnSpectrum } from '../../redux/actions/spectrumActions'
import Modal from 'react-modal'
import './modal-action-required.scss'

const ModalActionRequired = () => {
  const dispacth = useDispatch()
  const isActionRequired = useSelector(state => state.spectrum.isActionRequired)
  const [modalOpen, setModalOpen] = useState(false)

  const takeAction = () => {
    setModalOpen(false)
    dispacth(actOnSpectrum())
  }

  useEffect(() => {
    if (isActionRequired) {
      setModalOpen(true)
    }
  }, [isActionRequired])

  Modal.setAppElement('body')

  return (
    <Modal isOpen={modalOpen} style={modalStyles}>
      <h1 className='modal-title'>CRITICAL ACTION REQUIRED</h1>
      <button className='modal-button' onClick={() => takeAction()}>TAKE ACTION</button>
    </Modal>
  )
}

export default ModalActionRequired