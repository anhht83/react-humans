/**
 *
 * Search
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.ul`
  list-style-type: none;
  padding: 0px 0px;
  color: rgb(85, 85, 85);
  overflow: hidden auto;
`;

const Item = styled.li`
  list-style-type: none;
  color: rgb(85, 85, 85);
  :hover {
    background-color: #fdfdfe;
  }
  background-color: ${props =>
    props.selected ? 'rgb(223, 223, 223)' : 'inherit'};
`;

const ExLink = styled(Link)`
  padding: 5px 15px;
  display: block;
  color: rgb(0, 0, 0);
  text-decoration: none;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
  :hover {
    color: rgb(0, 0, 0);
    text-decoration: none;
  }
`;

function Humans({ human }) {
  const { humans, selectedHuman } = human;
  return (
    <List>
      {Object.keys(humans).map(id => (
        <Item key={id} selected={id === selectedHuman.id}>
          <ExLink to={`/${id}`}>{humans[id].name}</ExLink>
        </Item>
      ))}
    </List>
  );
}

Humans.propTypes = {
  human: PropTypes.object,
};

export default Humans;
