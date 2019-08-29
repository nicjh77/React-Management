import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer'

const customers = [
  {
    id: 1,
    image: 'https://placeimg.com/64/64/any',
    name: 'John Doe',
    birthday: 20100909,
    gender: 'female',
    job: 'student'
  },
  {
    id: 2,
    image: 'https://placeimg.com/64/64/any',
    name: 'Jain March',
    birthday: 20120303,
    gender: 'female',
    job: 'Admin'
  },
  {
    id: 3,
    image: 'https://placeimg.com/64/64/any',
    name: 'Aaron',
    birthday: 20091212,
    gender: 'male',
    job: 'programmer'
  }
]
class App extends Component {
  render(){
    return (
      <div>
        {customers.map(c => {
            return(
              <Customer 
                key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}
              />  
            )
          })
        }
      </div>
     
    );
  }
}

export default App;
