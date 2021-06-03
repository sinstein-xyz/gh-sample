import { components } from '@octokit/openapi-types';
import axios from 'axios';
import React, { ChangeEvent, useState } from 'react';
import './App.css';
import { RepositoriesListView } from './views/RepositoriesListView';

function App() {
  const [username, setUsername] = useState("")
  const [repositories, setRepositories] = useState<components["schemas"]["repository"][]>();
  const [message, setMessage] = useState<string>()

  const onChange = (e: ChangeEvent<HTMLInputElement>)=> {
    setUsername(e.target.value)
    setRepositories(undefined)
    setMessage(undefined)
  }

  const fetchRepositories = (e: React.SyntheticEvent) => {
    axios.get<components["schemas"]["repository"][]>(`https://api.github.com/users/${username}/repos`)
    .then(function (response) {
        console.log(response);
        setRepositories(response.data)
      })
      .catch(function (error) {
        console.error(error);
        setMessage(error.message)
      })

      e.preventDefault();
      e.stopPropagation();
  }

  return (
    <div className="App">
        <form onSubmit={fetchRepositories}>
          <input type="text" placeholder="Enter Github username" value={username} onChange={onChange} />
          <button type={'submit'}>Fetch Respositories</button>
        </form>
        {message && <p className='message'>{message}</p>}
        {repositories && <RepositoriesListView key={username} repositories={repositories} username={username}/>}
    </div>
  );
}

export default App;
