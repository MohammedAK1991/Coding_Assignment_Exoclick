import React, {useState} from 'react';
import { Form } from 'semantic-ui-react';
import './App.css';
import ContributorCard from './ContributorCard'

export default function App() {

  const initialState = {
    username: '',
    repository: ''
  }

  const [state, setState] = React.useState(initialState);
  const [contributors, setContributors] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const  handleSubmit = () => {
    fetch(`https://api.github.com/repos/${state.username}/${state.repository}/contributors`)
      .then(res => res.json())
      .then(data => setContributors(data));
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
              placeholder='Enter username here'
              name='username'
              value={state.username}
              onChange={handleChange}
            />
            <Form.Input
              placeholder='enter repo name here'
              name='repository'
              value={state.repository}
              onChange={handleChange}
            />
            <Form.Button content='Submit' />
          </Form.Group>
        </Form>
      </div>
        <div className="list">
          {contributors &&
            contributors.map(person => <ContributorCard person={person} />)
          }
        </div>

    </div>
  );
}

