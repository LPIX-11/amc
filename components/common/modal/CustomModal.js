import { Button, Modal } from 'react-bootstrap';

export default function CustomModal({ title, children, display, size, footer, borderless }) {
  return (
    <Modal
      {...display}
      size={size}
      aria-labelledby={'contained-modal-title-vcenter'}
      centered
      contentClassName={'rounded-0'}
    >
      <Modal.Header className={`${borderless && 'border-0'}`} closeButton>
        <Modal.Title id={'contained-modal-title-vcenter'}>
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
      {footer && <Modal.Footer className={`${borderless && 'border-0'}`}>
        <Button onClick={display.onHide}>Close</Button>
      </Modal.Footer>}
    </Modal>
  )
}