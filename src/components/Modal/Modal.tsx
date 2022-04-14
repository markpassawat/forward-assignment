import ReactDOM from 'react-dom'
import styled from 'styled-components'

interface ModalProps {}

const Popup = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
`

const protalElement = document.getElementById('overlays')

const Modal: React.FC<ModalProps> = ({ children }) => {
  return ReactDOM.createPortal(<Popup>{children}</Popup>, protalElement!)
}

export default Modal
