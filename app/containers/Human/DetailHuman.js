/**
 *
 * Search
 *
 */

import React from 'react';
import { Media, Dropdown } from 'react-bootstrap';
import PropTypes from 'prop-types';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={e => {
      e.preventDefault();
      onClick(e);
    }}
  >
    ...
  </a>
));

function DetailHuman({ human, onEdit, onDelete }) {
  const { selectedHuman } = human;
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this human?')) {
      onDelete();
    }
  };
  return (
    <Media>
      <img
        width={100}
        height={100}
        className="mr-3 border rounded-circle"
        src="./human-icon.png"
        alt="Avatar"
      />
      <Media.Body>
        <h5>
          <Dropdown>
            {selectedHuman.name}{' '}
            <Dropdown.Toggle
              as={CustomToggle}
              variant="success"
              id="dropdown-basic"
            />
            <Dropdown.Menu>
              <Dropdown.Item onClick={handleDelete}>Delete</Dropdown.Item>
              <Dropdown.Item onClick={onEdit}>Edit</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </h5>
      </Media.Body>
    </Media>
  );
}

DetailHuman.propTypes = {
  human: PropTypes.object,
  onDelete: PropTypes.func,
};

export default DetailHuman;
