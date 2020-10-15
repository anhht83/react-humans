/**
 *
 * Search
 *
 */

import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Search(props) {
  return (
    <FormGroup>
      <FormControl {...props} placeholder="Search ..." />
    </FormGroup>
  );
}

Search.propTypes = {};

export default Search;
