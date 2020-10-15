/**
 *
 * Human
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { push } from 'connected-react-router';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { Container, Row } from 'react-bootstrap';
import makeSelectHuman from './selectors';
import reducer from './reducer';
import saga from './saga';
import Header from '../../components/Header';
import ExCol from '../../components/ExCol';
import Search from '../../components/Search';
import AddHuman from './AddHuman';
import {
  addHuman,
  deleteHuman,
  editHuman,
  fetchHumans,
  gotoStep,
  selectHuman,
  showModal,
} from './actions';
import Humans from './Humans';
import DetailHuman from './DetailHuman';
import EditHuman from './EditHuman';
import Step from './Step';
export function Human({ human, match, dispatch }) {
  useInjectReducer({ key: 'human', reducer });
  useInjectSaga({ key: 'human', saga });

  useEffect(() => {
    dispatch(fetchHumans());
  }, []);

  useEffect(() => {
    if (match.params.id) {
      dispatch(selectHuman({ id: match.params.id }));
    }
  }, [match.params.id]);
  return (
    <>
      <Helmet>
        <title>humans.io</title>
        <meta name="description" content="" />
      </Helmet>
      <Header />
      <Container>
        <Row>
          <Step
            human={human}
            onGotoStep={step => {
              if (step === 0) {
                dispatch(selectHuman(false));
                dispatch(push('/'));
              } else {
                dispatch(gotoStep(step));
              }
            }}
          />
        </Row>
        <Row>
          <ExCol
            lg={3}
            bg="grey"
            className={`px-0 d-lg-block ${human.step === 0 ? '' : 'd-none'}`}
          >
            <div className="px-3 py-3">
              <Search
                onChange={evt =>
                  dispatch(fetchHumans(evt.currentTarget.value.trim()))
                }
              />
              <AddHuman
                human={human}
                onShowModal={modal => dispatch(showModal(modal))}
                onSave={data => dispatch(addHuman(data))}
              />
            </div>
            <Humans human={human} />
          </ExCol>
          <ExCol className="p-3">
            {human.selectedHuman.id && (
              <div className={`d-lg-block ${human.step === 1 ? '' : 'd-none'}`}>
                <DetailHuman
                  human={human}
                  onDelete={() => dispatch(deleteHuman(human.selectedHuman.id))}
                  onEdit={() => dispatch(showModal('editHuman'))}
                />
                <EditHuman
                  human={human}
                  onHideModal={() => dispatch(showModal(false))}
                  onSave={data => dispatch(editHuman(data))}
                />
              </div>
            )}
            {!human.selectedHuman.id && (
              <h4 className={`d-lg-block ${human.step === 1 ? '' : 'd-none'}`}>
                Select a human
              </h4>
            )}
          </ExCol>
          <ExCol
            lg={3}
            bg="grey"
            className={`p-3 d-lg-block ${human.step === 2 ? '' : 'd-none'}`}
          >
            Events
          </ExCol>
        </Row>
      </Container>
    </>
  );
}

Human.propTypes = {
  match: PropTypes.object,
  human: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  human: makeSelectHuman(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Human);
