/**
 *
 * ExField
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap';
const defaultValidate = (value, props) => {
  if (props.required && (value === '' || value === null))
    return 'This field is required';
  if (
    props.type === 'email' &&
    value &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,8}$/i.test(value)
  )
    return 'Email is incorrect';
  return null;
};

function ExField({
  label,
  type = 'input',
  text,
  classNameGroup = '',
  classNameInput = '',
  children,
  ...props
}) {
  const [field, meta] = useField({
    ...props,
    validate: value => defaultValidate(value, props),
  });
  const isInvalid = meta.touched && meta.error;
  return (
    <FormGroup className={classNameGroup}>
      {label && <FormLabel> {label}</FormLabel>}
      <FormControl
        as={type}
        {...field}
        {...props}
        className={`${classNameInput} ${isInvalid ? 'is-invalid' : ''}`}
      >
        {children}
      </FormControl>
      {text && !isInvalid && <span className="form-text">{text}</span>}
      {isInvalid ? <div className="invalid-feedback">{meta.error}</div> : null}
    </FormGroup>
  );
}

ExField.propTypes = {
  label: PropTypes.string,
  text: PropTypes.string,
  classNameGroup: PropTypes.string,
  classNameInput: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.oneOf([
    PropTypes.object,
    PropTypes.func,
    PropTypes.array,
  ]),
};

export default ExField;
