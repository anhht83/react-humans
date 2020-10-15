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

function EditHuman({ human, onHideModal, onSave }) {
  const { selectedHuman } = human;
  return (
    <Modal show={human.modal === 'editHuman'} onHide={() => onHideModal(false)}>
      <Formik
        initialValues={{
          name: selectedHuman.name || '',
        }}
        onSubmit={values => onSave({ ...selectedHuman, ...values })}
      >
        {({ submitForm }) => (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Edit Human</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ExField label="Name" name="name" required />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={submitForm}>
                Save
              </Button>
            </Modal.Footer>
          </>
        )}
      </Formik>
    </Modal>
  );
}

EditHuman.propTypes = {
  human: PropTypes.object,
  onHideModal: PropTypes.func,
  onSave: PropTypes.func,
};

export default EditHuman;
