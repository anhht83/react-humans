/**
 *
 * ExCol
 *
 */

import { Col } from 'react-bootstrap';
import styled from 'styled-components';

const ExCol = styled(Col)`
  min-height: auto;
  background-color: ${props =>
    props.bg === 'grey' ? 'rgb(236, 236, 236)' : 'inherit'};
  border: ${props =>
    props.bg === 'grey' ? 'rgb(223, 223, 223) 1px solid' : 'none'};
  border-weight: 0px 1px;
  @media (min-width: 992px) {
    min-height: calc(100vh - 56px);
  }
`;

export default ExCol;
