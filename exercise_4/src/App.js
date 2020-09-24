import React, {useState} from 'react';
import { Form } from 'semantic-ui-react';
import './App.css';

function App() {

  const [username,setUserName] = useState('MohammedAK1991');
  const [repository, setRepository] = useState('PARTY-FORECAST')

  function handleChange() {

  }

  function handleSubmit() {

  }

  return (
    <div>
      <div className="navbar">
        Find contributors to a github repo
      </div>
      <div className="search">
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Input
              placeholder='Name'
              name='username'
              value={username}
              onChange={handleChange}
            />
            <Form.Input
              placeholder='Email'
              name='repository'
              value={repository}
              onChange={handleChange}
            />
            <Form.Button content='Submit' />
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default App;
