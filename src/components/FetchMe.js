import React, { Component } from 'react';

class FetchMe extends Component {

  componentDidMount() {
    const url = 'https://randomuser.me/api/?nat=us&results=2';
    
    fetch(url)
    .then((response) => {
      console.log('Status:', response.status);
      response.json()
    .then((data) => {
      console.log('FETCH Result:', data.results[0].name.first);
      console.log('Last Name:', data.results[0].name.last);
    })

    


    .catch((err) => {
        console.log('FETCH parsing Error', err)
      });
    });




    // .then(response => {
    //   console.log(`Response status code: ${response.status}`);
    // })
    // .then(response => {
    //   console.log(`The whole response: ${response}`);

    //   response.json().then(funciton(data) {
    //     console.log('Fetch Result: ', data);
    //   })
    // })

    




    // .catch(error => {
    //   console.error(`Error: ${error.message}`);
    // });


  }

  render() {
    return (
      <div>
        I am from FetchMe
      </div>
    );
  }
}

export default FetchMe;



// .then(response => {
//   console.log(`Response status code: ${response.status}`);
// })
