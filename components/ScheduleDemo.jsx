import React from 'react'
import Modal from 'react-bootstrap/Modal';
import CalEmbed from "@calcom/embed-react";

const ScheduleDemo = ({ show, handleClose }) => {
  return (
      <Modal show={show} size="lg" onHide={handleClose} centered>
          <Modal.Header closeButton>
              <Modal.Title>Schedule a Demo</Modal.Title>
          </Modal.Header>
          <Modal.Body>

              <CalEmbed
                  calLink="bizzilo-product-demo"
                  style={{ width: "100%", height: "100%", border: "0" }}
              />
              <iframe src="https://calendar.bizzilo.com/team/bizzilo-product-demo/bizzilo-product-demo?overlayCalendar=true" height={600} width={600} />

          </Modal.Body>

      </Modal>
  )
}

export default ScheduleDemo
