import React from 'react';
import { Field, reduxForm } from 'redux-form';

import './comment-form.scss';

const validate = values => {
  const errors = {};

  if (!values.comment) {
    errors.comment = 'Required';
  }

  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.phone) {
    errors.phone = 'Required';
  } else if (values.phone.length !== 12) {
    errors.phone = 'Must be 12 characters';
  } else if (parseInt(values.phone) < 0) {
    errors.phone = 'Must contains only numbers';
  }

  return errors;
};

const warn = values => {
  const warnings = {};
  const UrkaineCode = 380;
  const fromUkraine =
    values.phone && values.phone.length === 12
      ? Number(values.phone.substring(0, 3)) === UrkaineCode
      : null;

  if (fromUkraine) {
    warnings.phone = 'Hello compatriot';
  }

  return warnings;
};

const renderField = ({
  input,
  label,
  type,
  minValue,
  textarea,
  meta: { touched, error, warning, invalid, dirty }
}) => {
  const textareaType = (
    <textarea
      {...input}
      placeholder={label}
      type={type}
      className={`form-textarea ${touched && error ? 'form-textarea--error' : ''}`}
    />
  );
  const inputType = (
    <input
      {...input}
      placeholder={label}
      type={type}
      min={minValue}
      className={`form-input ${touched && error ? 'form-input--error' : ''}`}
    />
  );

  return <div>{textarea ? textareaType : inputType}</div>;
};

const CommentForm = ({ handleSubmit, submitting, reset, invalid }) => {
  const preventSubmit = event => {
    event.preventDefault();
    handleSubmit();
    reset();
  };

  return (
    <form onSubmit={preventSubmit} className="comment-form">
      <p>Comment</p>
      <Field
        name="comment"
        type="text"
        component={renderField}
        label="Leave your comment here..."
        textarea
      />
      <Field name="username" type="text" component={renderField} label="Name" />
      <Field name="email" type="email" component={renderField} label="Email" />
      <Field name="phone" type="number" component={renderField} label="Phone" minValue="0" />
      <div className="comment-form-btn-container">
        <button
          type="submit"
          className={`btn ${submitting || invalid ? 'btn--disabled' : null}`}
          disabled={submitting || invalid}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'commentForm',
  validate,
  warn
})(CommentForm);
