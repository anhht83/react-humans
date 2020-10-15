/**
 *
 * Search
 *
 */

import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function Step({ human, onGotoStep }) {
  const { step } = human;
  switch (step) {
    case 1:
      return (
        <div className="d-flex justify-content-between w-100 d-lg-none">
          <Button variant="link" onClick={() => onGotoStep(0)}>
            &#8592; Humans
          </Button>
          <Button variant="link" onClick={() => onGotoStep(2)}>
            Events &#8594;
          </Button>
        </div>
      );
    case 2:
      return (
        <div className="d-flex justify-content-between w-100 d-lg-none">
          <Button variant="link" onClick={() => onGotoStep(1)}>
            &#8592; Human
          </Button>
          <Button variant="link" onClick={() => onGotoStep(0)}>
            Humans &#8594;
          </Button>
        </div>
      );
    default:
      return null;
  }
}

Step.propTypes = {
  human: PropTypes.object,
  onGotoStep: PropTypes.func,
};

export default Step;
