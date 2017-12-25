import React from 'react';
import { Field, reduxForm } from 'redux-form';

// const validate = values => {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = "Required";
//   }
//   if (!values.lastName) {
//     errors.firstName = "Required";
//   }
//   if (!values.size) {
//     errors.size = "Required";
//   } else if (isNaN (Number(values.size))) {
//     errors.size = "Must be a number";
//   }
//   return errors;
// }

let ContactForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field
          name="firstName"
          component="input"
          type="text"
          placeholder="First Name"
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field
          name="lastName"
          component="input"
          type="text"
          placeholder="Last Name"
        />
      </div>

      <div>
        <label htmlFor="size">Size</label>
        <Field
          name="size"
          component="input"
          type="number"
          placeholder="Size"
        />
      </div>

      <div>
        <label>Sex</label>
        <div>
          <label>
            <Field name="sex" component="input" type="radio" value="male" />
            {' '}
            Male
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="female" />
            {' '}
            Female
          </label>
        </div>
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <Field
          name="email"
          component="input"
          type="email"
          placeholder="Email"
        />
      </div>

      <div>
        <label htmlFor="favoriteColor">favoriteColor</label>
        <Field
          name="favoriteColor"
          component="select"
        >
        <option />
        <option value="ff0000">Red</option>
        <option value="00ff00">Green</option>
        <option value="0000ff">Blue</option>
        </Field>
      </div>

      <div>
        <label htmlFor="employed">Employed</label>
        <Field
          name="employed"
          id="employed"
          component="input"
          type="checkbox"
        />
      </div>

      <div>
        <label htmlFor="notes">Notes</label>
        <Field
          name="notes"
          component="textarea"
          placeholder="Notes"
        />
      </div>
      <button type="submit" disable={pristine || submitting}>Submit</button>
      <button type="button" disable={pristine || submitting} onClick={reset}>Clear Values</button>
    </form>
  )
}

ContactForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(ContactForm)

export default ContactForm;
