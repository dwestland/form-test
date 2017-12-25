import React, { Component } from 'react';
// import { Values } from 'redux-form-website-template';

import ContactForm from './ContactForm';

class ReduxFormTest extends Component {
  submit = (values) => {
    console.log(values)
  }

  render() {
    return (
      <div>
        I am from ReduxFormTest
        <ContactForm onSubmit={this.submit} />
        {/*<Values form="simple" />*/}
      </div>
    );
  }
}
// Redux Form | ReactJS Tutorial for Beginners | React Redux Tutorial | ReactJS Training | Edureka
// https://www.youtube.com/watch?v=QJbsdW4Cz40
// stoped at 34:15

export default ReduxFormTest;