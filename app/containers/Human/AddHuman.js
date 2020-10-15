/**
 *
 * Search
 *
 */

import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import ExField from '../../components/ExField';

function AddHuman({ human, onShowModal, onSave }) {
  return (
    <>
      <Button variant="primary" block onClick={() => onShowModal('addHuman')}>
        New Human
      </Button>
      <Modal
        show={human.modal === 'addHuman'}
        onHide={() => onShowModal(false)}
      >
        <Formik
          initialValues={{
            name: '',
          }}
          onSubmit={onSave}
        >
          {({ submitForm }) => (
            <>
              <Modal.Header closeButton>
                <Modal.Title>New Human</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <ExField label="Name" name="name" required />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={submitForm}>
                  Create
                </Button>
              </Modal.Footer>
            </>
          )}
        </Formik>
      </Modal>
    </>
  );
}

AddHuman.propTypes = {
  human: PropTypes.object,
  onShowModal: PropTypes.func,
  onSave: PropTypes.func,
};

export default AddHuman;
